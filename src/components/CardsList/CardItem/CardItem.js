import React, { useState } from 'react'
import classes from './CardItem.module.scss'

function CardItem(props) {
  const [isHover, setIsHover] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const card = props.card
  const classesCardItem = [classes.CardItem]
  const classesOuter = [classes.Outer]

  if (card.isDisabled) {
    classesCardItem.push(classes.CardItem__disabled)
  } else if (card.isSelected) {
    classesCardItem.push(classes.CardItem__selected)
  }

  if (isHover) {
    classesOuter.push(classes.Outer__hovered)
  }

  if (isClicked) {
    classesOuter.push(classes.Outer__clicked)
  }

  function onClickHandler() {
    setIsClicked(true)

    props.onSelectCardToggle(card.id)
  }

  function onMouseEnterHandler() {
    setIsHover(true)
  }

  function onMouseLeaveHandler() {
    setIsHover(false)
    setIsClicked(false)
  }

  function getTextUnderCard() {
    if (card.isDisabled) {
      return (
        <p className={classes.TextUnderCard}>
          Печалька, {card.data.taste} закончился.
        </p>
      )
    }

    if (card.isSelected) {
      return <p className={classes.TextUnderCard}>{card.data.description}</p>
    }

    return (
      <p className={classes.TextUnderCard}>
        Чего сидишь? Порадуй котэ,{' '}
        <strong onClick={() => props.onSelectCardToggle(card.id)}>купи.</strong>
      </p>
    )
  }

  return (
    <div className={classesCardItem.join(' ')}>
      <div
        className={classesOuter.join(' ')}
        onClick={onClickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <div className={classes.Inner}>
          {card.isSelected && isHover && !isClicked ? (
            <p className={classes.TopText}>Котэ не одобряет?</p>
          ) : (
            <p className={classes.TopText}>Сказочное заморское яство</p>
          )}

          <h3 className={classes.Title}>{card.data.title}</h3>
          <h4 className={classes.SubTitle}>{card.data.taste}</h4>

          <ul className={classes.Features}>
            {card.data.features.map((item, index) => {
              return <li key={index}>{item}</li>
            })}
          </ul>

          <div className={classes.Weight}>
            <strong>{card.data.weight}</strong>
            <br />
            кг
          </div>
        </div>
      </div>

      {getTextUnderCard()}
    </div>
  )
}

export default CardItem
