import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import ShowLaps from './components/Lap Counter/Show Laps';
import Button from './components/Form/Button';
import ShowTime from './components/Lap Counter/Show Time';
import { primaryColor, white } from './configs/colors';
import Stack from './components/Layout/Stack';

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

  // Styles
  const buttonProps = {
    width: '6.4rem',
    height: '3.6rem',
    fontSize: '1.4rem',
    fontWeight: 500,
    background: primaryColor,
    color: white,
    border: 'none',
  };

  return (
    <div className="App">
      <GlobalStyles />
      <ShowLaps laps={numLaps} />
      {numLaps > 0 && <ShowTime time={Math.round(time / numLaps)} />}
      <Stack gap="0.8rem" padding="0.8rem">
        <Button onClick={decrement} {...buttonProps}>
          -
        </Button>
        <Button onClick={increment} {...buttonProps}>
          +
        </Button>
      </Stack>
      <Stack gap="0.8rem" padding="0.8rem">
        <Button onClick={toggleRunning} {...buttonProps}>
          {running ? 'Pause' : 'Start'}
        </Button>
        <Button onClick={reset} {...buttonProps}>
          Restart
        </Button>
      </Stack>
    </div>
  );
}

export default App;
