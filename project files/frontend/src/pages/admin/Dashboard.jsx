import Navbar from "../components/Navbar";

function Dashboard(){

return(

<div>

<Navbar/>

<h1 className="title">

Admin Dashboard

</h1>

<div className="container">

<div className="card">

<h3>Users</h3>
<p>3</p>

</div>

<div className="card">

<h3>Books</h3>
<p>5</p>

</div>

<div className="card">

<h3>Orders</h3>
<p>6</p>

</div>

</div>

</div>

);

}

export default Dashboard;