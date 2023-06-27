import ChartCustom from '@/modules/common/components/ChartCustom';
import ChartSkeleton from '@/modules/skeleton/ChartSkeleton';

type RaceResultChartProps = {
  labelResultChart: string[];
  raceResultsData: ResultOfTheYearType[];
  dataResultChart: any[];
  isLoading: boolean;
};

const RaceResultChart = ({
  dataResultChart,
  labelResultChart,
  raceResultsData,
  isLoading,
}: RaceResultChartProps) =>
  isLoading ? (
    <div>
      <ChartSkeleton />
    </div>
  ) : (
    <ChartCustom
      raceResultsData={raceResultsData}
      type="bar"
      data={{
        labels: labelResultChart,
        datasets: [
          {
            label: 'Time (Second)',
            data: dataResultChart,
            fill: false,
            backgroundColor: [
              'rgba(255, 99, 132, 0.5)',
              'rgba(255, 159, 64, 0.5)',
              'rgba(255, 205, 86, 0.5)',
              'rgba(75, 192, 192, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(153, 102, 255, 0.5)',
              'rgba(201, 203, 207, 0.5)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
          },
        ],
      }}
    />
  );

export default RaceResultChart;
