const API_KEY = '22624539-3e01f7ad519f43f5fb2c3ff3f';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiFetchFotos {
constructor() {
this.searchQuery = '';
this.page = 1;

}

fetchArticles() {

const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${this.page}`;

return fetch(url)
   .then(response => response.json())
   .then(({ articles }) => {
        this.incrementPage();
        return articles;
  });
};

incrementPage() {
  this.page += 1;
}

resetPage() {
  this.page = 1;
};

get query() {
  return this.searchQuery;
};

set query(newQuery) {
  this.searchQuery = newQuery;
 }
}