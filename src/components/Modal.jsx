import React from "react";
import '../assets/css/modalCss.css'

const Modal = (movie) => {
  return (
    <div	className="modal">
			<div className="movie__modal__info-container">
        <div className="movie__modal__video"></div>
				<h2 className="movie__modal__title">GOAT</h2>
				<p className="movie__modal__description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur ipsum doloribus molestiae, quibusdam numquam maxime ducimus quia veniam nemo quisquam perferendis eveniet dolor animi voluptas quaerat officiis ratione, aliquam reiciendis.</p>
				
			</div>
    </div>
  );
};

export default Modal;
