import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/card.css";



export const Card = ({img, titulo, ruta, descripcion})=>{
    return (
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top"src="https://c4.wallpaperflare.com/wallpaper/913/928/2/game-of-thrones-wallpaper-preview.jpg" alt="..."/>
  <div className="card-header">
  </div>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <p className="card-text">{descripcion}</p>
    <Link to={ruta}>
        <a  className="btn btn-primary">{titulo}</a>
    </Link>
  </div>
</div>)
}
export const Card2 = ({titulo, img, ruta})=>{
  const {actions}=useContext(Context)

  return <div className="card" style={{width: "18rem"}}>
  <div className="img-style">
    <img src={img} className="card-img-top img-perso-style" alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{titulo}</h5>
    <div className="row button-style">
      <div className="col-8 details-perso">
      <Link to={ruta}>
      <a href="#" className="btn btn-primary">Ir al detalle</a>
    </Link>
      </div>
      
      <div className="col fav-perso">
      <button className="btn btn-warning" onClick={()=>{
        actions.addFav(titulo)
      }}><i class="fas fa-thumbs-up"></i></button>
      </div>
    </div>
  </div>
</div>
}