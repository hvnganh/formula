import { Select, Tabs, TabsProps } from 'antd';
import useResultPage from './hooks';
import RaceResultTable from './components/RaceResultTable';
import RaceResultChart from './components/RaceResultChart';

const ResultPage = () => {
  const { handleSelectYear,
    isLoading,
    currentYear,
    selectListYears,
    raceResults,
    dataResultChart,
    labelResultChart,
    } = useResultPage();

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Table',
      children: <RaceResultTable isLoading={isLoading} raceResults={raceResults ?? []} />,
    },
    {
      key: '2',
      label: 'Chart',
      children: <RaceResultChart
        isLoading={isLoading}
        dataResultChart={dataResultChart}
        labelResultChart={labelResultChart ?? []}
        raceResultsData={raceResults ?? []}
      />,
    },
  ];

  return (
    <div className="tw-px-10">
      <h1 className="tw-text-[42px] tw-font-bold">RACE RESULT</h1>
      <div className="tw-mt-10">
        <div className="tw-flex tw-items-center">
          <p className="tw-mr-3">Please select year:</p>
          <Select
            defaultValue={currentYear.toString()}
            style={{ width: 150 }}
            onChange={handleSelectYear}
            options={selectListYears}
          />
        </div>
        <div>
          <Tabs defaultActiveKey="1" items={items} className="tw-mt-4" />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
