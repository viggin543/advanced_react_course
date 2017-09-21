class StateApi {
  constructor(rawdata) {
    this.data = {
      authors: this.mapIntoObject(rawdata.authors),
      articles: this.mapIntoObject(rawdata.articles),
      searchTerm: ''
    };
    this.subscribers = {};
    this.subscriberMaxId = 0;
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

  unSubscribe = (id) => delete this.subscribers[id];
  //$r.props.store.getState() in brower console
  notifyAll = () => Object.values(this.subscribers).forEach((cb) => cb());
  
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