import './css/App.css'
import { Link } from 'react-router-dom';

function App() {

  return (
    <>
      <div className="container">
        <h1>
            Create and manage tournament brackets with nurtul!
        </h1>

        <img className="tournExample" src="/tourn-example.png" alt="" />

        <Link to="/opros">
            <button className='startButton'>START</button>
        </Link>
      </div>
    </>
  )
}

export default App
