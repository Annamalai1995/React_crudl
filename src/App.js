import { MainPage } from "./Mainpage";
import { ProductRegistration } from "./ProductRegistration";
import { ReadProduct } from "./ReadProduct";
import { UpdateProduct } from "./UpdateProduct";
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>

        <Route path="/" element={<MainPage/>} />
        <Route path="/register" element={<ProductRegistration/>} />
        <Route path="/read/:index" element={<ReadProduct/>}/>
        <Route path="/update/:index" element={<UpdateProduct/>}/>

    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;