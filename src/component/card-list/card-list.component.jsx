import React from "react";
import './card-list.styles.css'
import { Card } from "../card/card.component";

export const CardList =(props)=>{ 
    console.log(props)
return (<div className="card-list">
    {props.monstors.map(monstor => <h1 key={monstor.id}>{monstor.name} </h1>)
  }</div>)
}

