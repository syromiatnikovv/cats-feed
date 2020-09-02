import React, { Component } from 'react'
import classes from './App.module.scss'
import CardsList from './components/CardsList/CardsList'

class App extends Component {
  state = {
    cards: [
      {
        id: 1,
        isSelected: false,
        isDisabled: false,
        data: {
          title: 'Нямушка',
          taste: 'с фуа-гра',
          features: ['10 порций', 'мышь в подарок'],
          weight: '0,5',
          description: 'Печень утки разварная с артишоками.',
        },
      },
      {
        id: 2,
        isSelected: false,
        isDisabled: false,
        data: {
          title: 'Нямушка',
          taste: 'с рыбой',
          features: ['40 порций', '2 мыши в подарок'],
          weight: '2',
          description: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
        },
      },
      {
        id: 3,
        isSelected: false,
        isDisabled: true,
        data: {
          title: 'Нямушка',
          taste: 'с курой',
          features: ['100 порций', '5 мышей в подарок', 'заказчик доволен'],
          weight: '5',
          description: 'Филе из цыплят с трюфелями в бульоне.',
        },
      },
    ],
  }

  onSelectCardToggle = (id) => {
    this.setState(
      this.state.cards.map((item) => {
        if (item.id === id) item.isSelected = !item.isSelected
        return item
      })
    )
  }

  render() {
    return (
      <div className={classes.App}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>Ты сегодня покормил кота?</h1>
            </div>
          </div>

          <CardsList
            cards={this.state.cards}
            onSelectCardToggle={this.onSelectCardToggle}
          />
        </div>
      </div>
    )
  }
}

export default App
