import React, { useState } from "react"

import Header from "./components/Header"
import TicTacToeBox2 from "./components/TicTacToeBox2"

function App() {
  const [header, setHeader] = useState("Tic Tac Toe")
  const [whoWin, setWhoWin] = useState({ X: false, O: false })
  const [who, setWho] = useState({ X: false, O: false })
  const [chance, setChance] = useState({ player1: true, player2: false })

  return (
    <>
      <Header
        chance={chance}
        setChance={setChance}
        header={header}
        whoWin={whoWin}
      />

      {who.X === false && who.O === false && (
        <>
          <p>choose your sign.</p>
          <div>
            <button
              onClick={() => {
                setWho({ X: false, O: true })
              }}
            >
              O
            </button>
            <button
              onClick={() => {
                setWho({ X: true, O: false })
              }}
            >
              X
            </button>
          </div>
        </>
      )}

      {(who.X === true || who.O === true) && (
        <TicTacToeBox2
          setHeader={setHeader}
          setWhoWin={setWhoWin}
          whoWin={whoWin}
          player={who}
          chance={chance}
          setChance={setChance}
        />
      )}
      {(who.X === true || who.O === true) && (
        <button
          style={{ marginTop: "1.5rem" }}
          onClick={() => {
            window.location.reload()
          }}
        >
          Play again
        </button>
      )}
    </>
  )
}

export default App
