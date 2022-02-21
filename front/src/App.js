import './App.css';
import { Background } from './style/global'
import Navbar from './comps/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home'
import About from './routes/About'
import Article from './routes/Article'
import NotFound from './routes/NotFound';

const App = () => {
  return (
    <Background>
      <Navbar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/article" element={<Article />} />
      </Routes>
    </Background>
  );
}

export default App;
