import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

function App() {

  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const [show, setShow] = useState(false)

  const next = () => {
    setSelected((selected + 1) % anecdotes.length)
  }

  const count = () => {
    const newVote = [...vote]
    newVote[selected] += 1
    setVote(newVote)
    setShow(true)
  }

  const maxVote = Math.max(...vote)
  const mostVotedIndex = vote.indexOf(maxVote)

  return (
    <>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]}
      <p>has {vote[selected]} votes</p>
      <Button handleClick={count} text='Vote' />
      <Button handleClick={next} text='next anecdotes' />

      <h1>Anecdotes with the most votes</h1>
      {show ? (
        <>
          {anecdotes[mostVotedIndex]}
          <p>has {maxVote} votes</p>
        </>
      ) :
        <>
          <p>no vote given</p>
        </>
      }
    </>
  )
}

export default App
