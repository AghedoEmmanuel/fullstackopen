import { useState } from 'react'


const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)







const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [total, setTotal] = useState(0)

  

  const handleGoodCLick = () =>{
    const updatedGoodCLicks= good+1
    setGood(updatedGoodCLicks)
    setTotal (updatedGoodCLicks + bad + neutral)
  }
  const handleBadCLick = () =>{
    const updatedBadClicks = bad+1
    setBad(updatedBadClicks)
    setTotal(good + updatedBadClicks + neutral)
  }
  const handleNeutralCLick = () =>{
    const updateNeutralClick = neutral+1
    setNeutral(updateNeutralClick)
    setTotal(good+bad+updateNeutralClick)
  }

  const average = ((good-bad)/total ||0). toFixed(1)
  const positive = ((good/total) * 100 ||0).toFixed(1)

return (
  <>
  <h3>Give Feedback</h3>
    <Button handleClick={handleGoodCLick} text='Good'/>
    <Button handleClick={handleNeutralCLick} text='Neutral'/>
    <Button handleClick={handleBadCLick} text='Bad'/>

    <h3>Statistics</h3>
    <p>Good:{good}</p>
    <p>Neutral:{neutral}</p>
    <p>Bad:{bad}</p>
    <p>All:{total}</p>
    <p>Average:{average}%</p>
    <p>Positive:{positive}%</p>
  </>
)
  }


export default App
