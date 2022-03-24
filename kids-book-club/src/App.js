import {  Routes, Route, } from 'react-router-dom';

import AllBookClubsPage from './pages/AllBookClubs.js';
import NewBookClubsPage from './pages/NewBookClub';
import FavoritesPage from './pages/Favorites';

function App() {
  return (
    <div>
  
      <Routes>
        <Route path="/" element={<AllBookClubsPage />} />
        <Route path="/newbook" element={<NewBookClubsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    
     

    </div>
  )
}

export default App;
