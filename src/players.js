import React from 'react';
import './players.css'
export default function Players(props){
           return(
               <div className='c1'>
                   <ul>
                   <li><img src={props.image} width="150px" height="200px" alt={`${props.image}`}/></li>
                   <li><p id="p1"   >Name  :{props.name}</p></li>
                   <li><span id="s1">Goals :{props.goals}</span></li>
                   <li><span id="s1">Current Club  :{props.club}</span></li>
                   <li><span id="s1">Nationality :{props.nationality}</span></li>
                   </ul>
               </div>
           )
}