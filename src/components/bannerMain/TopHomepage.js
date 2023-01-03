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
        loop: false,
        autoplay: true,
        animationData: animationDataAbout,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const devToolsDefaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationDataDevTools,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const followDefaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationDataFollow,
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
                <p>Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis.</p>
{/*                 <svg class="arrows">
                    <path class="a1" d="M0 0 L30 32 L60 0"></path>
                    <path class="a2" d="M0 20 L30 52 L60 20"></path>
                    <path class="a3" d="M0 40 L30 72 L60 40"></path>
                </svg> */}
            </LeftContent>
            <RightContent>
                <RightBox>
                    <h2>
                        ABOUT ME
                    
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
                    </h2>
                    <br></br>
                    <ul>
                        <ToolBox>
                            <FaReact />
                            <span>React</span>
                        </ToolBox>{" "}
                        <ToolBox>
                            <SiTsnode />
                            <span>TypeScript</span>
                        </ToolBox>
                        <ToolBox>
                            <GrNode />
                            <span>Node</span>
                        </ToolBox>
                        <ToolBox>
                            <SiLinux />
                            <span>Linux</span>
                        </ToolBox>
                    </ul>
                    <button>SEE ALL ⇨</button>
                    <hr></hr>
                </RightBox>
                <RightBox type={"follow"}>
                    <h2>
                        FOLLOW ME ON

                    </h2>
                    <br></br>
                    <ul>
                        <Social>
                            <GrGithub />
                        </Social>
                        <Social>
                            <FaLinkedinIn />
                        </Social>{" "}
{/*                         <Social>
                            <SiFacebook />
                        </Social>{" "} */}
                        <Social>
                            <GrMail />
                        </Social>{" "}
{/*                         <Social>
                            <GrInstagram />
                        </Social> */}
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

    p{  
        margin-top: 20px;
        max-width: 400px;
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
    align-items: center;
    opacity: 0.8;
    display: flex;
    flex-direction: column;

    h2 {
        line-height: 30px;
        display: flex;
        font-weight: 700;
        align-items: center;
        width: 100%;
        margin-right: ${(props) => (props.type === "follow" ? 0 : " auto")};
        justify-content: ${(props) => (props.type === "follow" ? "center" : "flex-start")}
    }

/*     div {
        margin: 0 5px !important;
        display: inline-block;
        opacity: ${(props) => (props.type === "follow" ? 0.5 : 1)};
        justify-content: ${(props) => (props.type === "follow" ? "center" : "flex-s")};
    } */

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
        
    }

    button:hover{
        background-color: #FFF;
  color: black;
  transition: 0.4s;
  transform: translate3d(6px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;
    }

    hr {
        width: 100%;
    }

    ul {
        display: flex;
        gap: 5px;
        margin-bottom: 20px;
    }


`;

const RightContent = styled.div`
    max-width: 250px;
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 3vh;

    @media (max-width: 1150px) {
        max-width: 400px;
        width: 65%;

        section {
            display: none;
        }

        section:first-child{
            display: initial;
        }
    }
`;
const ToolBox = styled.li`
    opacity: 0.3;
    display: flex;
    align-items: center;
    text-align: center;
    font-weight: 600;
    flex-direction: column;
    color: #FFF;
    font-size: 35px;
    cursor: pointer;    
    margin-left: 10px;

    span{ 
        font-size: 13px;

    }
    &:hover{
        color: #FFF;
        opacity: 0.8;
        transform: scale(1.1);
    }
`;

const Social = styled.li`
    height: 30px;
    width: 30px;
    background-color: transparent;
    opacity: 0.2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #FFF;
    font-size: 22px;
    cursor: pointer;

    &:hover{
        color: #FFF;
        opacity: 0.8;
        transform: scale(1.1);
    }
`;
