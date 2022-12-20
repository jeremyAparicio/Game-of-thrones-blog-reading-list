import React, {useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "../../styles/detalles.css";

export const DetallesContinentes= ()=>{
    const {id}=useParams()
    const [continentes, setContinentes]=useState({});
    useEffect(()=>{
        fetch("https://thronesapi.com/api/v2/Continents/"+id)
					.then(response => response.json())
					.then(data  =>{console.log(data),setContinentes(data)})
                    .catch(error => console.log('error', error));
				},[]
    )
                
    return <>
    <div className="container">
        <div className="row">
            <div className="col-5">
                <img src='https://i.dailymail.co.uk/1s/2019/04/12/22/12210330-0-image-a-7_1555103473557.jpg'width={500}/>
            </div>
            <div className="col">
             <table className="table-style">
                <p className="p-style">Nombre del continente: {continentes.name}</p>
                <p>Actualmente esta sección esta en progreso, ya que la api no tiene más contenido.</p>
             </table>
            </div>
        </div>
    </div>
    </>
}


export const DetallesPersonajes= ()=>{
    const {id}=useParams()
    const [personajes, setPersonajes]=useState({});
    useEffect(()=>{
        fetch("https://thronesapi.com/api/v2/Characters/"+id)
					.then(response => response.json())
					.then(data  =>{console.log(data),setPersonajes(data)})
                    .catch(error => console.log('error', error));
				},[]
    )

    return <>
    <div className="container">
        <div className="row">
            <div className="col-5 img-style">
                <img src= {personajes.imageUrl} width={300}/>
            </div>
            <div className="col">
                <div className="details">
                    <h1 className="info-perso">Detalles del personaje</h1>
                <table>
                    <p className="p-style">Nombre: {personajes.fullName}</p>
                    <p className="p-style">Titulo: {personajes.title}</p>
                    <p className="p-style">Casa: {personajes.lastName}</p>
                </table>
                </div>
            </div>
        </div>
    </div>
    </>
}