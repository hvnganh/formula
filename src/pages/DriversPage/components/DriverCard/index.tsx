import React from 'react';

const DriverCard = ({
  team,
  driverImg,
  firstName,
  flagImg,
  lastName,
  nameSlug,
  numberImg,
  points,
  rank,
}: DriverCardType) => (
  <div className="card__border">
    <div className="tw-flex tw-items-center tw-justify-between">
      <span className="tw-text-[42px] tw-font-bold">1</span>
      <div className="tw-flex tw-flex-col tw-w-20 ">
        <span className="tw-text-[18px]">190</span>
        <span className="tw-bg-black tw-text-white tw-rounded-md tw-py-1">
          PTS
        </span>
      </div>
    </div>
    <div className="tw-flex tw-items-center tw-justify-between tw-border-y tw-border-gray-300 tw-py-3 tw-my-3">
      <div className="tw-flex tw-flex-col">
        <span>Max</span>
        <span>Nguyen</span>
      </div>
      <div>
        <span>Flag</span>
      </div>
    </div>
    <div>
      <span>Team name</span>
      <div className="tw-flex tw-items-end">
        <img
          width={97}
          height={54}
          src="https://media.formula1.com/d_default_fallback_imag…ogos/MAXVER01.png.transform/2col-retina/image.png"
          alt=""
        />
        <div className="tw-flex-1 tw-h-fit">
          <img
            className=""
            width={192}
            height={192}
            src="https://media.formula1.com/d_driver_fallback_image…ppen/maxver01.png.transform/2col-retina/image.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
);

export default DriverCard;
