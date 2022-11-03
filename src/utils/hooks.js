import { useQuery } from 'react-query';

const useGraphDataFetcher = () => {
  const url = "https://run.mocky.io/v3/e2ffac92-48e0-4826-a59f-bf76fc727383";
  const { data, isLoading, isError } = useQuery("dataDump", () => fetch(url).then(res => res.json()));
  return { data, isLoading, isError };
}

export default useGraphDataFetcher;