import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/Home/home';
import { AboutPage } from './pages/About/about';
import { MyProvider } from './utils/contextProvider'; // Import MyProvider from contextProvider

function App() {
  return (
    
      <Routes >
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} /> {/* Make sure the path is different for each route */}
      </Routes >
    
  );
}

export default App;