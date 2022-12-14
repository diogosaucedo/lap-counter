import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import ShowLaps from './components/Lap Counter/Show Laps';
import Button from './components/Form/Button';
import ShowTime from './components/Lap Counter/Show Time';
import { Divider } from './components/Data Display/Divider/styles';

function App() {
  const [numLaps, setNumLaps] = React.useState(0);
  const [running, setRunning] = React.useState(false);
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    let timer: ReturnType<typeof setInterval>;

    if (running) {
      timer = setInterval(() => {
        setTime((old) => old + 1);
      }, 1000);
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [running]);

  const toggleRunning = () => {
    setRunning(!running);
  };

  const increment = () => {
    setNumLaps(numLaps + 1);
  };

  const decrement = () => {
    if (numLaps > 0) {
      setNumLaps(numLaps - 1);
    }
  };

  const reset = () => {
    setNumLaps(0);
    setTime(0);
  };

  return (
    <div className="App">
      <GlobalStyles />
      <ShowLaps laps={numLaps} />
      <Button onClick={decrement} width="32px" height="16px">
        -
      </Button>
      <Button onClick={increment} width="32px" height="16px">
        +
      </Button>
      {numLaps > 0 && <ShowTime time={Math.round(time / numLaps)} />}
      <Divider />
      <Button onClick={toggleRunning}>{running ? 'Pause' : 'Start'}</Button>
      <Button onClick={reset}>Restart</Button>
    </div>
  );
}

export default App;
