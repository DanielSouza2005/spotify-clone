import './App.css';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import FooterPremium from './components/FooterPremium';
import Sidebar from './components/Sidebar';
import { MostListenedPlaylistsProvider } from './context/MostListenedPlaylists';
import { UserSearchProvider } from './context/UserSearch';

function App() {
  return (
    <MostListenedPlaylistsProvider>
      <UserSearchProvider>

        <div className="main">
          <Sidebar />

          <ConteudoPrincipal />

          <FooterPremium />
        </div>

      </UserSearchProvider>
    </MostListenedPlaylistsProvider>
  );
}

export default App;