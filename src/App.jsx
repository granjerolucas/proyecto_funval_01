import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Outras rotas serão adicionadas aqui posteriormente */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
