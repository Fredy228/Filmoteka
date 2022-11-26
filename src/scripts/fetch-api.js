import axios from "axios";

export class Filmoteka {
    constructor() {
        this.searchQuery = 'test query';
    }

    async fetchFilms(valueObj) {
        const BASE_URL = 'https://api.themoviedb.org/3'
        const API_KEY = '2e329d861e790504d655e6d7175d4c52'

        const {
            option,
            nameFilm = '',
            lang = '&language=en',
            imageLang = '&include_image_language=en',
            region = '&region=en-US',
        } = valueObj

        const url = `${BASE_URL}${option}?api_key=${API_KEY}${nameFilm}${lang}${imageLang}${region}`
        console.log(url)

        return await axios.get(url)
            .then(response => { 
                return response.data;
            })
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}