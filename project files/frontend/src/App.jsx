import { BrowserRouter, Routes, Route }
from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Books from "./pages/Books";
import Wishlist from "./pages/Wishlist";
import Orders from "./pages/Orders";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Home/>}/>

<Route path="/login" element={<Login/>}/>

<Route path="/books" element={<Books/>}/>

<Route path="/wishlist" element={<Wishlist/>}/>

<Route path="/orders" element={<Orders/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;