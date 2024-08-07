

function App() {

  return (
    <>
    <h1>Score board</h1>
    <div className="score-board">
        <div className="score">
            <div>Home</div>
            <div>0</div>
            <div>:</div>
            <div>0</div>
            <div>Guest</div>
        </div>
        <div className="btn">
            <div className="home">
                <button>+1</button>
                <button>+2</button>
                <button>+3</button>
            </div>
            <div className="guest">
                <button>+1</button>
                <button>+2</button>
                <button>+3</button>
            </div>
        </div>
        <div className="stats"></div>
    </div>
    </>
  )

  
}

export default App
