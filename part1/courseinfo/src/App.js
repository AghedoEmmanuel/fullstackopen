
const Header = (props) =>{
  return(
    <h1>{props.course}</h1>
  )
}

const Parts = (props) =>{
  return(
    <p>{props.content.name} {props.content.exercises}</p>
  )
}

const Content = (props) =>{
  return(
   <div>
    <Parts content ={props.content[0]}/>
    <Parts content ={props.content[1]}/>
    <Parts content ={props.content[2]}/>
   </div>
  )
}

const Total = (props) =>{
  return(
   <div>
     <p>Number of Exercise {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}</p>
   </div>
  )
}

function App() {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
     <Header course = {course.name}/>
     <Content content ={course.parts}/>
     <Total total = {course.parts}/>
    </div>
  );
}

export default App;
