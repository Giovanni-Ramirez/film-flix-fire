import { useState } from "react";

function ModalFunctions() {
  const [modalState, setModalState] = useState(false);
  const [modalMovie, setModalMovie] = useState({});

  function toggleModalState() {
    setModalState(!modalState);
  }

  const movieModalFunc = (movie) => {
    toggleModalState()
    setModalMovie(movie)
  }

    return {
    modalState,
    modalMovie,
    toggleModalState,
    movieModalFunc,
  };
}

export default ModalFunctions