import "./App.css";
import NavBar from "./component/navBar/NavBar";
import Hero from "./component/hero/Hero";
import Card from "./component/card/Card";

function App() {
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
          <div className="md:p-2 ">
            <div className="grid grids-col-1 md:grid-cols-2 gap-5 md:w-7/12">
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
              <Card></Card>
            </div>
            <div className="want-to-cook-container w-5/12">
              <div className="border rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
