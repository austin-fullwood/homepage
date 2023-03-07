import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {

  return (
    <div className="App">
      <Header />

      <div style={{ margin: "20px calc(8px + 1.5625vw)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Navigate to='/' />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<Navigate to='/' />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
