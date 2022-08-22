import styled from "styled-components";
import Lottie from "react-lottie";

import animationDataHi from "../../assets/lottieFile/lf30_editor_3dsiacnp.json";
import animationDataAbout from "../../assets/lottieFile/lf30_editor_elktbstn.json";

export default function TopHomepage() {
    const hiDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataHi,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const aboutDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataAbout,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <Container>
            <LeftContent>
                <hr />
                <main>
                    <h1>
                        Hi there{" "}
                        <Lottie
                            options={hiDefaultOptions}
                            height={60}
                            width={65}
                        />{" "}
                        <br />
                        <span>I'm João Camargo,</span>
                        <br />a Software Engineer
                    </h1>
                </main>
            </LeftContent>
            <RightContent>
                <h2>
                    ABOUT ME{" "}
                    <Lottie
                        options={aboutDefaultOptions}
                        height={30}
                        width={35}
                    />{" "}
                </h2>
                <br></br>
                <p>
                    Sou o João, graduando em Engenharia de Software e
                    desenvolvedor web. <br /> <br />
                    {/*                    Aos 18 anos fundei
                    uma empresa, o que me
                    fez adquirir um grande interesse na área de desenvolvimento
                    de software, incentivando aos 19 anos meus estudos na área de
                    TI, com cursos livres. <br/> <br/>
                    Com isso, adquiri conhecimento em
                    lógica de programação, programação em Python, programação
                    com Java, raciocínio lógico e hardware.  */}
                </p>
                <button>LEARN MORE ⇨</button>
                <hr></hr>
            </RightContent>
        </Container>
    );
}

const Container = styled.section`
    max-width: 1100px;
    margin: 0 auto;
    box-sizing: border-box;
    padding-top: 65px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 830px) {
        flex-direction: column;
        height: 80%;
        gap: 20px;
    }
`;

const LeftContent = styled.section`
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    color: #fff;
    max-width: 50%;
    margin-top: 75px;

    main {
        display: flex;
        font-size: 5vh;
        line-height: 1.132em;
        font-weight: 700;
        align-items: center;
        justify-content: start;

        span {
            font-size: 6vh;
            line-height: 1.5em;
        }

        div {
            margin: 0 5px !important;
            display: inline-block;
        }
    }
    hr {
        display: flex;
        height: 8px;
        background-color: #fff;
        max-width: 118px;
        margin: 0 0;
        border-radius: 10px;
        border: none;
    }

    @media (max-width: 800px) {
        margin-top: 0;
        max-width: 80%;
    }
`;

const RightContent = styled.section`
    max-width: 50%;
    color: #fff;
    font-size: 2.5vh;
    font-weight: 400;
    width: 243px;
    opacity: 0.8;

    h2 {
        line-height: 30px;
        display: flex;
    }

    div {
        margin: 0 5px !important;
        display: inline-block;
    }

    p {
        box-sizing: border-box;
        padding: 10px;
    }
    button {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #fff;
        color: #fff;
        margin-bottom: 40px;
        margin-left: 80px;
    }
`;
