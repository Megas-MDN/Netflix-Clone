import { useEffect, useState } from 'react';
import { getMovies } from '../services/apiTMDB';

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [fetchData, setFetchData] = useState([]);

  useEffect(() => {
    const fetchResponse = async () => {
      try {
        const response = await getMovies(url);
        setFetchData(response?.results);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchResponse();
  }, [url]);

  return { loading, fetchData };
}
