const NavBar = () => {
  return (
    <div className="navbar bg-base-100 my-6 md:my-12 flex justify-between">
      <div className="dropdown md:hidden">
        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <div
          tabIndex="0"
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 gap-2 text-black bg-gray-100 rounded-lg"
        >
          <a href="">Home</a>
          <a href="">Recipes</a>
          <a href="">About</a>
          <a href="">Search</a>
        </div>
      </div>
      <span className="font-bold text-2xl">Recipe Calories</span>
      <div className="hidden lg:flex justify-between text-gray-500 font-semibold w-4/12">
        <a href="">Home</a>
        <a href="">Recipes</a>
        <a href="">About</a>
        <a href="">Search</a>
      </div>
      <div className="flex-none gap-2">
        <div className="bg-gray-100 rounded-3xl">
          <i className="fa-solid text-gray-600 fa-magnifying-glass p-4"></i>
          <input
            type="text"
            placeholder="Search"
            className="input bg-gray-100 rounded-r-3xl w-24 md:w-auto"
          />
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
