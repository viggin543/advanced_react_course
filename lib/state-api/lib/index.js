class StateApi {
  constructor(rawdata) {
    this.data = {
      authors: this.mapIntoObject(rawdata.authors),
      articles: this.mapIntoObject(rawdata.articles),
      searchTerm: '',
      timestamp : new Date('2017-01-01T00:00:00.000Z')
    };
    this.subscribers = {};
    this.subscriberMaxId = 0;
    const fakeArticle = {
      ...rawdata.articles[0],
      id:'fakeId'
    };
    setTimeout(() => {
      this.data = {
        ...this.data,
        articles: {
          ...this.data.articles,
          ['fakeId']: fakeArticle
        }
      };
    },1000);
  }

  mergeWithState = (val) => {
    this.data = {
      ...this.data,
      ...val
    };
    this.notifyAll();
  }
  search = (searchTerm) => {    
    this.mergeWithState({searchTerm});
  }

  subscribe = (cb) => {
    this.subscribers[++this.subscriberMaxId] = cb;    
    return this.subscriberMaxId;
  }

  unsubscribe = (id) => delete this.subscribers[id];
  //$r.props.store.getState() in brower console
  notifyAll = () => Object.values(this.subscribers).forEach((cb) => cb());
  
  startClock = () => {
    setInterval(
      () => this.mergeWithState({ timestamp: new Date() }),
      1000*60);
  }

  mapIntoObject = (arr) => {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getState = () => {
    return this.data;
  }
  lookupAuthor = (id) => this.data.authors[id]
}

export default StateApi;