import axios from 'axios';
import querystring from 'querystring';

const apiUtils = {
  /**
   * Search for a book by title and/or author in the Google Books api
   * @param {String} title
   * @param {String} author
   * @returns {Promise}
   */
  findBook(title, author) {
    const queryTitle = title ? `intitle:${title}` : '';
    const queryAuthor = author ? `inauthor:${author}` : '';
    const queryConnector = queryTitle && queryAuthor ? '+' : '';
    const queryParams = querystring.stringify({
      key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
      q: `${queryTitle}${queryConnector}${queryAuthor}`,
    });

    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?${queryParams}`,
    ).then((res) => {
      const bookDatas = res.data.items || [];

      if (!bookDatas.length) {
        throw new Error('Book not found');
      }

      // Let's just take the first result and hope it's ok :)
      const bookData = bookDatas[0];

      // Some basic validation
      if (!bookData.volumeInfo.title) {
        throw new Error('Invalid title data, try another book.');
      }
      if (!bookData.volumeInfo.authors || !bookData.volumeInfo.authors.length) {
        throw new Error('Invalid author data, try another book.');
      }

      // Add description and fill in typed data with fetched data
      return {
        title: bookData.volumeInfo.title,
        description: bookData.volumeInfo.description,
        author: bookData.volumeInfo.authors[0],
        favorited: false,
      };
    });
  },
};

export default apiUtils;
