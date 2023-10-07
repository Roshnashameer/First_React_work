
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SingleView from './pages/SingleView';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/view/:id' element={<SingleView></SingleView>}></Route>
      </Routes>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
