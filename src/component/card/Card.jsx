import { ToastContainer } from "react-toastify";

const Card = ({ card, handleCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = card;
  return (
    <div className="card md:w-full bg-base-100 shadow-xl border rounded-2xl">
      <figure className="p-4 pb-0">
        <img
          className="w-[400px] h-[200px] rounded-2xl"
          src={recipe_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe_name}</h2>
        <p className="text-gray-500">{short_description}</p>
        <div className="">
          <h2 className="text-lg font-semibold">
            Ingredients : {ingredients.length}
          </h2>
          {ingredients.map((ingredient, index) => {
            return (
              <ul key={index} className="text-gray-500">
                <li>{ingredient}</li>
              </ul>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="">
            <i className="fa-regular fa-clock text-gray-700"></i>
            <span> {preparing_time} min</span>
          </div>
          <div className="">
            <i className="fa-solid fa-fire-flame-curved text-gray-700"></i>
            <span> {calories} calories</span>
          </div>
        </div>
        <div className="card-actions">
          <a
            onClick={() => handleCook(card)}
            className="btn btn-sm bg-green-400 border-0 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Want to cook
          </a>
          <div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
