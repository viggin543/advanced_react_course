import Api from 'state-api';
import { data } from '../testData';

const unit = new Api(data);

describe('api', () => {

  it('should expose articles object', () => {
    const articles = unit.getArticles();
    const id = data.articles[0].id
    const title = data.articles[0].title
    expect(articles[id].title).toBe(title);
  });

  it('should expose authors object', () => {
    const articles = unit.getAuthors();
    const id = data.authors[0].id
    const firstName = data.authors[0].firstName
    expect(articles[id].firstName).toBe(firstName);
  });
});