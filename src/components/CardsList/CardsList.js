import React from 'react'
import CardItem from './CardItem/CardItem'

function CardsList(props) {
  return (
    <div className="row">
      {props.cards.map((item) => {
        return (
          <div className="col d-flex justify-content-center" key={item.id}>
            <CardItem
              card={item}
              onSelectCardToggle={props.onSelectCardToggle}
            />
          </div>
        )
      })}
    </div>
  )
}

export default CardsList
