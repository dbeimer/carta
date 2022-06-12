import React from "react";
import ReactDOM from "react-dom";


function StudyArea({showStudy, cards}) {

    let [indexCard, setIndexCard] = React.useState(0);
    let actualCard = cards[indexCard];
    let [textCard, setTextCard] = React.useState(actualCard.front);

    function nextCard() {
        if (indexCard < cards.length - 1) {
            setIndexCard(indexCard + 1);
            actualCard = cards[indexCard + 1];
            setTextCard(actualCard.front);
        }
    }

    return ReactDOM.createPortal(
        (
            <div className='study-area'>
                <div className="container">
                    <div className='d-flex justify-content-between my-3'>
                        <h2 className='m-0'>Studing Cards</h2>
                        <button className='button' onClick={() => (showStudy(false))}>close</button>
                    </div>
                    <p>
                        <span>do you know that?</span>
                    </p>
                    <div className="card mb-3" onClick={() => {
                        textCard = actualCard.back === textCard ? actualCard.front : actualCard.back;
                        setTextCard(textCard);
                    }}>
                        <h1 className="">{textCard}</h1>
                        <span>{cards.length}/{indexCard + 1}</span>
                    </div>
                    <div className="w-100">
                        <button className="w-50 button" onClick={() => {nextCard(false)}}>no</button>
                        <button className="w-50 primary-button" onClick={() => {nextCard(true)}}>yes</button>
                    </div>
                </div>
            </div>),
        document.getElementById("study")
    )
}

export {StudyArea};
