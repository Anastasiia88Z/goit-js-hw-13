
export default class ApiFetchFotos {

constructor() {}

fetchArticles(searchQuery) {
const options = {
  headers: {
    Authorization: '22624539-3e01f7ad519f43f5fb2c3ff3f',
  },
};

const url = `https://pixabay.com/api/?key=${searchQuery}&q=yellow+flowers&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=40`

fetch(url, options)
.then(r => r.json())
.then(console.log);
}
}