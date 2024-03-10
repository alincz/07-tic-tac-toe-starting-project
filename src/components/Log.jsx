import React from "react";

const Log = ({ turns }) => {
  return (
    <div>
      <ol id="log">
        {turns.map((turn) => (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row}, {turn.square.col}
          </li>
        ))}
      </ol>
    </div>
  );
};


//aici am folosit metoda map pt ca itera peste fiecare rand si coloana din tabel
//si atunci cand dam click intr un patrat sa apara numele jucatorului si ce a selectat
//sub tabel 
export default Log;
