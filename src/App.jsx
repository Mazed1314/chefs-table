import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./component/navBar/NavBar";
import Hero from "./component/hero/Hero";
import CookingCard from "./component/cooking-card/CookingCard";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () =>
    toast.warn("You already add this item !", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const [cards, setCards] = useState([]);
  const [cook, setCook] = useState([]);
  const [currentCook, setCurrentCook] = useState([]);
  const [timeCount, setTimeCount] = useState(0);
  const [caloriesCount, setCaloriesCount] = useState(0);

  useEffect(() => {
    fetch("myData.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCards(data);
      });
  }, []);
  // console.log(cards);

  const handleCook = (e) => {
    const isExist = cook.find((item) => item.recipe_id == e.recipe_id);
    if (!isExist) {
      setCook([...cook, e]);
    } else {
      // alert("already exist");
      notify();
    }
  };

  const handlePreparing = (i, id) => {
    // console.log(id);
    const newCook = cook.filter((item) => item.recipe_id != id);
    setCook(newCook);
    setCurrentCook([...currentCook, i]);
    const initialValueOfTime = parseInt(i.preparing_time);
    const initialValueOfCalories = parseInt(i.calories);

    setTimeCount(parseInt(timeCount) + initialValueOfTime);
    setCaloriesCount(parseInt(caloriesCount) + initialValueOfCalories);
  };
  return (
    <>
      <div className="m-4 md:mx-20 my-4">
        <NavBar></NavBar>
        <Hero></Hero>
        <CookingCard
          cook={cook}
          handlePreparing={handlePreparing}
          cards={cards}
          handleCook={handleCook}
          currentCook={currentCook}
          timeCount={timeCount}
          caloriesCount={caloriesCount}
        ></CookingCard>
      </div>
    </>
  );
}

export default App;
