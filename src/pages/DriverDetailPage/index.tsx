import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import useDriverDetailPage from './hooks';
import { splitPathNameDetailPage } from '@/lib/utils/splitPathNameDetailPage';
import PageDetailSkeleton from '@/modules/skeleton/PageDetailSkeleton';

const DriverDetailPage = () => {
  const { pathname } = useLocation();
  const { driverInformation, isLoading, isError } = useDriverDetailPage(splitPathNameDetailPage(pathname));

  if (isLoading || isError) {
    return <div><PageDetailSkeleton /></div>;
  }

  return (
    <>
      <Link to="/drivers">
        <div className="tw-flex tw-items-center tw-mb-6 tw-text-sm tw-text-gray-300 hover:tw-text-black tw-transition-all tw-duration-300">
          <ArrowLeftOutlined />
          <p className="tw-pl-4">Return to driver page</p>
        </div>
      </Link>
      <section className="tw-flex tw-items-center">
        <div className="tw-w-1/2 tw-h-[500px] tw-flex tw-flex-col">
          <div className="tw-overflow-hidden">
            <img src={driverInformation?.driverImg} alt={driverInformation?.driverFullName} />
          </div>
          <span className="tw-text-3xl tw-font-bold tw-text-gray-300 tw-pt-4">{driverInformation?.driverNumber}</span>
          <span className="tw-text-[42px] tw-font-bold">{driverInformation?.driverFullName}</span>
        </div>
        <div className="tw-w-1/2 tw-pl-8">
          <div className="information__detail">
            <span>Team</span>
            <span>{driverInformation?.driverDetail.team}</span>
          </div>
          <div className="information__detail">
            <span>Country</span>
            <span>{driverInformation?.driverDetail.country}</span>
          </div>
          <div className="information__detail">
            <span>Podiums</span>
            <span>{driverInformation?.driverDetail.podiums}</span>
          </div>
          <div className="information__detail">
            <span>Points</span>
            <span>{driverInformation?.driverDetail.points}</span>
          </div>
          <div className="information__detail">
            <span>Grands Prix entered</span>
            <span>{driverInformation?.driverDetail.grandsprixentered}</span>
          </div>
          <div className="information__detail">
            <span>World Championships</span>
            <span>{driverInformation?.driverDetail.worldchampionships}</span>
          </div>
          <div className="information__detail">
            <span>Highest race finish</span>
            <span>{driverInformation?.driverDetail.highestracefinish}</span>
          </div>
          <div className="information__detail">
            <span>Highest grid position</span>
            <span>{driverInformation?.driverDetail.highestgridposition}</span>
          </div>
          <div className="information__detail">
            <span>Date of birth</span>
            <span>{driverInformation?.driverDetail.dateofbirth}</span>
          </div>
          <div className="information__detail">
            <span>Place of birth</span>
            <span>{driverInformation?.driverDetail.placeofbirth}</span>
          </div>
        </div>
      </section>
      <section className="tw-border-t tw-border-gray-200 tw-mt-5 tw-pt-5">
        <h2 className="tw-text-3xl tw-mb-6">Biography</h2>
        <div>
          {driverInformation?.listParagraph.map((para) => (
            <p key={para} className="tw-mb-3 tw-text-lg tw-font-thin">{para}</p>
          ))}
        </div>
      </section>
    </>
  );
};

export default DriverDetailPage;
