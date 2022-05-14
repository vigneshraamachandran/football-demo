import React from "react";
import './players.css';
import { Link } from "react-router-dom";
export default function Profile(){
    return(
    <div>
        <div>
            <div className="chl">
              <h1>Leagues and Champions</h1>
              <p id="ucl">Universal Champion league</p>
              <p>Liver pool vs real madrid</p>
            </div>
            <div className="lali">
           <h1>Laliga</h1>
           <p>Yet to declare</p>
            </div>
            <div className="ppl">
           <h1>premier league</h1>
           <p>Yet to declare</p>
            </div>
             <div className="sa">
                 <h1>Series A</h1>
                 <p>Yet to declare</p>
            </div>
            <div className="ll1">
                <h1>ligue 1</h1>
                <p> Champion : Paris saint-germain F.C </p>
                <img src="\images\liguechamp.jpg"></img>
            </div>
            <div className="bbl">
                <h1>bundesliga</h1>
                <p>Champion :F.C Bayern Munich</p>
                <img src="\images\beyranchamp.jpg"></img>
            </div>
        </div>
    </div>
     )
}