import { Chart, ChartProps } from 'react-chartjs-2';
import clsx from 'clsx';
import { Chart as ChartJS, CategoryScale,
  LinearScale,
  Filler,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  BarController,
  BarElement,
  PointElement,
  LineElement,
  registerables,
 } from 'chart.js';

ChartJS.register(
  BarElement,
  BarController,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  ...registerables,
  );

type ChartCustomProps = {
  customClass?: string;
  raceResultsData?: ResultOfTheYearType[];
} & ChartProps;

function ChartCustom({
  customClass,
  data,
  type = 'bar',
  raceResultsData = [],
  ...props
}: ChartCustomProps) {
  /**
   * Developer could transfer CUSTOM OPTIONS to modify default OPTIONS
   * @params {options} ChartProps
   * https://www.chartjs.org/docs/latest/general/options.html
   */
  // TODO: Fix hard code
  const chartOptions: ChartOptions = {
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
      },
      tooltip: {
        displayColors: false,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        bodyColor: '#000',
        titleColor: '#000',
        footerColor: '#000',
        callbacks: {
          afterBody(tooltipItem) {
            // eslint-disable-next-line no-unreachable-loop
            for (let i = 0; i < raceResultsData.length; i++) {
              return `Winner: ${raceResultsData[i].winner}
Date: ${raceResultsData[i].date}
Car: ${raceResultsData[i].car}`;
            }
          },
        },
      },
    },
  };
  return (
    <Chart
      options={chartOptions}
      className={clsx('tw-w-full', customClass)}
      type={type}
      data={data}
      {...props}
    />
  );
}

export default ChartCustom;
