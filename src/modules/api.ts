const API_KEY = "2f9a77de3fd3fa5539c934a32fb9918f";
const BASE_URL = "https://api.themoviedb.org/3";

export const getMovies = async () => await (
    await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`))
    .json();
