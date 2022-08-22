import GlobalStyle from "../globalStyles/reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import Homepage from "./Homepage";

export default function App() {
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

const Container = styled.section`
    

`;
