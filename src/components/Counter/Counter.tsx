import { ICounter } from "./type";


const Counter = ({handleNumber, number}: ICounter) => {

  const handleIncrease = () => { handleNumber(number+1) }
  const handleDecrease = () => { handleNumber(number-1) }

  return (
    <>
        <button onClick={handleIncrease}>+</button>
        <span>{number}</span>
        <button onClick={handleDecrease}>-</button>
    </>
  )
};

export default Counter;