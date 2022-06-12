import React from "react";

function AddCardModal({showModal}) {

  return (
    <div className="modal d-flex justify-content-center" id="add_card_modal">
      <div className="modal-card align-self-center p-4">
        <center>
          <h3 className="mt-0">Add a new card</h3>
        </center>
        <div className="mb-3">
          <textarea name="" id="" cols="30" placeholder="front"></textarea>
          <textarea name="" id="" cols="30" placeholder="back"></textarea>
        </div>
        <div className="d-flex justify-content-between">

          <button className="clear-button" onClick={() => showModal(false)}>Cancel</button>
          <button className="primary-button">Add</button>
        </div>

      </div>

    </div>
  )
}

export {AddCardModal}
