import {useState,useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap-grid.css';

import 'feathercss/dist/feather.css';
import './css/style.css';

import {AddCardModal} from './AddCardModal';
import {ShowCardModal} from './hooks/ShowCardModal'
import {ActivateDarkTheme} from './hooks/ActivateDarkTheme'
import {Modal} from './Modal'
import {StudyArea} from './StudyArea'

import {listCards,addCard,removeCard} from './controllers/CardController'

function App() {
    console.log('se ha cargado toda la app');
    let cardsList = []

    const [modalStatus, showModal] = ShowCardModal()
    const [darkTheme, activateDarkTheme] = ActivateDarkTheme()
    const [cards, setCards] = useState(cardsList)
    const [study, setStudy] = useState(false)
    
    useEffect(() => {
        listCards().then(cards => {
            setCards(cards)
        })
    }, [])

    function addNewCard(card) {
        addCard(card).then((resultado) => {
            setCards([...cards, card])
        })
    }

    function deleteCard(uid) {
        removeCard(uid).then((resultado) => {
            console.log(resultado)
            let newCards=cards.filter(card => card.uid !== uid)
            setCards(newCards)
        })
    }

    return (
        <div className="container">
            <div className="d-flex mt-3 justify-content-between">
                <h2 className='m-0'>Flash cards</h2>
                <button className='button' onClick={() => {
                    activateDarkTheme(!darkTheme)
                }}>{darkTheme ? 'Light' : 'Dark'}</button>
            </div>

            <input type="text" placeholder='search your card' name="" id="" className='input mb-3' />

            <ul className='card-list'>
                {cards.map((card, index) => {
                    return <li key={card.uid} className='card-list-item d-flex justify-content-between'>
                        <div>
                            {card.front}
                            <span className='meaning'>:{card.back}</span>
                        </div>
                        <button onClick={()=>(deleteCard(card.uid))}>x</button>
                    </li>
                })}
            </ul>
            <div className='d-flex justify-content-between'>
                <button className='button'
                    onClick={() => {showModal(true)}}>new card</button>
                <button className='primary-button'
                    onClick={() => {setStudy(true)}}
                >Study cards</button>
            </div>
            <Modal>
                <AddCardModal showModal={showModal} addCard={addNewCard} />
            </Modal>


            {study && <StudyArea showStudy={setStudy} cards={cards} />}

        </div>
    )
}

export default App;
