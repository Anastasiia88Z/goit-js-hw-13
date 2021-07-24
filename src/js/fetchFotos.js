
export default class ApiFetchFotos {

constructor() {
this.searchQuery = '';
this.page = 1;

}

fetchArticles() {

const options = {
  headers: {
    Authorization: '22624539-3e01f7ad519f43f5fb2c3ff3f',
  },
};

const url = `https://pixabay.com/api/?key=${this.searchQuery}&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=40`

return fetch(url, options)
.then(r => r.json())
.then(data =>{

  this.incrementPage();
  return data.articles;
});
}

incrementPage() {
  this.page += 1;
}

resetPage() {
  this.page = 1;
}

get query() {
  return this.searchQuery;
}

set query(newQuery) {
  this.searchQuery = newQuery;
 }
}