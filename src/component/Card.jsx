import { useState } from "react";

const cardBeauty = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-around",
  borderRadius: "10px",
  backgroundColor: "#6E8898",
  color: "white",
  margin: "1rem",
  width: "18rem",
  padding: "1.5rem",
  boxShadow:"4px 4px 9px 1px black"
};

function Card({ info, handleAddCart }) {
  let [cart, setCart] = useState(0);

  const cartUp = () => setCart((cart += 1));
  const cartDown = () => setCart((cart -= 1));

  return (
    <>
      <div style={cardBeauty}>
        <img
          src={info.image}
          style={{ height: "12rem", width: "18rem", borderRadius: "10px" ,boxShadow:"4px 4px 9px 1px lightgrey"}}
        />
        <h2>{info.title}</h2>
        <div>
          <p>{info.description}</p>
          <p> {info.price} euros</p>
          <p> {info.category}</p>
        </div>
        <div className="buttons">
          <button className="add" onClick={() => cartUp()}>
            +
          </button>
          <h3>{cart}</h3>
          <button className="add" onClick={() => cartDown()}>
            -
          </button>
          
          <button className="add" onClick={() => handleAddCart(info.price, cart, setCart)}>
            Ajoutez au panier
          </button>
        </div>
      </div>
    </>
  );
}
export default Card;
