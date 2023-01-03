import styled from "styled-components";

import myProfile from "../../assets/images/ceb0e70a-41c3-4550-8cef-ed274b95521f_.png";

export default function BackgroundTopImage() {
    return (
        <Container>
            <img src={myProfile} onLoad={(e) => console.log(e)}/>
        </Container>
    );
}

const Container = styled.section`
    position: fixed;
    top: 0;
    left: 33vw;
    display: flex;
    height: 100%;
    z-index: -1;


    img {
        height: 80%;
        align-self: flex-end;
    }
    @media (max-width: 500px) {
        left: 10vw;
    }
`;
