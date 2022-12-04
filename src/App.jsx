import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Modal } from "./Modal";

const initialItems = [
  {
    id: uuidv4(),
    name: "Cabbage",
  },
  {
    id: uuidv4(),
    name: "PS5",
  },
  {
    id: uuidv4(),
    name: "Book clean Code",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [items, setItems] = useState(initialItems);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleIncreaseByAmount = (amount) => {
    setCount((prevCount) => prevCount + amount);
  };

  const handleTriggerModal = () => {
    setModalOpen((prevModal) => !prevModal);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handeAddToCart = (item) => {
    if (!item) return;

    const newItem = { id: uuidv4(), name: item };
    setItems((prevItems) => [...prevItems, newItem]);
    handleCloseModal();
  };

  const handleItemChecked = (id) => {
    //no no methods: push, pop, splice, shift, unshift ,etc. => direct changes on an array;
    //yes yes methods: map, forEach, filter, find, slice, reduce, => creating clones of an array;

    //first variant
    // const changedItems = items.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, isDone: !item.isDone }; //undefined
    //   } else return item;
    // });

    // setItems(changedItems);

    //second variant
    const oldItem = items.filter((el) => el.id === id)[0];

    const itemIndex = items.findIndex((el) => el.id === id);
    const newItem = { ...oldItem, isDone: !oldItem.isDone };

    setItems([
      ...items.slice(0, itemIndex),
      newItem,
      ...items.slice(itemIndex + 1, items.length),
    ]);
  };

  console.log(items);

  return (
    <div
      className="App"
      style={{ position: "relative", height: "100vh", width: "100vw" }}
    >
      {isModalOpen && (
        <Modal
          handleCloseModal={handleCloseModal}
          handeAddToCart={handeAddToCart}
        />
      )}
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={handleReset}>reset</button>
      <button onClick={() => handleIncreaseByAmount(5)}>by amount</button>
      <div>count is {count}</div>

      <button onClick={handleTriggerModal}>Trigger Modal</button>

      <div className="cart">
        cart elements:
        <ul className="items">
          {items.map((item) => (
            <li
              key={item.id}
              style={{ textDecoration: item.isDone ? "line-through" : "" }}
              onClick={() => handleItemChecked(item.id)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// componentDidMount(){
// console.log(1)
// }

// useEffect(()=>{console.log(1)},[])

// componentDidUpdate(){
//   console.log(2)
// }

// useEffect(()=>{console.log(2)})

// componentDidUpdate(prevProps,prevState){
//     if(prevState.item!==item){
//         console.log(3)
//     }
// }

// useEffect(()=>{console.log(3)},[item])

// componentWillUnmount(){
// console.log(4)
// }

// useEffect(()=>{

//   return ()=>{
//     console.log(4)
//   }
// })
