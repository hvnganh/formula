import type { ColumnsType } from 'antd/es/table';
import { Table } from 'antd';
import { CONTENT_TABLE_HEIGHT } from '@/lib/constants';

type RaceResultTableProps = {
    raceResults: ResultOfTheYearType[];
    isLoading: boolean;
}

type DataTableType = {
    grandprix: string;
    date: string;
    winner: string;
    car: string;
    lap: string;
    time: string;
}

const RaceResultTable = ({ raceResults, isLoading }: RaceResultTableProps) => {
    const columns: ColumnsType<DataTableType> = [
        {
            title: 'GRAND PRIX',
            dataIndex: 'grandprix',
            key: 'grandprix',
        },
        {
            title: 'DATE',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'WINNER',
            dataIndex: 'winner',
            key: 'winner',
        },
        {
            title: 'CAR',
            dataIndex: 'car',
            key: 'car',
        },
        {
            title: 'LAPS',
            dataIndex: 'lap',
            key: 'lap',
        },
        {
            title: 'TIME',
            dataIndex: 'time',
            key: 'time',
            defaultSortOrder: 'descend',
            sorter: (a, b) => +a.time.split(':').join('') - +b.time.split(':').join(''),
        },
    ];

    const data: DataTableType[] = raceResults.map((result) => ({
        grandprix: result.grandprix,
        date: result.date,
        winner: result.winner,
        car: result.car,
        lap: result.laps,
        time: result.time,
        key: result.time,
    }));
    return (
      <Table
        columns={columns}
        dataSource={data}
        bordered
        scroll={{ y: CONTENT_TABLE_HEIGHT }}
        className="tw-capitalize custom-table"
        loading={isLoading}
      />
  );
};

export default RaceResultTable;
