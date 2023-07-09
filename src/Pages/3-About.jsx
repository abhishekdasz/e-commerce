// import { useContext } from "react";
// import { AContext } from "../Context/PContext";
import { useProductContext } from "../Context/productContext";
import HeroSection from "./2-HeroSection";

const About = () =>
{
    const {myName} = useProductContext();
    // const {names} = useContext(AContext);
    // const {game} = useContext(AContext);

    const data = {
        name: "d Ecommerce"
    }
    return(
        <>
            {/* {game} */}
            {myName}
            <HeroSection myData={data}/>
        </>
    )
}

export default About;