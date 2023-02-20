import { refs } from '/src/scripts/refs';
import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
import { makeLangParam } from './change-language';
import { paginationPages } from './pagination';

refs.searchForm.addEventListener('submit', onClickSearchBtn);
let nameSearch = '';
export const pageForFindByeName = pageN => {
  page = pageN;
};
let page = 1;

async function onClickSearchBtn(event) {
  if (event) {
    event.preventDefault();
    nameSearch = refs.searchInput.value;
  }

  const OPTION_SEARCH = '/search/movie';
  console.log(nameSearch);

  const valueObj = {
    option: OPTION_SEARCH,
    nameFilm: `&query=${encodeURIComponent(nameSearch.trim())}`,
    page,
  };

  if (nameSearch === '') {
    refs.massages.classList.remove('hidden');
    setClearTextContentTimer();
    return;
  }

  makeLangParam(valueObj);
  window.loader();
  try {
    const data = await window.filmoteka.fetchFilms(valueObj);
    console.log(data);

    if (data.results.length === 0) {
      refs.massages.classList.remove('hidden');
      setClearTextContentTimer();
      refs.searchForm.reset();
      window.loaderRemove();
      return;
    }

    console.log(data);
    clearMurkup();
    createFilmCardMarkup(data.results);
    refs.searchForm.reset();
    refs.modalOffer.innerHTML = '';
    paginationPages(data, 'search');
    window.loaderRemove();
  } catch (error) {
    console.log(error);
    window.loaderRemove();
  }
}

function setClearTextContentTimer() {
  setTimeout(() => {
    refs.massages.classList.add('hidden');
  }, 5000);
}

export const findByNameSearch = onClickSearchBtn;
