import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePrep from './pages/CreatePrep';
import ResultPage from './pages/ResultPage';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create" element={<CreatePrep />}></Route>
        <Route path="/result" element={<ResultPage />}></Route>
      </Routes> */}
      <HomePage />
    </div>
  );
}

export default App;
