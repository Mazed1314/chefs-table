import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./component/navBar/NavBar";
import Hero from "./component/hero/Hero";
import Card from "./component/card/Card";
// import CookingCard from "./component/cooking-card/CookingCard";
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
        {/* --------------------------Our Recipes--------------------- */}
        <div className="">
          <div className="text-center p-4 md:px-40">
            <h1 className="text-3xl md:text-4xl py-2 font-semibold">
              Our Recipes
            </h1>
            <p className="text-gray-500">
              Our Recipes is more than just a collection of instructions; it's a
              testament to our culinary journey, a canvas where flavors,
              traditions, and creativity converge to create memorable
              experiences. Each recipe encapsulates not just ingredients and
              methods, but stories of heritage, innovation, and shared moments
              around the table.
            </p>
          </div>
          <div className="md:p-2 md:flex">
            <div className="grid grids-col-1 md:grid-cols-2 gap-5 md:w-7/12 my-2">
              {cards.map((card) => {
                return (
                  <Card
                    key={card.recipe_id}
                    card={card}
                    handleCook={handleCook}
                  ></Card>
                );
              })}
            </div>
            <div className="want-to-cook-container md:w-5/12">
              <div className="border rounded-2xl md:mx-4 p-4 my-2">
                <h1 className="text-2xl font-bold text-center my-3">
                  Want to cook: {cook.length}
                  <div className="text-center w-full flex justify-center py-4">
                    <hr className="h-1 w-2/3" />
                  </div>
                </h1>
                <table className="w-full">
                  <thead className="py-2">
                    <tr>
                      <th colSpan={2}>Name</th>
                      <th>Time</th>
                      <th>Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cook.map((item, index) => (
                      <>
                        <tr className="text-gray-500">
                          <td className="px-4">{index + 1}</td>
                          <td>{item.recipe_name}</td>
                          <td>{item.preparing_time} min</td>
                          <td>{item.calories} calories</td>
                          <td>
                            <a
                              onClick={() =>
                                handlePreparing(item, item.recipe_id)
                              }
                              className="btn btn-sm bg-green-400 rounded-2xl py-2 px-4 text-white font-semibold"
                            >
                              Preparing
                            </a>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <h1 className="text-2xl font-bold text-center my-3">
                  Currently cooking: {currentCook.length}
                  <div className="text-center w-full flex justify-center py-4">
                    <hr className="h-1 w-2/3" />
                  </div>
                </h1>
                <table className="w-full">
                  <tr>
                    <th colSpan={2}>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                  {currentCook.map((item, index) => (
                    <>
                      <tr className="text-gray-500">
                        <td className="p-4">{index + 1}</td>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time} min</td>
                        <td>{item.calories} calories</td>
                      </tr>
                    </>
                  ))}
                  <tr className="text-gray-600 font-semibold">
                    <td></td>
                    <td></td>
                    <td>Total Time : {timeCount} min</td>
                    <td>Total Calories : {caloriesCount} calories</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
