import data from "../data/data.json";
import Card from "./Card";

function CardList({ handleAddCart, filter1 }) {
  
  return (
    <>
      <div className="bodyCard">
        {data
          .filter((info) => info.title.includes(filter1))
          .map((info) => (
            <Card
              key={info.id}
              info={info}
              handleAddCart={handleAddCart}
              
            />
          ))}
      </div>
    </>
  );
}

export default CardList;
