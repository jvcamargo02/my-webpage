import styled from "styled-components";

import BackgroundTopImage from "./BackgroundTopImage";
import Header from "./Header";
import TopHomepage from "./TopHomepage";

export default function BannerMain() {
    return (
        <Container>
            <Header />
            <TopHomepage />
            <BackgroundTopImage />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    margin: 0 auto;
    height: 100vh;
    background: rgb(0, 0, 0);
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 63%,
        rgba(27, 31, 36, 1) 100%
    );
    overflow: hidden;
`;
