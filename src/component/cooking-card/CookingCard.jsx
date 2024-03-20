import Card from "../card/Card";
const CookingCard = ({
  cook,
  cards,
  handlePreparing,
  handleCook,
  currentCook,
  timeCount,
  caloriesCount,
}) => {
  return (
    <div>
      <div className="text-center p-4 md:px-40">
        <h1 className="text-3xl md:text-4xl py-2 font-semibold">Our Recipes</h1>
        <p className="text-gray-500">
          Our Recipes is more than just a collection of instructions; it is a
          testament to our culinary journey, a canvas where flavors, traditions,
          and creativity converge to create memorable experiences. Each recipe
          encapsulates not just ingredients and methods, but stories of
          heritage, innovation, and shared moments around the table.
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
            <table className="bg-gray-100 w-full">
              <thead className="py-2 bg-stone-300">
                <tr>
                  <th>Sl</th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                  <th>Action</th>
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
                          onClick={() => handlePreparing(item, item.recipe_id)}
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
              <thead className="py-2 bg-stone-300">
                <tr>
                  <th>Sl </th>
                  <th>Name</th>
                  <th>Time</th>
                  <th>Calories</th>
                </tr>
              </thead>
              <tbody className="bg-gray-100 ">
                {currentCook.map((item, index) => (
                  <>
                    <tr className="text-gray-500">
                      <td className="p-4">{index + 1}</td>
                      <td>{item.recipe_name}</td>
                      <td>{item.preparing_time}min</td>
                      <td>{item.calories}calories</td>
                    </tr>
                  </>
                ))}
              </tbody>
              <tfoot>
                <tr className="text-gray-600 font-semibold">
                  <td></td>
                  <td></td>
                  <td>Total Time : {timeCount}min</td>
                  <td>Total Calories : {caloriesCount}calories</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookingCard;
