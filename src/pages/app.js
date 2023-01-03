import GlobalStyle from "../globalStyles/reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Homepage from "./Homepage";
import React from "react";

export default class App extends React.Component {

   

    componentDidMount() {
        this.getLocation();
        this.getLanguages()
    }
    
    getLanguages () {
     let language = navigator.language;  
     console.log(language)
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (posData) =>
                console.log(posData)/* .then((res) =>
                    this.setState({
                        temp: Math.round(res.temp),
                        weather: res.weather,
                    })
                ),
            (error) => alert(error),
            { timeout: 10000 } */
        );
    }

    render() {
        return (
            <Container>
                <GlobalStyle />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                    </Routes>
                </BrowserRouter>
            </Container>
        );
    }
}

const Container = styled.section``;
/* export default function App() {
    
    
    componentDidMount((e) => {
        console.log(e)
    })
    return (
>
    );
}


 */
