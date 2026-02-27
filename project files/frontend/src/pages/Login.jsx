import Navbar from "../components/Navbar";
import "../index.css";

function Login(){

return(

<div>

<Navbar/>

<h1 className="title">

Login Page

</h1>

<div style={{textAlign:"center"}}>

<input placeholder="Email"/>

<br/><br/>

<input placeholder="Password"/>

<br/><br/>

<button className="btn-blue">

Login

</button>

</div>

</div>

);

}

export default Login;