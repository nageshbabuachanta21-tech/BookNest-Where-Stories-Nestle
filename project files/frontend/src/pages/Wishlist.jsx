import Navbar from "../components/Navbar";
import "../index.css";

function Wishlist(){

return(

<div>

<Navbar/>

<h1 className="title">

Wishlist

</h1>

<div className="container">

<div className="card">

<img src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"/>

<h3>Rich Dad Poor Dad</h3>

<button className="btn-red">

Remove

</button>

<button className="btn-blue">

View

</button>

</div>

</div>

</div>

);

}

export default Wishlist;