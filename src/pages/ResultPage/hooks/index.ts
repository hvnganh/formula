import { useState } from 'react';
import { useQuery } from 'react-query';
import { getResultByYear } from '@/lib/services';

const useResultPage = () => {
  const [year, setYear] = useState('1952');
  const handleSelectYear = (value: string) => {
    setYear(value);
  };

  const { data: raceResults, isLoading } = useQuery<ResultOfTheYearType[]>({
    queryKey: ['race-result', year],
    queryFn: () => getResultByYear(year),
  });

  const arrayAfterRemoveEmptyResult = raceResults?.filter((result) => Number(result.time) !== 0);

  const labelResultChart = arrayAfterRemoveEmptyResult?.map((result) => result.grandprix);
  const dataResultChart = arrayAfterRemoveEmptyResult?.map((result) => result.time.split(':').slice(0, 2).join('.')).filter((time) => Number(time) !== 0) as any;

  return {
    handleSelectYear,
    isLoading,
    raceResults,
    labelResultChart,
    dataResultChart,
  };
};

export default useResultPage;
