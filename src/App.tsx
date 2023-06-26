import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/modules/layout';
import { DriverDetailPage, DriversPage, ResultPage, TeamsDetailPage, TeamsPage } from '@/pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ResultPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/drivers" element={<DriversPage />} />
          <Route path="/teams/:teamName" element={<TeamsDetailPage />} />
          <Route path="/drivers/:driverName" element={<DriverDetailPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
