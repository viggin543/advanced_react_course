class Api {
  rawdata;
  constructor(rawdata) {
    this.rawdata = rawdata;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    },{})
  }
  getArticles() {
    return this.mapIntoObject(this.rawdata.articles);
  }
  getAuthors() {
    return this.mapIntoObject(this.rawdata.authors);
  }
}

export default Api;