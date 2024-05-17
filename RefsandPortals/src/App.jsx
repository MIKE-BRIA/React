import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targettime={1} />
        <TimerChallenge title="Not easy" targettime={5} />
        <TimerChallenge title="Medium" targettime={10} />
        <TimerChallenge title="Pros" targettime={15} />
      </div>
    </>
  );
}

export default App;
