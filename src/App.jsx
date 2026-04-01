
import './App.css'

function App() {
  return (
    <>
      <Person></Person>
      <Stack></Stack>
      <br />
      <Developer name="Sakil" tech="HTML,CSS,TAILWIND" ></Developer>
      <Developer name="Sabbir" tech="Javascript,React" ></Developer>
      <Developer name="Abdus Sattar" tech="React,Next.js" ></Developer>
    </>
  )
}

function Person() {
  return (
    <h1>WebDev Sakil</h1>
  )
}

function Stack() {
  return (
    <div>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Tailwind</li>
      <li>DaisyUi</li>
    </div>

  )
}

function Developer(props){
  return(
    <div className='stack'>
      <h1>Developer: {props.name}</h1>
      <p>Technology: {props.tech}</p>
    </div>
  )
}

export default App
