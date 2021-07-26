const axios = require('axios');

const API_KEY = '22624539-3e01f7ad519f43f5fb2c3ff3f';
const BASE_URL = 'https://pixabay.com/api/';

export default class NewsApiFetchFotos {
constructor() {
this.searchQuery = '';
this.page = 1;
this.perPage = 40;
}

async fetchArticles() {

const url = `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=${this.perPage}&page=${this.page}`;

const response = await axios.get(url);

  this.page += 1;

  return response.data;
}

resetPage() {
  this.page = 1;
 }
}