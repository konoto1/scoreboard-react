import { Score } from "./components/score/Score"


function App() {

  return (
    <>
    <h1>Score board</h1>
    <div className="score-board">
        <Score/>
        <div className="stats"></div>
    </div>
    </>
  );
}

export default App
