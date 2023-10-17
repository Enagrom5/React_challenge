import "./App.css";
import CardList from "./component/CardList";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Filters from "./component/Filters";
import { useState } from "react";
import useSound from "use-sound";
import sound from "../public/images/sound.mp3";


function App() {
  const [play] = useSound(sound, {
    volume: 0.2,
  });

  let [addCart, setAddCart] = useState(0);

  let [sum, setSum] = useState(0);



  const handleAddCart = (price,cart,setCart) => ( 
    setAddCart(addCart+cart ),
    setSum((sum += price*cart )),
    play(),
    setCart(0)
  );

  let [filter1, setFilter1] = useState("");
  
  return (
    <>
      <Navbar />
      <Filters
        className="Filters"
        addCart={addCart}
        setFilter1={setFilter1}
        sum={sum}
      />
      <CardList
        handleAddCart={handleAddCart}
        filter1={filter1}
        
      />
      <Footer></Footer>
    </>
  );
}

export default App;
