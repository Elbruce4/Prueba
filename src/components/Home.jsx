import Header from "./HeaderHome";
import TitleAndFilter from "./TitleAndFilter";
import Cars from "./CarsHome/Cars";
import Footer from "./Footer"

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