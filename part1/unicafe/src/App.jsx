import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

// const StatisticLine = ({ value, text }) => {
//   if (value === 0) {
//     return null
//   }
//   return (
//     <tr>
//       <td>{text}</td> <td>{value}</td>
//     </tr>
//   )
// }
const StatisticLine = ({ value, text }) => (
    <tr>
      <td>{text}</td> <td>{value}</td>
    </tr>
  )


const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)
  const [feedback, setFeedback] = useState(false)



  const handleGoodCLick = () => {
    const updatedGoodCLicks = good + 1
    setGood(updatedGoodCLicks)
    setTotal(updatedGoodCLicks + bad + neutral)
    setFeedback(true)
  }
  const handleBadCLick = () => {
    const updatedBadClicks = bad + 1
    setBad(updatedBadClicks)
    setTotal(good + updatedBadClicks + neutral)
    setFeedback(true)
  }
  const handleNeutralCLick = () => {
    const updateNeutralClick = neutral + 1
    setNeutral(updateNeutralClick)
    setTotal(good + bad + updateNeutralClick)
    setFeedback(true)
  }

  const average = ((good - bad) / total || 0).toFixed(1)
  const positive = ((good / total) * 100 || 0).toFixed(1)

  return (
    <>
      <h3>Give Feedback</h3>
      <Button handleClick={handleGoodCLick} text='Good' />
      <Button handleClick={handleNeutralCLick} text='Neutral' />
      <Button handleClick={handleBadCLick} text='Bad' />

      <h3>Statistics</h3>
     {feedback? (
      <>
      <StatisticLine value={good} text='Good' />
      <StatisticLine value={neutral} text='Neutral' />
      <StatisticLine value={bad} text='Bad' />
      <StatisticLine value={total} text='All' />
      <StatisticLine value={`${average}%`} text='Average' />
      <StatisticLine value={`${positive}%`} text='Positive' />
      </>
     ):(
      <p>No Feedback Given</p>
     )}
        
      
    </>
  )
}


export default App
