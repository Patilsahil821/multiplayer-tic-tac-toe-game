import React, { useState, useEffect } from "react"
import Square2 from "./Square2.js"
import "./css/tic-tac-toe-box.css"
import socket from "../socket"

function TicTacToeBox2({
  setHeader,
  whoWin,
  setWhoWin,
  player,
  chance,
  setChance
}) {
  const [box, setBox] = useState(Array(9).fill(""))
  const [clicked, setClick] = useState(false)
  const [path, setPath] = useState([])
  const [canPlayFurther, setCanPlayFurther] = useState(true)

  function handleClick(key, e) {
    e.preventDefault()

    if (canPlayFurther === false) {
      return alert("game has finished.....")
    }

    if (box[key] !== "") {
      return alert("you cannot place here....")
    }

    if (
      (player.O === true && chance.player1 === true) ||
      (player.X === true && chance.player2 === true)
    ) {
      socket.emit("send box", {
        data:
          (chance.player1 === true && "O") || (chance.player2 === true && "X"),
        index: key,
        chance: { player1: !chance.player1, player2: !chance.player2 }
      })
    } else {
      return alert("its not your chance.....")
    }
  }

  useEffect(() => {
    socket.on("get box", (data) => {
      if (
        data.chance.player1 === true &&
        canPlayFurther === true &&
        whoWin.X === false &&
        whoWin.O == false
      ) {
        setHeader("O turn...")
      } else if (
        data.chance.player2 === true &&
        canPlayFurther === true &&
        whoWin.X === false &&
        whoWin.O === false
      ) {
        setHeader("X turn....")
      }
      setBox(data.square)
      setChance(data.chance)
    })
    setHeader("O turn")
  }, [])

  function checkWinner() {
    //check for winner.
    const pattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
    ]
    for (let i = 0; i < pattern.length; i++) {
      let [first, second, third] = pattern[i]
      if (box[first] !== "" && box[second] !== "" && box[third] !== "") {
        if (
          box[first] === box[second] &&
          box[second] === box[third] &&
          box[first] === box[third]
        ) {
          setHeader(`${box[first]} has won`)
          setCanPlayFurther(false)
          setPath([first, second, third])
          setWhoWin((prev) => {
            return { ...prev, [box[first]]: true }
          })
          return
        }
      }
    }
    if (box.includes("") === false) {
      setHeader("draw")
      return
    }
  }
  useEffect(() => {
    checkWinner()
  }, [box])

  return (
    <>
      <p
        style={{
          color: (player.O === true && "green") || (player.X === true && "red")
        }}
      >
        Player {(player.O === true && "O") || (player.X === true && "X")}{" "}
      </p>
      <Square2
        box={box}
        handleClick={handleClick}
        path={path}
        whoWin={whoWin}
      />
    </>
  )
}

export default TicTacToeBox2
