import { Link } from 'react-router-dom';

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
  <Link to={nameSlug}>
    <div className="card__border">
      <div className="tw-flex tw-items-center tw-justify-between">
        <span className="tw-text-[42px] tw-font-bold">{rank}</span>
        <div className="tw-flex tw-flex-col ">
          <span className="tw-text-[18px] tw-font-bold">{points}</span>
          <span className="tw-bg-black tw-text-white tw-rounded-md tw-py-1 tw-text-center">
            PTS
          </span>
        </div>
      </div>
      <div className="tw-flex tw-items-center tw-justify-between tw-border-y tw-border-gray-300 tw-py-3 tw-my-3">
        <div className="tw-flex tw-flex-col">
          <span>{firstName}</span>
          <span>{lastName}</span>
        </div>
        <div>
          <img width={46} height={30} src={flagImg} alt="Flag" />
        </div>
      </div>
      <div>
        <span>{team}</span>
        <div className="tw-flex tw-items-end">
          <img
            width={97}
            height={54}
            src={numberImg}
            alt="Number"
          />
          <div className="tw-flex-1 tw-h-fit">
            <img
              className=""
              width={192}
              height={192}
              src={driverImg}
              alt="Driver"
            />
          </div>
        </div>
      </div>
    </div>
  </Link>
);

export default DriverCard;
