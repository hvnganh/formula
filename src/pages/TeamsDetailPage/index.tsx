import { Link, useLocation } from 'react-router-dom';
import ArrowLeftOutlined from '@ant-design/icons/ArrowLeftOutlined';
import { Fragment } from 'react';
import useTeamDetailPage from './hooks';
import { splitPathNameDetailPage } from '@/lib/utils/splitPathNameDetailPage';

type Props = {}

const TeamsDetailPage = (props: Props) => {
  const { pathname } = useLocation();
  const { teamInformation, listParagraph, listYear, isLoading } = useTeamDetailPage(splitPathNameDetailPage(pathname));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Link to="/teams">
        <div className="tw-flex tw-items-center tw-mb-6 tw-text-sm tw-text-gray-300 hover:tw-text-black tw-transition-all tw-duration-300">
          <ArrowLeftOutlined />
          <p className="tw-pl-4">Return to teams page</p>
        </div>
      </Link>
      <section className="tw-flex tw-items-center">
        <div className="tw-flex tw-w-1/2 tw-justify-between">
          {teamInformation?.teamMember.map((member) => (
            <Link to={`/drivers/${member.name.split(' ').join('-').toLowerCase()}`}>
              <div className="tw-cursor-pointer" key={member.name}>
                <div className="tw-overflow-hidden">
                  <img width={250} height={500} src={member.avatar} alt={member.name} />
                </div>
                <div className="tw-flex tw-flex-col tw-p-4">
                  <span className="tw-text-[42px] tw-font-bold tw-mb-4">{member.number}</span>
                  <span className="tw-text-lg tw-font-semiBold">{member.name}</span>
                  <span className="tw-text-xs tw-font-semiBold tw-text-gray-400">{member.team}</span>
                </div>
              </div>
            </Link>
            ))}
        </div>
        <div className="tw-w-1/2 tw-pl-8">
          <div className="tw-text-base information__detail">
            <span>Full Team Name</span>
            <span>{teamInformation?.teamDetail.fullteamname}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Base</span>
            <span>{teamInformation?.teamDetail.base}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Team Chief</span>
            <span>{teamInformation?.teamDetail.teamchief}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Technical Chief</span>
            <span>{teamInformation?.teamDetail.technicalchief}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Chassis</span>
            <span>{teamInformation?.teamDetail.chassis}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Power Unit</span>
            <span>{teamInformation?.teamDetail.powerunit}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>First Team Entry</span>
            <span>{teamInformation?.teamDetail.firstteamentry}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>World Championships</span>
            <span>{teamInformation?.teamDetail.worldchampionships}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Highest Race Finish</span>
            <span>{teamInformation?.teamDetail.highestracefinish}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Pole Positions</span>
            <span>{teamInformation?.teamDetail.polepositions}</span>
          </div>
          <div className="tw-text-base information__detail">
            <span>Fastest Laps</span>
            <span>{teamInformation?.teamDetail.fastestlaps}</span>
          </div>
        </div>
      </section>
      <section className="tw-border-t tw-border-gray-200 tw-mt-5 tw-pt-5">
        <h2 className="tw-text-3xl tw-mb-6">In profile</h2>
        <p className="tw-mb-5 tw-text-lg tw-font-thin">{teamInformation?.listParagraph[0]}</p>
        {listParagraph.map((p, index) => (
          <Fragment key={p}>
            <p className="tw-mb-3 tw-text-lg tw-font-semibold">{listYear[index]}</p>
            <p className="tw-mb-5 tw-text-lg tw-font-thin">{p}</p>
          </Fragment>
        ))}
      </section>
    </>
  );
};

export default TeamsDetailPage;
