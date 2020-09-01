import React from 'react'
import classes from './Card.module.scss'

function Card(props) {
  return (
    <div className={classes.Card}>
      <div className={classes.Outer}>
        <div className={classes.Inner}>
          <p className={classes.TopText}>Сказочное заморское яство</p>

          <h3 className={classes.Title}>Нямушка</h3>
          <h4 className={classes.SubTitle}>с фуа-гра</h4>

          <ul className={classes.Features}>
            <li>
              <strong>10</strong> порций
            </li>
            <li>мышь в подарок</li>
            <li>заказчик доволен</li>
          </ul>

          <div className={classes.Weight}>
            <strong>0,5</strong>
            <br />
            кг
          </div>
        </div>
      </div>

      <p className={classes.TextUnderCard}>
        Чего сидишь? Порадуй котэ, <a href="/">купи.</a>
      </p>
    </div>
  )
}

export default Card
