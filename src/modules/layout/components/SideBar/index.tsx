import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    const { pathname } = useLocation();
    const teamPath = pathname.includes('teams');
    const driverPath = pathname.includes('driver');

    return (
      <aside>
        <Link to="/">
          <div className={clsx('side-bar__link', { 'side-bar__link-selected': pathname === '/' })}>
            Result
          </div>
        </Link>
        <Link to="/teams">
          <div className={clsx('side-bar__link', { 'side-bar__link-selected': teamPath })}>
            Teams
          </div>
        </Link>
        <Link to="/drivers">
          <div className={clsx('side-bar__link', { 'side-bar__link-selected': driverPath })}>
            Drivers
          </div>
        </Link>
      </aside>
  );
};

export default SideBar;
