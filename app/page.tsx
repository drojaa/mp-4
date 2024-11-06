"use client";
import styled from "styled-components";

import {useState} from "react";
import Link from "next/link";

//CSS implementation
const StyledDiv=styled.div`
  background: lightgrey;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  box-sizing: border-box;

`
export default function Home() {
  const [city, setCity] = useState("");
  return (
    <StyledDiv>
        <h1>Find the Weather in any city!</h1>
        <p>Enter a city name below to get the current weather</p>
        <input type="text" value={city} placeholder="City name" onChange={(e) => setCity(e.target.value)}></input>
        <Link href={`/${city}`}>Get Weather</Link>
    </StyledDiv>
  );
}