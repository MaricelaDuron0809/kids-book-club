import {  Routes, Route, } from 'react-router-dom';

import AllBookClubsPage from './pages/AllBookClubs.js';
import NewBookClubsPage from './pages/NewBookClub';
import FavoritesPage from './pages/Favorites';
import MainNav from './components/layout/MainNav';

function App() {
  return (
    <div>
      <MainNav />
  
      <Routes>
        <Route path="/" element={<AllBookClubsPage />} />
        <Route path="/new-book" element={<NewBookClubsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    
     

    </div>
  )
}

export default App;
