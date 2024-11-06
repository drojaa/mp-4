import styled from "styled-components";
import { Weather } from "../interfaces/Weather";
//CSS styling for each card for the 7-day forcast
const WeatherCardWrapper = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    border: 0.1rem solid white;
    margin: 1vw;
    
    border-radius 1vw;
    font-size: calc(1vw + 2%);
`;
// component for each card of 7day forecast
export default function WeatherCard(props: Weather) {
    return(
        <WeatherCardWrapper className="weather-card">
            <h2>{props.datetime}</h2>
            <p>{props.conditions}</p>
            <p>{props.description}</p>
            <p>{props.tempmin}&deg; - {props.tempmax} &deg;</p>
        </WeatherCardWrapper>
    )
}