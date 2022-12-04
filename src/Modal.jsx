import { useState } from "react";

export const Modal = ({ handleCloseModal, handeAddToCart }) => {
  const [item, setItem] = useState("");

  const handleChangeItem = (event) => {
    setItem(event.target.value);
  };

  return (
    <div
      style={{
        border: "solid 1px red",
        borderRadius: "15px",
        width: "500px",
        height: "fit-content",
        position: "absolute",
        left: "30%",
        top: "30%",
        background: "lightgrey",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
      }}
    >
      <h1>I am Modal</h1>

      <p>content</p>
      <input value={item} onChange={handleChangeItem} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem",
        }}
      >
        <button onClick={handleCloseModal} style={{ width: "100px" }}>
          Close modal
        </button>
        <button style={{ width: "100px" }} onClick={() => handeAddToCart(item)}>
          add to cart
        </button>
      </div>
    </div>
  );
};
