import SearchOutlined from '@ant-design/icons/SearchOutlined';
import TeamCard from './components/TeamCard';
import useTeamPage from './hooks';
import CardSkeleton from '@/modules/skeleton/CardSkeleton';
import { repeat } from '@/lib/utils/repeat';

const TeamsPage = () => {
  const { isLoading, searchListTeam, handleSearchInput, isError } = useTeamPage();

  return (
    <div className="tw-px-10">
      <h1 className="tw-text-[42px] tw-font-bold">F1 TEAMS 2023</h1>
      <div className="tw-my-10 tw-p-4 tw-bg-gray-100 tw-rounded-md">
        <h2 className="tw-w-2/3">
          Discover everything you need to know about this year&apos;s Formula 1 teams - drivers,
          podium finishes, points earned and championship titles.
        </h2>
      </div>
      <div className="tw-mb-4 tw-flex tw-items-center tw-border tw-border-gray-300 tw-rounded-full tw-w-fit tw-overflow-hidden">
        <SearchOutlined className="tw-p-2 tw-border-r tw-border-gray-300" />
        <input className="tw-px-3 tw-outline-none" placeholder="Search team by name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleSearchInput(e)} />
      </div>
      <div className="tw-grid tw-grid-cols-2 tw-gap-4">
        {isLoading || isError ? (
          repeat(4).map((index) => (
            <div key={index}><CardSkeleton /></div>
          ))
        ) : (
          searchListTeam?.map((teams) => (
            <TeamCard
              carSlug={teams.carSlug}
              drivers={teams.drivers}
              points={teams.points}
              rank={teams.rank}
              teamImg={teams.teamImg}
              teamName={teams.teamName}
              key={teams.teamImg}
            />
        ))
        )}
      </div>
    </div>
  );
};

export default TeamsPage;
