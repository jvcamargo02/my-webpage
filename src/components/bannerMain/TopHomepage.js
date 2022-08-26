import styled from "styled-components";
import Lottie from "react-lottie";
import { FaReact, FaLinkedinIn } from "react-icons/fa";
import { GrNode, GrGithub, GrMail, GrInstagram } from "react-icons/gr";
import { SiTsnode, SiLinux, SiFacebook } from "react-icons/si";

import animationDataHi from "../../assets/lottieFile/lf30_editor_3dsiacnp.json";
import animationDataAbout from "../../assets/lottieFile/lf30_editor_nix0ubzs.json";
import animationDataDevTools from "../../assets/lottieFile/lf30_editor_2yk9kden.json";
import animationDataFollow from "../../assets/lottieFile/lf30_editor_2xauaafb.json";
import animationDataScroll from "../../assets/lottieFile/lf30_editor_7csecqgc.json";

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
    const devToolsDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataDevTools,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const followDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataFollow,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const scrollDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataScroll,
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
                        Hi there
                        <Lottie
                            options={hiDefaultOptions}
                            height={60}
                            width={65}
                        />
                        <br />
                        <span>I'm João Camargo,</span>
                        <br />a Software Engineer
                    </h1>
                </main>
                <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg>
            </LeftContent>
            <RightContent>
                <RightBox>
                    <h2>
                        ABOUT ME
                        <Lottie
                            options={aboutDefaultOptions}
                            height={30}
                            width={35}
                        />
                    </h2>
                    <br></br>
                    <p>
                        Graduando em Engenharia de Software e desenvolvedor web,
                        com mais de 25 projetos realizados... <br /> <br />
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
                </RightBox>
                <RightBox>
                    <h2>
                        LANGUAGES & TOOLS
                        <Lottie
                            options={devToolsDefaultOptions}
                            height={30}
                            width={35}
                        />
                    </h2>
                    <br></br>
                    <ul>
                        <ToolBox>
                            <FaReact />
                        </ToolBox>{" "}
                        <ToolBox>
                            <SiTsnode />
                        </ToolBox>
                        <ToolBox>
                            <GrNode />
                        </ToolBox>
                        <ToolBox>
                            <SiLinux />
                        </ToolBox>
                        <ToolBox id="button">
                            ⇨<br />
                            SEE ALL
                        </ToolBox>
                    </ul>

                    <hr></hr>
                </RightBox>
                <RightBox type={"follow"}>
                    <h2>
                        FOLLOW ME
                        <Lottie
                            options={followDefaultOptions}
                            height={20}
                            width={25}
                        />
                    </h2>
                    <br></br>
                    <ul>
                        <Social>
                            <GrGithub />
                        </Social>
                        <Social>
                            <FaLinkedinIn />
                        </Social>{" "}
                        <Social>
                            <SiFacebook />
                        </Social>{" "}
                        <Social>
                            <GrMail />
                        </Social>{" "}
                        <Social>
                            <GrInstagram />
                        </Social>
                    </ul>
                </RightBox>
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

    @media (max-width: 1150px) {
        flex-direction: column;
        height: 80%;
        gap: 8vh;
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
        font-size: 4.5vh;
        line-height: 1.132em;
        font-weight: 700;
        align-items: center;
        justify-content: start;
        font-family: "prima-sans-bold";

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

    .arrows {
        width: 60px;
        height: 72px;
        position: fixed;
    left: 35%;
    bottom: 20px;
    }

    .arrows path {
        stroke: #FFF;
        fill: transparent;
        stroke-width: 1px;
        animation: arrow 2s infinite;
        -webkit-animation: arrow 2s infinite;
    }

    @keyframes arrow {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    @-webkit-keyframes arrow /*Safari and Chrome*/ {
        0% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
        80% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }

    .arrows path.a1 {
        animation-delay: -1s;
        -webkit-animation-delay: -1s; /* Safari 和 Chrome */
    }

    .arrows path.a2 {
        animation-delay: -0.5s;
        -webkit-animation-delay: -0.5s; /* Safari 和 Chrome */
    }

    .arrows path.a3 {
        animation-delay: 0s;
        -webkit-animation-delay: 0s; /* Safari 和 Chrome */
    }

    @media (max-width: 1150px) {
        
        .arrows {
            display: none;
        }
    }

    @media (max-width: 800px) {
        margin-top: 0;
        max-width: 80%;
    }
`;

const RightBox = styled.section`
    color: #fff;
    font-size: 1.8vh;
    font-weight: 400;

    opacity: 0.8;
    display: flex;
    flex-direction: column;

    h2 {
        line-height: 30px;
        display: flex;
        font-weight: 700;
        align-items: center;
    }

    div {
        margin: 0 5px !important;
        display: inline-block;
        opacity: ${(props) => (props.type === "follow" ? 0.5 : 1)};
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
        margin-bottom: 20px;
        margin-left: auto;
        font-weight: 700;
    }

    hr {
        width: 100%;
    }

    ul {
        display: flex;
        gap: 5px;
        margin-bottom: 20px;

        #button {
            font-size: 12px;
            cursor: pointer;
        }

        
    }
    @media (max-width: 1150px) {
    }
`;

const RightContent = styled.div`
    max-width: 250px;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 5vh;

    @media (max-width: 1150px) {
        max-width: 400px;
        width: 65%;

        section {
            display: none;
        }

        section:first-child{
            display: initial; !important
        }
    }
`;
const ToolBox = styled.li`
    height: 50px;
    width: 50px;
    background-color: #fff;
    opacity: 0.2;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    text-align: center;
    font-weight: 700;
    border-radius: 5px;
    flex-direction: column;
    color: var(--background-color);
    font-size: 35px;
`;

const Social = styled.li`
    height: 30px;
    width: 30px;
    background-color: #fff;
    opacity: 0.2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: var(--background-color);
    font-size: 22px;
    cursor: pointer;
`;
