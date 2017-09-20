import Api from 'state-api';
import { data } from '../testData';

const unit = new Api(data);

describe('api', () => {

  it('should expose articles object', () => {
    const articles = unit.getState().articles;
    const id = data.articles[0].id
    const title = data.articles[0].title
    expect(articles[id].title).toBe(title);
  });

  it('should expose authors object', () => {
    const authors = unit.getState().authors;
    const id = data.authors[0].id
    const firstName = data.authors[0].firstName
    expect(authors[id].firstName).toBe(firstName);
  });
});