import './App.css';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import FooterPremium from './components/FooterPremium';
import Sidebar from './components/Sidebar';
import { MostListenedPlaylistsProvider } from './context/MostListenedPlaylists';
import { RecommendedArtistsProvider } from './context/RecommendedArtists';
import { UserSearchProvider } from './context/UserSearch';

function App() {
  return (
    <MostListenedPlaylistsProvider>
      <UserSearchProvider>
        <RecommendedArtistsProvider>

          <div className="main">
            <Sidebar />

            <ConteudoPrincipal />

            <FooterPremium />
          </div>
          
        </RecommendedArtistsProvider>
      </UserSearchProvider>
    </MostListenedPlaylistsProvider>
  );
}

export default App;