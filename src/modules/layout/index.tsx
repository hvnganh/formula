import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SideBar from './components/SideBar';

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <main className="tw-h-[80vh] tw-pt-10">
      <div className="components-wrapper tw-grid tw-grid-cols-12 tw-gap-4">
        <div className="tw-col-span-3">
          <SideBar />
        </div>
        <div className="tw-col-span-9 tw-h-[80vh] tw-overflow-y-auto">
          {children}
        </div>
      </div>
    </main>
    {/* <Footer /> */}
  </div>
  );

export default Layout;
