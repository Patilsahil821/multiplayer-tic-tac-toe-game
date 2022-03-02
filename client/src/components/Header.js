import React, { useState } from "react"
import "./css/header.css"

function Header({ header, whoWin, chance, setChance }) {
  const animation = {
    animationName: "header",
    animationDuration: "1s",
    animationFillMode: "backwards"
  }

  return (
    <h2
      style={{
        color: whoWin.O === true ? "green" : whoWin.X === true ? "red" : "",
        color:
          (whoWin.O === true && "green") ||
          (whoWin.X === true && "red") ||
          (chance.player1 === true && "green") ||
          (chance.player2 === true && "red"),
        animationName: whoWin.O === true || whoWin.X === true ? "header" : "",
        animationDuration: "1s",
        animationFillMode: "backwards"
      }}
    >
      {header}
    </h2>
  )
}

export default Header
