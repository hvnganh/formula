import React from 'react';
import { Select } from 'antd';
import ChartCustom from '@/modules/common/components/ChartCustom';

type Props = {};

const ResultPage = (props: Props) => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="tw-px-10">
      <h1 className="tw-text-[42px] tw-font-bold">RACE RESULT</h1>
      <div className="tw-mt-10 tw-text-lg">
        <div className="tw-flex tw-items-center">
          <p className="tw-mr-3">Please select year:</p>
          <Select
            defaultValue="1952"
            style={{ width: 150 }}
            onChange={handleChange}
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
              labels: ['a', 'b'],
              datasets: [
                {
                  label: 'API',
                  data: [5, 6, 7, 3, 1, 4, 6, 1, 4, 10, 4, 2, 4],
                  fill: false,
                  borderColor: 'rgb(101, 98, 174)',
                  backgroundColor: 'rgb(101, 98, 174)',
                },
                {
                  label: 'Total Message',
                  data: [3, 2, 1],
                  fill: false,
                  borderColor: '#97BE63',
                  backgroundColor: '#97BE63',
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
