import React from 'react';

type Props = {}

const Header = (props: Props) => (
  <header className=" tw-bg-primary tw-h-header-height">
    <div className="components-wrapper tw-h-full tw-flex tw-items-center">
      <a href="/">
        <img className="tw-cursor-pointer" width={130} height={32} src="https://www.formula1.com/etc/designs/fom-website/images/f1_logo.svg" alt="Logo" />
      </a>
    </div>
  </header>
  );

export default Header;
