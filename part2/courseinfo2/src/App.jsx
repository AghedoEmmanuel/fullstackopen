
const Course = (props) => {
  // console.log(props)
  const { course } = props
  const sum = course.parts.reduce((sum,part)=>sum + part.exercises,0) 
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total sum={sum}/>
    </div>
  )
}

const Header =({course}) =>{
  return(
    <div>
      <h2>{course}</h2>
    </div>
  )
}

const Part = (props) =>{
  return (
    <>
      <p>{props.course.name}{props.course.exercises}</p>
    </>
  )
}

const Content = ({parts}) =>{
  return(
    <>
     {
      parts.map(part => (
        <Part key={part.id} course={part}/>
        ))
     }
    </>
  )
}


const Total = ({sum}) =>(
  <p><strong>total of {sum} exercises</strong></p>
  )


function App() {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name:'Redux',
        exercises:11,
        id:4
      }
    ],
  }
  return (
  <>
  <Course course={course}/>
  </>
  )
}



export default App
