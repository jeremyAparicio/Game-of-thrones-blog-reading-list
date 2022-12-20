import React, {useContext, useEffect, useState} from "react";
import "../../styles/home.css";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
export const Home = () =>{
	
	const {store,actions} = useContext(Context);

	return(
	<div className="text-center mt-5">
		<h1>{store.titulo}</h1>
		<div className="row home d-flex">
			<Card titulo="Ir a los personajes" ruta="/personajes"/>
			<Card titulo = "Ir a los continentes" ruta= "/continentes" />
		</div>
	</div>
);
}