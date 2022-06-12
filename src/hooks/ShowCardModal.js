import {useEffect, useState} from 'react';

function ShowCardModal() {

  let [show, setShow] = useState(false);

  useEffect(() => {
    const cardModal = document.getElementById('modal');
    if (show) {
      cardModal.classList.add('show');
    } else {
      cardModal.classList.remove('show');
    }
  }, [show]);

  return [show, setShow];
}

export {ShowCardModal};
