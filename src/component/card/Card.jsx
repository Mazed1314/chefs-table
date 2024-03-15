const Card = () => {
  return (
    <div className="card md:w-full bg-base-100 shadow-xl border rounded-lg">
      <figure className="p-4 pb-0">
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="">
          <h2 className="text-lg font-semibold">Shoes!</h2>
          <ul>
            <li>500g ground beef </li>
            <li>1 onion chopped</li>
            <li>2 cloves garlic minced</li>
          </ul>
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
