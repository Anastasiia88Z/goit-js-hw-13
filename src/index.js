import './sass/main.scss';

import ApiFetchFotos from './js/fetchFotos.js';


const apiFetchFotos = ApiFetchFotos();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);


let searchQuery = '';

function onSearch(arguments) {
  e.preventDefault();

  searchQuery = e.currentTarget.elements.query.value;

  apiFetchFotos.fetchArticles(searchQuery);
}

function onLoadMore () {
  apiFetchFotos.fetchArticles(searchQuery);
}


