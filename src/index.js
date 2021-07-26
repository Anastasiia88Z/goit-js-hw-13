import './css/styles.css';
import articlesTpl from './templates/photo-card.hbs';
import getRefs from './js/get-refs.js';

import NewsApiFetchFotos from './js/fetchFotos.js';
import Notiflix from "notiflix";

const refs = getRefs();

const newsApiFetchFotos =  new NewsApiFetchFotos();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMoreBtn.addEventListener('click', fetchHits);


async function onSearch(evt) {
  evt.preventDefault();
  newsApiFetchFotos.resetPage();
  clearArticlesContainer();

  refs.loadMoreBtn.classList.add('hidden');

  newsApiFetchFotos.searchQuery = evt.currentTarget.elements.searchQuery.value.trim();

  if (newsApiFetchFotos.searchQuery === '') {
    return
  }

  try {
const result = await newsApiFetchFotos.fetchArticles();

appendArticlesMarkup(result.hits);

if (result.hits.length === 0) {
  refs.loadMoreBtn.classList.add('hidden');
  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'); 
  return
}
Notiflix.Notify.success(`Hooray! We found ${result.totalHits} images.`);

refs.loadMoreBtn.classList.remove('hidden');
} catch (error) {
  console.log(error)
  }
}


async function fetchHits() {
  try {
  const result = await newsApiFetchFotos.fetchArticles();
  if (refs.photoContainer.querySelectorAll('.photo-card').length === result.totalHits) {
    getTotalImgCount();
  } else {
    appendArticlesMarkup(result.hits);
  }
 } catch (error) {
   console.log(error);
 }
}

 function appendArticlesMarkup(data) {
   refs.photoContainer.insertAdjacentHTML('beforeend', articlesTpl(data))
 }

 function clearArticlesContainer() {
   refs.photoContainer.innerHTML = '';
 }

 function getTotalImgCount() {
  refs.loadMoreBtn.style.display = 'none';

  Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
}
 
