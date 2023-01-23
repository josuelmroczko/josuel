

import { useState } from "react";
import Modal from "react-modal";
import "./Modal.css";

//instalar npm add react-modal)
Modal.setAppElement("#root");

function Competencias() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Container">
     
     <div className="btn1"> <button onClick={openModal}>Certificações</button></div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="modal-content"
      >
        <div className="container__modal">
        
        <h2 className="certificados__titulo">Cursando Engenharia de software </h2>
        <p className="certificados__titulo">termino 03/2026</p> 
        <hr />
        
        <div>
       
<div className="certificados">
        <a href="https://cursos.alura.com.br/certificate/716faa82-c617-401b-a3e2-e4a934c19023" target="blank" >REACT COM JAVASCRIPT: LIDANDO COM ARQUIVOS ESTÁTICOS</a>
       <hr/>
        
        <a href="https://cursos.alura.com.br/certificate/7e25e85a-3261-499c-b170-794a200b7938" target="blank">REACT: DESENVOLVENDO COM JAVASCRIPT</a>
        <hr/>
        <a href="https://cursos.alura.com.br/certificate/0bfc50d4-68a5-4643-8f61-a98eee50f916" target="blank">REACT: PRATICANDO REACT COM JS</a>
        <hr/>
        <a href="https://cursos.alura.com.br/certificate/4adc6d9e-5a52-4668-9baa-693216e44033" target="blank">SASS: CSS SINTATICAMENTE ESPETACULAR</a>
        <hr/>
        <a href="https://cursos.alura.com.br/certificate/ab655c99-59f5-420d-8e54-a7b8cda9174d" target="blank">FLEXBOX: POSICIONE ELEMENTOS NA TELA</a>
        <hr/>
        <a href="https://cursos.alura.com.br/certificate/176d0874-99d1-4880-8470-3c85b629180b" target="blank">HTML5 E CSS3 PARTE 1: CRIE UMA PÁGINA DA WEB</a>
        <hr/>
         <a href="https://cursos.alura.com.br/certificate/440d8100-241d-4db4-9e8a-3cf9625df9eb" target="blank"> HTML5 E CSS3 PARTE 2: POSICIONAMENTO, LISTAS E NAVEGAÇÃO</a>
         <hr/>
      <a href="https://cursos.alura.com.br/certificate/a9099c5c-2727-4178-b5d7-ae3a3a5552b5" target="blank">HTML5 E CSS3 PARTE 3: TRABALHANDO COM FORMULÁRIOS E TABELAS</a>
      <hr/>
       <a href="https://cursos.alura.com.br/certificate/0de1ee32-94a4-49c9-a710-ebf8e14e1dc9" target="blank">HTML5 E CSS3 PARTE 4: AVANÇANDO NO CSS</a>
       <hr/>
      
       <a href="https://cursos.alura.com.br/certificate/c267f01b-bf4c-4cc0-b123-00dc15cb836b" target="blank">JAVASCRIPT PARA WEB: CRIE PÁGINAS DINÂMICAS</a>
         <hr/>  
</div>



        </div>
       <div className="bntfechar"> <button className="fechar" onClick={closeModal}>Close</button></div>
      </div>
      </Modal>
    </div>
  );
}

export default Competencias;