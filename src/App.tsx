import './App.css';
import ConteudoPrincipal from './components/ConteudoPrincipal';
import FooterPremium from './components/FooterPremium';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="main">
      <Sidebar />

      <ConteudoPrincipal />

      <FooterPremium />      
    </div>
  );
}

export default App;