import React from 'react';

function Button(props) {
  return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
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
      <Button onClickFunction={incrementCounter} />
      <Display counter={counter} />
    </>
  );
}


export default MyCounter;
