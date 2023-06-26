import TeamCard from './components/TeamCard';
import useTeamPage from './hooks';

type Props = {}

const TeamsPage = (props: Props) => {
  const { isLoading, listTeam } = useTeamPage();
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
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
        {listTeam?.map((teams) => (
          <TeamCard
            carSlug={teams.carSlug}
            drivers={teams.drivers}
            points={teams.points}
            rank={teams.rank}
            teamImg={teams.teamImg}
            teamName={teams.teamName}
            key={teams.teamImg}
          />

      ))}
      </div>
    </div>
  );
};

export default TeamsPage;
