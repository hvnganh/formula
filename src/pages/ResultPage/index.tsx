import { Select } from 'antd';
import ChartCustom from '@/modules/common/components/ChartCustom';
import useResultPage from './hooks';

type Props = {};

const ResultPage = (props: Props) => {
  const { handleSelectYear, isLoading, raceResults, dataResultChart, labelResultChart } = useResultPage();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="tw-px-10">
      <h1 className="tw-text-[42px] tw-font-bold">RACE RESULT</h1>
      <div className="tw-mt-10 tw-text-lg">
        <div className="tw-flex tw-items-center">
          <p className="tw-mr-3">Please select year:</p>
          <Select
            defaultValue="1952"
            style={{ width: 150 }}
            onChange={handleSelectYear}
            options={[
              { value: '1952', label: '1952' },
              { value: '1951', label: '1951' },
              { value: '1950', label: '1950' },
            ]}
          />
        </div>
        <div>
          <ChartCustom
            type="bar"
            data={{
              // TODO : FETCH RACE's NAME
              labels: labelResultChart,
              datasets: [
                {
                  label: 'Country',
                  data: dataResultChart,
                  fill: false,
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
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
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
