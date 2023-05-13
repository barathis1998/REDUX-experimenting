import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { counterActions } from '../store/index.js';


const Counter = () => {

  const dispatch =  useDispatch();
  const counter = useSelector(state =>state.counter.counter);
  const toggle = useSelector(state =>state.counter.toggle);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const incrementHandler = ()=>{
   dispatch(counterActions.increment());
  }

  const decrementHandler = ()=>{
    dispatch(counterActions.decrement());
  }

  const incrementBy5 = ()=>{
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementBy5}>Increment by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
