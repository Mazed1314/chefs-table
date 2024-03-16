import "./App.css";
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "./component/navBar/NavBar";
import Hero from "./component/hero/Hero";
import Card from "./component/card/Card";
// import CookingCard from "./component/cooking-card/CookingCard";

function App() {
  const [cards, setCards] = useState([]);
  const [cook, setCook] = useState([]);
  const [cookCount, setCookCount] = useState(0);
  const [currentCook, setCurrentCook] = useState([]);

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
      setCookCount(cookCount + 1);
    } else {
      alert("already exist");
    }
  };
  // console.log(cookCount);

  const handlePreparing = (i, id) => {
    // console.log(id);
    const newCook = cook.filter((item) => item.recipe_id != id);
    setCook(newCook);

    setCurrentCook([...currentCook, i]);
  };
  console.log(currentCook);

  return (
    <>
      <div className="m-4 md:mx-20 my-4">
        <NavBar></NavBar>
        <Hero></Hero>
        {/* Our Recipes */}
        <div className="">
          <div className="text-center p-4 md:px-40">
            <h1 className="text-3xl md:text-4xl py-2 font-semibold">
              Our Recipes
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
              vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
              elementum mauris aenean neque.
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
                  Want to cook:{cook.length}
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
                        <tr>
                          <td className="px-4">{index + 1}</td>
                          <td>{item.recipe_name}</td>
                          <td>{item.preparing_time} min</td>
                          <td>{item.calories} calories</td>
                          <td>
                            <a
                              onClick={() =>
                                handlePreparing(item, item.recipe_id)
                              }
                              className="btn bg-green-400 rounded-full py-2 px-4 text-white font-semibold"
                            >
                              <i className="fa-solid fa-utensils"></i>
                            </a>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
                <h1 className="text-2xl font-bold text-center my-3">
                  Currently cooking:{currentCook.length}
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
                      <tr>
                        <td className="p-4">{index + 1}</td>
                        <td>{item.recipe_name}</td>
                        <td>{item.preparing_time} min</td>
                        <td>{item.calories} calories</td>
                      </tr>
                    </>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>Total Time : min</td>
                    <td>Total Calories : calories</td>
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
