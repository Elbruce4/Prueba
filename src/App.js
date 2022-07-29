import Header from "./components/HeaderHome";
import TitleAndFilter from "./components/TitleAndFilter";
import Cars from "./components/CarsHome/Cars";

function Home() {
  return (
    <div>
      <Header></Header>
      <TitleAndFilter></TitleAndFilter>
      <Cars></Cars>
    </div>
  );
}

export default Home;
