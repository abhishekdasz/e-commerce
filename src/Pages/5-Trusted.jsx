import styled from "styled-components"
import { FaAws } from "react-icons/fa";
import { SiFidoalliance } from "react-icons/si";
import { SiLifx } from "react-icons/si";
import { SiDesignernews } from "react-icons/si";
import { SiIntel } from "react-icons/si";
const Trusted = () =>
{
    const Wrapper = styled.section`
        .container 
        {
            height: 160px;
            width: 100%;
            background: #d4d6d8ba;
            margin-top: 5rem;
            color: #3a3939;
        }
        .container h3
        {
            font-size: 1rem;
            padding-top: 2rem;
            padding-bottom: 1rem;
            text-align: center;
        }
        .brand-section-slider
        {
            display: flex;
            gap: 5rem;
            font-size: 4rem;
            justify-content: center;
            /* padding: 10rem 0 0 0; */
        }
    `
    return(
        <>
            <Wrapper>
                <div className="container">
                    <h3> Trusted By 1000+ Companies </h3>
                    <div className="brand-section-slider">
                        <div className="slide"><FaAws/></div>
                        <div className="slide"><SiFidoalliance/></div>
                        <div className="slide"><SiLifx/></div>
                        <div className="slide"><SiDesignernews/></div>
                        <div className="slide"><SiIntel/></div>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default Trusted;