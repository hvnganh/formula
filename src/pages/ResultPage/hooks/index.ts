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

  const labelResultChart = raceResults?.map((result) => result.grandprix);
  const dataResultChart = raceResults?.map((result) => Number(result.time.split(':').join(''))) as any;

  return {
    handleSelectYear,
    isLoading,
    raceResults,
    labelResultChart,
    dataResultChart,
  };
};

export default useResultPage;
