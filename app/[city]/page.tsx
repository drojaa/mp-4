"use client"

import { useParams } from "next/navigation"
import useSWR from "swr"
import WeatherCard from "../components/weatherCard"
import styled from "styled-components"
import { Weather } from "../interfaces/Weather"

// The CSS styling for the city page
const WeatherContentWrapper = styled.main`
        max-width: 80vw;
        margin: auto;
        background-color: silver;
        font-size: calc(1vw + 2%);
`
const CityName = styled.h1`
    color: grey;
    margin: auto;
    max-width: max-content;
    box-sizing: border-box;
   font-size: calc(3vw + 2%);
`
const WeatherCardsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    max-width: max-content;
    margin: 0;
    box-sizing: border-box;
    font-size: calc(1vw + 2%);
`
// component for citypage
export default function CityPage(){
    const params = useParams()

    const {data, error} = useSWR(`/api/getWeatherData?city=${params.city}`, (url) => fetch(url).then((res) => res.json()))
    //errormessages 
    if(error) return <div>Failed to load</div>
    if(!data) return <div>Loading...</div>

    const days = data?.days || []

    return (
        <WeatherContentWrapper>
            <CityName>{params.city}</CityName>
            <WeatherCardsContainer>
                {
                    days.map((weather: Weather, i: number) => 
                    (
                        <WeatherCard
                            key={i}
                            datetime={weather.datetime}
                            conditions={weather.conditions}
                            description={weather.description}
                            tempmin={weather.tempmin}
                            tempmax={weather.tempmax}
                        />
                    ))
                }
            </WeatherCardsContainer>
        </WeatherContentWrapper>
    )
}