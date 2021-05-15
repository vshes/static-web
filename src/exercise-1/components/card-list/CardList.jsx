import  React from 'react';
import './cardlist.css';
import Card from '../card/Card'
const CardList = props => {

    return (
      <div className='card-list'>
          {props.monsters.map(monster =>(<Card monster={monster}/>))}
      </div>
    );

}
export default CardList;

