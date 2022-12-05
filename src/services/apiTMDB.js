const API_KEY = 'myPrivateKey';

export const categories = [
  {
    name: 'trending',
    title: 'em alta',
    path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'netflixOriginals',
    title: 'originais netflix',
    path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  },
  {
    name: 'topRated',
    title: 'populares',
    path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
  },
  {
    name: 'commedy',
    title: 'comedias',
    path: `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=35`,
  },
  {
    name: 'romances',
    title: 'romances',
    path: `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=10749`,
  },
  {
    name: 'documentaries',
    title: 'documentarios',
    path: `/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=99`,
  },
];

export const getMovies = async (path) => {
  try {
    const url_api = `https://api.themoviedb.org/3${path}`;
    const response = await fetch(url_api);
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
