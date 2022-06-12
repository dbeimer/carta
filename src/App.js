import 'bootstrap/dist/css/bootstrap-grid.css';
import 'feathercss/dist/feather.css';
import './css/style.css';

import {AddCardModal} from './AddCardModal';
import {ShowCardModal} from './hooks/ShowCardModal'
import {ActivateDarkTheme} from './hooks/ActivateDarkTheme'

function App() {
  let cardsList = [
    {front: "front", back: "back"},
    {front: "front2", back: "back2"},
    {front: "front3", back: "back3"},
    {front: "front4", back: "back4"},
  ]

  const [modalStatus, showModal] = ShowCardModal()
  const [darkTheme, activateDarkTheme] = ActivateDarkTheme()

  return (
    <div className="container">
      <div className="d-flex mt-3 justify-content-between">
        <h2 className='m-0'>Flash cards</h2>
        <button className='button' onClick={() => {
          activateDarkTheme(!darkTheme)
        }}>{darkTheme ? 'Light' : 'Dark'}</button>
      </div>

      <center></center>

      <input type="text" placeholder='search your card' name="" id="" className='input mb-3' />

      <ul className='card-list'>
        {cardsList.map((card, index) => {
          return <li key={index} className='card-list-item'>{card.front} | {card.back}</li>
        })}
      </ul>
      <div className='d-flex justify-content-between'>
        <button className='button' onClick={() => {showModal(true)}}>new card</button>
        <button className='primary-button'>Study cards</button>
      </div>

      <AddCardModal showModal={showModal} />

    </div>
  )
}

export default App;
