
import './App.css'
import ToDo from './hungray';


function App() {
  return (
    <>

      <Person></Person>
      <Stack></Stack>
      <br />
      <Developer name="Sakil" tech="HTML,CSS,TAILWIND" ></Developer>
      <Developer name="Samim" tech="Javascript,React" ></Developer>
      <Developer name="Abdus Sattar" tech="React,Next.js" ></Developer>

      <ToDo isDeveloper={true} namePrefix="WebDev" nameSuffix="Sakil" time='6 months' ></ToDo>
      <ToDo isDeveloper={false} namePrefix="WebDev" nameSuffix="Sakil" ></ToDo>

    </>
  )
}

function Person() {
  return (
    <>
      <h1>WebDev Sakil</h1>
    </>
  )
}

function Stack() {
  return (
    <ul className=''>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Tailwind</li>
      <li>DaisyUi</li>
    </ul>

  )
}

function Developer(props) {
  return (
    <div className='stack'>
      <h2>Developer: {props.name}</h2>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

export default App
