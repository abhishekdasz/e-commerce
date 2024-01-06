import styled from "styled-components";
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { SiBitcoinsv } from "react-icons/si";

const Services = () =>
{
    const Wrapper = styled.section`
        .container
        {
            max-width: 60rem;
            margin: 0 auto;
        }
        .grid
        {
            display: grid;
            gap: 3rem; 
        }
        .grid-three-column
        {
            grid-template-columns: repeat(3, 1fr);
        }
        .icon
        {
            background: #fff;
            border-radius: 50%;
            padding: 15px;
            font-size: 60px;
            color: blue;
        }
        .services-1, .services-2, .services-3
        {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 20px;
        }
        .services-1, .services-3
        {
            background: #946afc42;
            border-radius: 10px;
        }
        .services-2{
            /* border: 2px solid black; */
        }
        .services-row-2
        {
            background: #946afc42;
            display: flex;
            border-radius: 10px;
            width: 285px;
            align-items: center;
            padding: 15px;
        }

        @media(max-width:780px)
        {
            .container
            {
                display: flex;
                justify-content: center;
                align-items: center;
                padding-bottom: 0;
            }
            .grid-three-column
            {
                grid-template-columns: repeat(1, 1fr);
                gap: 1rem;
            }  
            .services-row-2
            {
                flex-direction: column;
            }
            .services-1, .services-3
            {
                padding: 15px 0;
            }
        }
    `
    return(
        <>
        <Wrapper>
            <div className="container">
                <div className="grid grid-three-column">
                    
                    <div className="services-1">
                        <div>
                            <TbTruckDelivery className="icon" / >
                            <h3> Super Fast & Free Delivery </h3>
                        </div>
                    </div>

                    <div className="services-2">
                        <div className="services-row-2">
                            <MdSecurity className="icon" / >
                            <h3> Non-contact Delivery </h3>
                        </div>
                        <div className="services-row-2">
                            <SiBitcoinsv className="icon" / >
                            <h3> Cryptos Also Accepted </h3>
                        </div>
                    </div>

                    <div className="services-3">
                        <div>
                            <GiReceiveMoney className="icon" / >
                            <h3> 30-Days Easy Return </h3>
                        </div>
                    </div>

                </div>
            </div>
        </Wrapper>    
        </>
    )
}

export default Services;