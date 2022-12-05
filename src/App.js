import './App.css';
import Banner from './components/Banner';
import Line from './components/Line';
import NavBar from './components/NavBar';
import { categories } from './services/apiTMDB';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Banner />
      {categories.map((cat, i) => (
        <Line key={cat.title} {...cat} />
      ))}
    </div>
  );
}

export default App;
