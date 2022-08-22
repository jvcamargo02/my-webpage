import styled from "styled-components";

import BannerMain from "../components/bannerMain/BannerMain";

export default function Homepage() {
    return (
        <Container>
            <BannerMain />
{/*             <Teste>
                oi
            </Teste>  */}
        </Container>
    );
}

const Container = styled.div`
/*         position: absolute; */

`;

const Teste = styled.div`

    height: 100vh;
    background-color: red;

`