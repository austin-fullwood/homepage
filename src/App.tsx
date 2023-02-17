import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={
          <div style={{ margin: "0px 10%" }}>
            <About />
            <Projects />
          </div>
        }/>
        <Route path="projects" element={
          <div style={{ margin: "0px 10%" }}>
            <Projects />
          </div>
        }/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
