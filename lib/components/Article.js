import React from 'react';
import PropTypes from 'prop-types';
import StoreProvider from './StoreProvider';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
    minWidth:'400px'
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.8em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const dateDisplay = (date) => new Date(date).toDateString();

class Article extends React.PureComponent {
  render() {
    const { article, author } = this.props;
    return (
      <div style={styles.article} >
        <div style={styles.title} >{article.title}</div>
        <div style={styles.date}>{dateDisplay(article.date)}</div>
        <div style={styles.author}>
          <a href={author.website}>
            {author.firstName} {author.lastName}
          </a>
        </div>
        <div style={styles.body}>{article.body}</div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

const extraProps = (store, originalProps) => {
  return { author: store.lookupAuthor(originalProps.article.authorId) };
};

export default StoreProvider(extraProps)(Article);