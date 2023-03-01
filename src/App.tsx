import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Travel from './components/Travel';
import Home from './components/Home';
import Projects from './components/Projects';
import Status from './components/Status';

function App() {

  return (
    <div className="App">
      <Header />

      <div style={{ margin: "20px 10%" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to='/' />} />
          <Route path="projects" element={<Projects />} />
          <Route path="travel" element={<Travel />} />
          <Route path="status" element={<Status />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
