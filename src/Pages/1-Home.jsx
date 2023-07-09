import HeroSection from "./2-HeroSection"
import FeatureProduct from "./4-FeatureProduct";
import Services from "./4-Services";
import Trusted from "./5-Trusted";

const Home = () =>
{
    const data = {
        name: "dStore",
    }
    return(
        <>
            <HeroSection myData={data} />
            <FeatureProduct/>
            <Services/>
            <Trusted/>
        </>
    )
}

export default Home;