import Header from "./HeaderHome";
import Cars from "./CarsHome/Cars";
import Footer from "./Footer";
import TitleAndFilter from "./TitleAndFilter";

const Home = () => {

    var isHome = true;

    return (
        <div>
            <Header isHome={isHome}></Header>
            <TitleAndFilter></TitleAndFilter>
            <Cars></Cars>
            <Footer></Footer>
        </div>
    )
}

export default Home;