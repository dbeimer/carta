import React from "react";
import Card from "./models/Card"

function AddCardModal({showModal, addCard}) {

  let front = ''
  let back = ''

  return (
    <form className="modal-card align-self-center p-4" onSubmit={(event) => {

      front = event.target.front.value;
      back = event.target.back.value;


      let card = new Card(front, back);
      console.log(card);

      addCard({front, back});

      event.target.front.value = '';
      event.target.back.value = '';

      event.target.front.focus();

      event.preventDefault()
    }}>
      <center>
        <h3 className="mt-0">Add a new card</h3>
      </center>
      <div className="mb-3">
        <textarea name="front" id="front" cols="30" placeholder="front"></textarea>
        <textarea name="back" id="back" cols="30" placeholder="back"></textarea>
      </div>
      <div className="d-flex justify-content-between">

        <button className="clear-button" type="button" onClick={() => showModal(false)}>Cancel</button>
        <button className="primary-button">Add</button>
      </div>

    </form>
  )
}

export {AddCardModal}
