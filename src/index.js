import './css/styles.css';
import articlesTpl from './templates/photo-card.hbs';
import getRefs from './js/get-refs.js';
import LoadMoreBtn from './js/load-more-btn.js';

import NewsApiFetchFotos from './js/fetchFotos.js';
import Notiflix from "notiflix";

const refs = getRefs();



const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

console.log(loadMoreBtn);

const newsApiFetchFotos =  new NewsApiFetchFotos();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);



function onSearch(e) {
  e.preventDefault();

  
  newsApiFetchFotos.query = e.currentTarget.elements.searchQuery.value;

  if (newsApiFetchFotos.query.trim() === '') {
    return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
  }

  clearArticlesContainer();

  loadMoreBtn.show();
  newsApiFetchFotos.resetPage();
  fetchHits();
  }


function fetchHits() {
  loadMoreBtn.disable();
  newsApiFetchFotos.fetchArticles().then(hits => {
  appendArticlesMarkup(hits);
  loadMoreBtn.enable();

 });
}

 function appendArticlesMarkup(hits) {
   refs.photoContainer.insertAdjacentHTML('beforeend', articlesTpl(hits))
 }

 function clearArticlesContainer() {
   refs.photoContainer.innerHTML = '';
 }

