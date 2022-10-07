import { useState, useEffect } from 'react';

export default (props) => {
  const { start = 1 } = props;
  const [count, setCount] = useState(start);

  console.log('Counter render.');

  return (
    <div>
      <button onClick={() => setCount(old => old -= 1)}>descrse</button>
      <div>{count}</div>
      <button onClick={() => setCount(old => old += 1)}>increase</button>
    </div>
  )
}