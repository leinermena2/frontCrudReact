import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowProducts from './views/crud/ShowProducts';
import CreateProduct from './views/crud/CreateProduct';
import EditProduct from './views/crud/EditProduct';
import Login from './views/home/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/items' element={<ShowProducts />} />
          <Route path='/create' element={<CreateProduct />} />
          <Route path='/edit/:id' element={<EditProduct />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
