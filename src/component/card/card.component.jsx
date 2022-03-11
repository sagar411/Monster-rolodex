import React from "react";
import './card.styles.css'
export const Card = (props)=>{
 return(
 <div className="card-container">
     {/* urlparameter */}
     {/* <img alt="monsters" src={`https://robohash.org/${props.monster.id}?set=set2&size=&size=180x180`}></img> */}
     <img alt="monsters" src={`https://robohash.org/${props.monster.id}&size=180x180`}></img>
     <h2 >{props.monster.name}</h2>
     <p>{props.monster.email}</p>
     {/* <p>{props.monster.company.name}</p> */}
 </div>)
}