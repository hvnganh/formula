import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '@/modules/layout';
import Home from '@/pages';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
