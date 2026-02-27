import Navbar from "../components/Navbar";
import "../index.css";

function Orders(){

return(

<div>

<Navbar/>

<h1 className="title">

My Orders

</h1>

<div className="container">

<div className="card">

<img src="https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg"/>

<h3>Rich Dad Poor Dad</h3>

<p>Status: Delivered</p>

</div>

</div>

</div>

);

}

export default Orders;