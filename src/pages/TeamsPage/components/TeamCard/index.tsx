import { Link } from 'react-router-dom';

const TeamCard = ({
    teamName,
    carSlug,
    drivers,
    teamImg,
    points,
    rank,
}: TeamCardType) => (
  <Link to={carSlug}>
    <div className="card__border">
      <div className="tw-flex tw-items-center tw-justify-between">
        <span className="tw-text-[42px] tw-font-bold">{rank}</span>
        <div className="tw-flex tw-flex-col">
          <span className="tw-text-lg tw-font-bold">{points}</span>
          <span className="tw-bg-black tw-text-white tw-rounded-md tw-py-1 tw-text-center">
            PTS
          </span>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-justify-between tw-border-y tw-border-gray-300 tw-py-3 tw-my-3">
        <span className="tw-font-bold tw-text-lg">{teamName}</span>
        <div>
          <img width={50} height={50} src={teamImg} alt={teamName} />
        </div>
      </div>
      <div className="tw-grid tw-grid-cols-2 tw-gap-4 tw-border-b tw-border-gray-300 tw-pb-3 tw-mb-3">
        {drivers.map((driver) => (
          <div key={driver.firstName} className="tw-flex tw-items-center tw-justify-between tw-col-span-1">
            <div className="tw-flex tw-items-center">
              <span className="tw-pr-2">{driver.firstName}</span>
              <span className="tw-font-bold">{driver.lastName}</span>
            </div>
            <img width={48} height={48} src={driver.imgDriver} alt={`${driver.firstName} ${driver.lastName}`} />
          </div>
          ))}
      </div>
      <div>
        <img alt="car" src="https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/4col/image.png" />
      </div>
    </div>
  </Link>
  );

export default TeamCard;
