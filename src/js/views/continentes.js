import React, {useContext} from "react";
import { Card2 } from "../component/card";
import { Context } from "../store/appContext";

export const Continentes = ()=>{
    
    const {store} = useContext(Context);
    return <div className="container">
    <h1>Continentes</h1>
    <div className="row continentes-row">
       {store.continentes.map((cont, index)=>{
        return <Card2 titulo={cont.name} img="https://i.dailymail.co.uk/1s/2019/04/12/22/12210330-0-image-a-7_1555103473557.jpg" ruta={"/detalles/continentes/" + cont.id}/>
       })}
    </div>
    </div>
}