
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Routes,
  Route,
 
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';


function App() {
  return (
    
    <div >
        <Header></Header>
      <Router>
        <Routes>
        <Route path='/' exact element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      
           </Routes>
      </Router>
    
    
    </div>
  );
}

export default App;
