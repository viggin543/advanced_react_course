class Api {
  constructor(rawdata) {
    this.data = {
      authors: this.mapIntoObject(rawdata.authors),
      articles: this.mapIntoObject(rawdata.articles)
    }
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {})
  }
  getState() {
    return this.data;
  }
}

export default Api;