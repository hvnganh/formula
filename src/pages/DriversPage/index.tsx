import SearchOutlined from '@ant-design/icons/SearchOutlined';
import DriverCard from './components/DriverCard';
import useDriverPage from './hooks';
import CartSkeleton from '@/modules/skeleton/CardSkeleton';
import { repeat } from '@/lib/utils/repeat';

const DriversPage = () => {
  const { isLoading, searchListDriver, handleSearchInput } = useDriverPage();
  return (
    <div className="tw-px-10">
      <h1 className="tw-text-[42px] tw-font-bold">F1 DRIVERS 2023</h1>
      <div className="tw-my-10 tw-p-4 tw-bg-gray-100 tw-rounded-md">
        <h2 className="tw-w-2/3">
          Check out this season&apos;s official F1 line-up. Full breakdown of
          drivers, points and current positions. Follow your favourite F1
          drivers on and off the track.
        </h2>
      </div>
      <div className="tw-mb-4 tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded-full tw-w-fit tw-overflow-hidden">
        <SearchOutlined className="tw-p-2 tw-border-r tw-border-gray-300" />
        <input
          className="tw-px-3 tw-outline-none"
          placeholder="Search driver by name"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchInput(e)
          }
        />
      </div>
      <div className="tw-grid tw-grid-cols-3 tw-gap-4">
        {isLoading
          ? repeat(6).map((index) => (
            <div key={index}>
              <CartSkeleton />
            </div>
            ))
          : searchListDriver?.map((drivers) => (
            <DriverCard
              driverImg={drivers.driverImg}
              firstName={drivers.firstName}
              flagImg={drivers.flagImg}
              lastName={drivers.lastName}
              nameSlug={drivers.nameSlug}
              numberImg={drivers.numberImg}
              points={drivers.points}
              rank={drivers.rank}
              team={drivers.team}
              key={drivers.driverImg}
            />
            ))}
      </div>
    </div>
  );
};

export default DriversPage;
