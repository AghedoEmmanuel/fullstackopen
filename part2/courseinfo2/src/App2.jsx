

function App2(props) {
  const { courses } = props

  return (
    <div>
      <h2>Web Development Curriculum</h2>
      {courses.map(course => (
        <div key={course.id}>
          <h2>{course.name}</h2>
          {course.parts.map(part => (
            <div key={part.id}>
              <p>{part.name} {part.exercises}</p>
            </div>
          ))}
          <p>total of {course.parts.reduce((total,part)=> total + part.exercises, 0)} exercises</p>
        </div>
      ))}
    </div>

  );
}

export default App2