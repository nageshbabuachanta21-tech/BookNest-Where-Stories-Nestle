import Navbar from "../components/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import "../index.css";

function Books(){

const [books,setBooks]=useState([]);

useEffect(()=>{

axios.get("http://localhost:5000/api/books")

.then(res=>setBooks(res.data))

.catch(err=>console.log(err));

},[]);

return(

<div>

<Navbar/>

<h1 className="title">

Best Seller

</h1>

<div className="container">

{

books.map(book=>(

<div className="card" key={book._id}>

<img src={book.image}/>

<h3>{book.title}</h3>

<p>Author: {book.author}</p>

<p>Price: ₹{book.price}</p>

<button className="btn-purple">

Add to Wishlist

</button>

<button className="btn-blue">

View

</button>

</div>

))

}

</div>

</div>

);

}

export default Books;