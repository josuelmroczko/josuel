

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
        <p className="certificados__titulo">termino 12/2025</p> 
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

         <a href="https://cursos.alura.com.br/certificate/f53c0819-8118-4d60-8fb5-7f69fa7434ae" target="blank">REACT: ABSTRAINDO SEU CSS COM STYLED COMPONENTS</a>
         <hr/> 

         <a href="https://www.linkedin.com/learning/certificates/3879ed3c094cfbd1743089c412b4a1c77e1f6d0ea25e90ca657284aafad0a0eb" target="blank">ARQUITETURA DE SOFTWARE: INTRODUÇÃO AOS PADRÕES DE PROJETO
</a>
         <hr/> 

         <a href="https://cursos.alura.com.br/certificate/305f591b-dc81-42be-9c3c-e818331630f6 " target="blank">JAVASCRIPT: PROGRAMANDO NA LINGUAGEM DA WEB</a>
         <hr/> 

         <a href="https://cursos.alura.com.br/certificate/a296e857-73a0-4107-bc4e-6aef237d222b " target="blank">PYTHON: COMEÇANDO COM A LINGUAGEM</a>
         <hr/> 

         <a href="https://cursos.alura.com.br/certificate/97d3c21d-f0ef-4dac-ad60-c96281de7371 " target="blank">CSS: FLEXBOX E LAYOUTS RESPONSIVOS </a>
         <hr/> 

         <a href="https://cursos.alura.com.br/certificate/b9c198c4-7cd8-4bd2-97a9-85d6b832cacc " target="blank">PRATICANDO CSS: GRID E FLEXBOX</a>
         <hr/> 

         <a href="https://cursos.alura.com.br/certificate/84aa7274-a65f-4023-a8b5-23c971d3d2fe " target="blank">PRINCÍPIOS DO TRABALHO EM EQUIPE: RELAÇÕES COLABORATIVAS </a>
         <hr/> 

         <a href="https://cursos.alura.com.br/certificate/700f47d5-5eaa-4ded-a32d-6107594e7ffb" target="blank"> EXCEL: DOMINE O EDITOR DE PLANILHAS</a>
         <hr/> 

         <a href=" " target="blank"> </a>
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