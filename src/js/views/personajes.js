import { element } from "prop-types";
import React,{useContext} from "react";
import { Card2 } from "../component/card";
import { Context } from "../store/appContext";

export const Personajes = ()=>{
    const {store,actions} = useContext(Context);
    console.log(store)
    return <div className="container">
    <h1>Personajes</h1>
    <div className="row personajes-row">
    {store.personajes.map((perso, index)=>{
    return <Card2 titulo={perso.fullName} img={perso.imageUrl} ruta={"/detalles/personajes/" + perso.id }/>
})}
    </div>
    </div>
    
}