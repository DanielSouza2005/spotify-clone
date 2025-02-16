import './App.css';
import FooterPremium from './components/FooterPremium';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="main">
      <Sidebar />

      <FooterPremium />
    </div>
  );
}

export default App;