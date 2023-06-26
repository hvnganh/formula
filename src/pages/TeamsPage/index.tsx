import React from 'react';
import TeamCard from './components/TeamCard';

type Props = {}

const TeamsPage = (props: Props) => (
  <div className="tw-px-10">
    <h1 className="tw-text-[42px] tw-font-bold">F1 TEAMS 2023</h1>
    <div className="tw-my-10 tw-p-4 tw-bg-gray-100 tw-rounded-md">
      <h2 className="tw-w-2/3">
        Discover everything you need to know about this year&apos;s Formula 1 teams - drivers,
        podium finishes, points earned and championship titles.
      </h2>
    </div>
    <div className="tw-grid tw-grid-cols-2 tw-gap-4">
      {/* CARD */}
      {/* <TeamCard /> */}
    </div>
  </div>
  );

export default TeamsPage;
