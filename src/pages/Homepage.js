import styled from "styled-components";

import BannerMain from "../components/bannerMain/BannerMain";

export default function Homepage() {
    return (
        <Container>
            <BannerMain />
{/*             <Teste>
                oi
            </Teste> */}
        </Container>
    );
}

const Container = styled.div`
/*         position: absolute; */
        box-sizing: border-box;
        padding: 0 20px;
`;

const Teste = styled.div`

    height: 300px;
    background-color: red;

`