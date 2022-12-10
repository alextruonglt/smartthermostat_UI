import './App.css';

function App() {
  return (
    <div className='hero'>
        <div className="temp">
          <h1>Current Temperature</h1>
          <div className='actual_temp'>
            <div className="circle">
              <p>83</p>
            </div>
          </div>
        </div>
        <div className="fan">
          <h2>Increase Temperature</h2>
          <div className="btn_container">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        <div className="fan">
          <h2>Increase Fan</h2>
          <div className="btn_container">
            <button>-</button>
            <button>+</button>
          </div>
        </div>
        
    </div>
  )
}

export default App;
