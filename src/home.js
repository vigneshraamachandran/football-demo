import React from "react";
import { Link } from "react-router-dom";
import Data from './data.json'
import './players.css'
import Players from "./players";
export default function Home(){
    const StudentData=Data.map((item)=>{
        return(
            <div key={item.id} className="cards">
                <ul>
                    <li > <Players {...item}/></li>
                </ul>
            </div>
    )
    })
    return(<div>
        <div>
             {StudentData}
        </div>
           
    </div>)
}