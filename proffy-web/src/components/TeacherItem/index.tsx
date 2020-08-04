import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/26398277?s=460&u=b04bff0324c1a653b55c2cac8f1cfbbdaf1a282a&v=4" alt="Cleiton Garcia" ></img>
        <div>
          <strong>Cleiton Garcia</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matematica avançada.
        <br /><br />
        Apaixonado por explodir coisas em laboratorio e por mudar a vida das pessoas atraves de calculos.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp icone" ></img>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;