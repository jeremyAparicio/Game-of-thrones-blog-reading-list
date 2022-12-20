import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
	const {store,actions}=useContext(Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3 navbar-style">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 link-home">Home</span>
			</Link>
			<div className="ml-auto dropdown-style">
			<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Favoritos
  </button>
  <ul className="dropdown-menu">
   {store.favoritos?.map((value, index)=>{
	return ( <li key={index}  className="dropdown-item" >{value} <i className="fas fa-trash" onClick={() => actions.deleteFav(index)} ></i></li>
   )
   })}
  </ul>
</div>
			</div>
		</nav>
	);
};


