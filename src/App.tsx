import './App.css';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import FooterPremium from './components/FooterPremium';
import Sidebar from './components/Sidebar';
import { HomePlaylistsProvider } from './context/HomePlaylists';

function App() {
  return (
    <HomePlaylistsProvider>
      <div className="main">
        <Sidebar />

        <ConteudoPrincipal />

        <FooterPremium />
      </div>
    </HomePlaylistsProvider>
  );
}

export default App;