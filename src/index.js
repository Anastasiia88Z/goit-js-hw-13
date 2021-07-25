import './css/styles.css';
import articlesTpl from './templates/photo-card.hbs';
import getRefs from './js/get-refs.js';

import NewsApiFetchFotos from './js/fetchFotos.js';
import Notiflix from "notiflix";

const refs = getRefs();



// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[load-more]',
//   hidden: true,
// });


const newsApiFetchFotos =  new NewsApiFetchFotos();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', onLoadMore);



function onSearch(e) {
  e.preventDefault();

  
  newsApiFetchFotos.query = e.currentTarget.elements.searchQuery.value;

  if (newsApiFetchFotos.query.trim() === '') {
    return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
  }

  newsApiFetchFotos.resetPage();
  newsApiFetchFotos.fetchArticles().then(hits => {
    clearArticlesContainer();
    appendArticlesMarkup(hits);

  });
}

function onLoadMore () {
  newsApiFetchFotos.fetchArticles().then(appendArticlesMarkup);
}

 function appendArticlesMarkup(hits) {
   refs.photoContainer.insertAdjacentHTML('beforeend', articlesTpl(hits))
 }

 function clearArticlesContainer() {
   refs.photoContainer.innerHTML = '';
 }

