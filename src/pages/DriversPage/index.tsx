import React from 'react';
import DriverCard from './components/DriverCard';
import useDriverPage from './hooks';

type Props = {}

const DriversPage = (props: Props) => {
  const { isLoading, listDriver } = useDriverPage();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="tw-px-10">
      <h1 className="tw-text-[42px] tw-font-bold">F1 DRIVERS 2023</h1>
      <div className="tw-my-10 tw-p-4 tw-bg-gray-100 tw-rounded-md">
        <h2 className="tw-w-2/3">
          Check out this season&apos;s official F1 line-up. Full breakdown of drivers, points and current positions.
          Follow your favourite F1 drivers on and off the track.
        </h2>
      </div>
      <div className="tw-grid tw-grid-cols-3 tw-gap-4">
        {/* CARD */}
        {listDriver?.map((drivers) => (
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
