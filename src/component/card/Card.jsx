const Card = ({ card }) => {
  return (
    <div className="card md:w-full bg-base-100 shadow-xl border rounded-2xl">
      <figure className="p-4 pb-0">
        <img
          className="w-[400px] h-[200px] rounded-2xl"
          src={card.recipe_image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.recipe_name}</h2>
        <p>{card.short_description}</p>
        <div className="">
          <h2 className="text-lg font-semibold">
            Ingredients : {card.ingredients.length}
          </h2>
          {card.ingredients.map((ingredient) => {
            return (
              <ul>
                <li key={ingredient[0]}>{ingredient}</li>
              </ul>
            );
          })}
        </div>
        <div className="flex justify-between">
          <div className="">
            <i className="fa-regular fa-clock"></i>
            <span> 15 min</span>
          </div>
          <div className="">
            <i className="fa-solid fa-fire-flame-curved"></i>
            <span> 600 calories</span>
          </div>
        </div>
        <div className="card-actions">
          <a
            href=""
            className=" bg-green-400 border-0 text-white py-2 px-4 rounded-3xl font-semibold"
          >
            Want to cook
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
