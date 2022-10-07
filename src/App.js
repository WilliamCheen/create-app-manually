import Counter from "./Counter";

const App = () => {
  console.log('App render.');
  return <Counter start={100} />
};

export default App;
