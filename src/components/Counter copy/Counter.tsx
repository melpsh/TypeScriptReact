interface ICounter{
    name: string,
    lastName: string,
    age: number
}

const Counter = ({name, lastName, age}: ICounter) => {
  return (
    <>
        <button>-</button>
        <span>{name}</span>
        <span>{lastName}</span>
        <span>{age}</span>
        <button>+</button>
    </>
  )
};

export default Counter;
