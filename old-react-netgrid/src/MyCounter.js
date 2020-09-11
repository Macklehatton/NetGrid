import React from 'react';

import { Button } from '@material-ui/core';

function CountButton(props) {
  return (
    <Button
      color="primary"
      onClick={props.onClickFunction}
    >
      +1
    </Button>
  )
}

function Display(props) {
  return (
    <div>
      {props.counter}
    </div>
  )
}

function MyCounter() {
  const [counter, setCounter] = React.useState(0);
  const incrementCounter = () => setCounter(counter + 1);

  return (
    <>
      <CountButton onClickFunction={incrementCounter} />
      <Display counter={counter} />
    </>
  );
}


export default MyCounter;
