import React from "react";

import "./header.css";

const Header = () => (
  <header id="main-header">
    <div id="science">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Escolha uma área</option>
          <option value="tech">Tecnologia</option>
          <option value="quim">Química</option>
          <option value="bio">Biologia</option>
          <option value="fis">Física</option>
        </select>
        <label for="floatingSelect">Ciência</label>
      </div>
    </div>

    <div id="art">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Escolha uma área</option>
          <option value="music">Música</option>
          <option value="">Literatura</option>
          <option value="">Dança</option>
          <option value="">Artes Plaśticas</option>
        </select>
        <label for="floatingSelect">Arte</label>
      </div>
    </div>

    <div id="history">
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelect"
          aria-label="Floating label select example"
        >
          <option selected>Escolha uma área</option>
          <option value="">Arqueologia</option>
        </select>
        <label for="floatingSelect">História</label>
      </div>
    </div>
  </header>
);

export default Header;
