import { useState } from 'react';
import { useQuery } from 'react-query';
import { getResultByYear } from '@/lib/services';

const useResultPage = () => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear.toString());
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

  const listYear = () => {
    const years = [];
    const startYear = 1950;
    for (let i = startYear; i <= currentYear; i++) {
      years.push({ label: i, value: i });
    }
    return years;
  };

  const selectListYears = listYear().reverse();

  return {
    handleSelectYear,
    currentYear,
    selectListYears,
    isLoading,
    raceResults,
    labelResultChart,
    dataResultChart,
  };
};

export default useResultPage;
