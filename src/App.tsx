import './App.css';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import FooterPremium from './components/FooterPremium';
import Sidebar from './components/Sidebar';
import { MostListenedPlaylistsProvider } from './context/MostListenedPlaylists';

function App() {
  return (
    <MostListenedPlaylistsProvider>
      <div className="main">
        <Sidebar />

        <ConteudoPrincipal />

        <FooterPremium />
      </div>
    </MostListenedPlaylistsProvider>
  );
}

export default App;