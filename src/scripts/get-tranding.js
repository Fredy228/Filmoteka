import { createFilmCardMarkup } from './markup/create-markup-film';
import { clearMurkup } from './markup/clear-murkup';
import { paginationPages } from './pagination';
import { makeLangParam } from './change-language';

export function initTrending(page) {
  getTranding(page)
    .then(trandingToday => {
      clearMurkup();
      createFilmCardMarkup(trandingToday.results);
      return trandingToday;
    })
    .then(trandingToday => {
      paginationPages(trandingToday, 'trand');
    });
}

async function getTranding(page) {
  const OPTION_TRANDING = '/trending/movie/day';
  const valueObj = {
    option: OPTION_TRANDING,
    page,
  };

  makeLangParam(valueObj);
  window.loader();
  try {
    const trandingToday = await window.filmoteka.fetchFilms(valueObj);
    window.loaderRemove();
    return trandingToday;
  } catch (error) {
    console.log(error);
    window.loaderRemove();
  }
}
