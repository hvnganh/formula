import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <div>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
  );

export default Layout;
