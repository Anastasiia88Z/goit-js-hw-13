import articlesTpl from './templates/photo-card.hbs'
import './sass/main.scss';

import NewsApiFetchFotos from './js/fetchFotos.js';


const newsApiFetchFotos =  new NewsApiFetchFotos();

console.log(newsApiFetchFotos);
refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);



function onSearch(e) {
  e.preventDefault();

  newsApiFetchFotos.query = e.currentTarget.elements.query.value;
  newsApiFetchFotos.resetPage();
  newsApiFetchFotos.fetchArticles().then(articles => console.log(articles));
}

function onLoadMore () {
  newsApiFetchFotos.fetchArticles().then(articles => console.log(articles));
}
 function appendArticlesMarkup(articles) {
   refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl
   (articles))
 }

