import { refs } from './refs';

export function paginationPages(resalt, typeSearch) {
  const { page, total_pages } = resalt;
  function chooseTypeSearch(type) {
    switch (type) {
      case 'trand':
        console.log('trand-true');
        return refs.numbersPageTrand;

      case 'filter':
        console.log('filter-true');
        return refs.numbersPageFilter;

      case 'search':
        console.log('search-true');
        return refs.numbersPageSearch;

      default:
        return refs.numbersPageTrand;
    }
  }
  let boxNumbersPage = chooseTypeSearch(typeSearch);
  refs.numbersPageFilter.innerHTML = '';
  refs.numbersPageSearch.innerHTML = '';
  refs.numbersPageTrand.innerHTML = '';
  let markup = [];
  if (document.documentElement.clientWidth > 767) {
    //   Початок
    if (total_pages > 9 && page < 6) {
      markup.push(
        `<div id='left' class="container__numbers-arrow-box"><span id='left' class="container__numbers-arrow-left"></span></div>`
      );
      for (let index = 1; index <= total_pages; index += 1) {
        if (index > 8) {
          markup.push(
            `<span id='right' class="container__numbers-span">...</span>`
          );
          markup.push(
            `<li class="container__numbers-item" data-page="${total_pages}">${total_pages}</li>`
          );
          break;
        }
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<div id='right' class="container__numbers-arrow-box"><span id='right' class="container__numbers-arrow-right"></span></div>`
      );

      boxNumbersPage.insertAdjacentHTML('beforeend', markup.join(''));
    }
    //   До 9 сторінок
    if (total_pages < 9) {
      for (let index = 1; index <= total_pages; index += 1) {
        if (index > 9) {
          break;
        }
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.join(''));
    }
    //   Середина
    if (total_pages > 9 && page >= 6 && page < total_pages - 6) {
      markup.push(
        `<div id='left' class="container__numbers-arrow-box"><span id='left' class="container__numbers-arrow-left"></span></div>`
      );
      markup.push(`<li class="container__numbers-item" data-page="1">1</li>`);
      markup.push(`<span id='left' class="container__numbers-span">...</span>`);
      for (let index = page - 2; index < page; index += 1) {
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<li class="container__numbers-item" data-page="${page}">${page}</li>`
      );
      for (let index = page + 1; index < page + 3; index += 1) {
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<span id='right' class="container__numbers-span">...</span>`
      );
      markup.push(
        `<li class="container__numbers-item" data-page="${total_pages}">${total_pages}</li>`
      );
      markup.push(
        `<div id='right' class="container__numbers-arrow-box"><span id='right' class="container__numbers-arrow-right"></span></div>`
      );
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.join(''));
    }
    //   Кінець
    if (total_pages > 9 && page > total_pages - 6) {
      markup.push(
        `<div id='right' class="container__numbers-arrow-box"><span id='right' class="container__numbers-arrow-right"></span></div>`
      );
      for (let index = total_pages; index >= total_pages - 8; index -= 1) {
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(`<span id='left' class="container__numbers-span">...</span>`);
      markup.push(`<li class="container__numbers-item" data-page="1">1</li>`);
      markup.push(
        `<div id='left' class="container__numbers-arrow-box"><span id='left' class="container__numbers-arrow-left"></span></div>`
      );
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.reverse().join(''));
    }
  } else {
    //   Початок
    if (total_pages > 5 && page < 4) {
      markup.push(
        `<div id='left' class="container__numbers-arrow-box"><span id='left' class="container__numbers-arrow-left"></span></div>`
      );
      for (let index = 1; index <= total_pages; index += 1) {
        if (index > 5) {
          break;
        }
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<div id='right' class="container__numbers-arrow-box"><span id='right' class="container__numbers-arrow-right"></span></div>`
      );
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.join(''));
    }
    //   До 6 сторінок
    if (total_pages < 6) {
      for (let index = 1; index <= total_pages; index += 1) {
        if (index > 5) {
          break;
        }
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.join(''));
    }
    //   Середина
    if (total_pages > 5 && page >= 4 && page < total_pages - 4) {
      markup.push(
        `<div id='left' class="container__numbers-arrow-box"><span id='left' class="container__numbers-arrow-left"></span></div>`
      );
      for (let index = page - 2; index < page; index += 1) {
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<li class="container__numbers-item" data-page="${page}">${page}</li>`
      );
      for (let index = page + 1; index < page + 3; index += 1) {
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<div id='right' class="container__numbers-arrow-box"><span id='right' class="container__numbers-arrow-right"></span></div>`
      );
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.join(''));
    }
    //   Кінець
    if (total_pages > 5 && page > total_pages - 4) {
      markup.push(
        `<div id='right' class="container__numbers-arrow-box"><span id='right' class="container__numbers-arrow-right"></span></div>`
      );
      for (let index = total_pages; index >= total_pages - 5; index -= 1) {
        markup.push(
          `<li class="container__numbers-item" data-page="${index}">${index}</li>`
        );
      }
      markup.push(
        `<div id='left' class="container__numbers-arrow-box"><span id='left' class="container__numbers-arrow-left"></span></div>`
      );
      boxNumbersPage.insertAdjacentHTML('beforeend', markup.reverse().join(''));
    }
  }
  // Активна сторінка
  const targetActice = document.querySelector(`[data-page="${page}"]`);
  targetActice.classList.add('is-active-page');
  // Стрілки
  // if (
  //   (total_pages > 9 && document.documentElement.clientWidth > 767) ||
  //   (total_pages > 5 && document.documentElement.clientWidth < 768)
  // ) {
  //   boxNumbersPage.firstElementChild.addEventListener('click', () => {
  //     let numPage = page;
  //     if (numPage > 1) {
  //       window.filterHendler.updateFilters(numPage - 1);
  //     }
  //   });
  //   boxNumbersPage.lastElementChild.addEventListener('click', () => {
  //     let numPage = page;
  //     let allPages = total_pages;
  //     if (numPage < allPages) {
  //       window.filterHendler.updateFilters(numPage + 1);
  //     }
  //   });
  // }
}
