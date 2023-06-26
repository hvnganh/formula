import React from 'react';
import DriverCard from './components/DriverCard';

type Props = {}

const DriversPage = (props: Props) => (
  <div className="tw-px-10">
    <h1 className="tw-text-[42px] tw-font-bold">F1 DRIVERS 2023</h1>
    <div className="tw-my-10 tw-p-4 tw-bg-gray-100 tw-rounded-md">
      <h2 className="tw-w-2/3">
        Check out this season&apos;s official F1 line-up. Full breakdown of drivers, points and current positions.
        Follow your favourite F1 drivers on and off the track.
      </h2>
    </div>
    <div className="tw-grid tw-grid-cols-3">
      {/* CARD */}
      <DriverCard />
    </div>
  </div>
  );

export default DriversPage;
