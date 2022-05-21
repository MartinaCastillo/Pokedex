import React from "react";

const Pokedex = () => {
  return (
    <div>
      <div className="header">
        <img
          className="pokemon-logo"
          src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
          alt="pokemon-logo"
        />
        <div>pagination</div>
      </div>
      <div className="pokedex-grid">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
      </div>
    </div>
  );
};

export default Pokedex;
