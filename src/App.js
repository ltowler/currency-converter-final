import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExchangeRates from './pages/ExchangeRates';
import { Route, Routes } from "react-router-dom";
import Footer from './components/footer';
import './components/footer.css';

function App() {
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <h1 className="site-h1">The Currency Extractor</h1>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exchange-rates" element={<ExchangeRates />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;