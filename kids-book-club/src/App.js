import {  Routes, Route, } from 'react-router-dom';

import AllBookClubsPage from './pages/AllBookClubs.js';
import NewBookClubsPage from './pages/NewBookClub';
import FavoritesPage from './pages/Favorites';
import Layout from './components/Layout/Layout';
import background from './images/background.png';

function App() {
  return (
    <div style={{ backgroundImage: `url(${background})`,backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
    <Layout>
      <Routes>
        <Route path="/" element={<AllBookClubsPage />} />
        <Route path="/new-book" element={<NewBookClubsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Layout>
    </div>
  )
}

export default App;
