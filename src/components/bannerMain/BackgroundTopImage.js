import styled from "styled-components";

import myProfile from "../../assets/images/ceb0e70a-41c3-4550-8cef-ed274b95521f_.png";

export default function BackgroundTopImage() {
    return (
        <Container>
            <img src={myProfile} />
        </Container>
    );
}

const Container = styled.section`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: hidden;
    z-index: -1;

    img {
        height: 80%;
        align-self: flex-end;
    }
    @media (min-width: 800px) {
        width: 96%;
    }
`;
