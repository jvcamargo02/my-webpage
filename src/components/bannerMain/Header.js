import { useState } from "react";
import styled from "styled-components";
import Lottie from "react-lottie";

import animationDataLogo from "../../assets/lottieFile/63487-programming-computer.json";
import animationDataHamburger from "../../assets/lottieFile/lf30_editor_mvudu5lo.json";

export default function Header() {
    const logoDefaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDataLogo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };
    const hamburgerDefaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationDataHamburger,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <Container>
            <LeftContent>
                <Lottie options={logoDefaultOptions} height={70} width={65} />
                <h1>Camargo.dev</h1>
            </LeftContent>
            <RightContent>
                <ul>
                    <li>
                        <a href="https://#.com.br">Home</a>
                    </li>
                    <li>
                        <a href="https://#.com.br">About</a>
                    </li>
                    <li>
                        <a href="https://#.com.br">Portfolio</a>
                    </li>
                    <li>
                        <a href="https://#.com.br">Pages</a>
                    </li>
                    <li>
                        <a href="https://#.com.br">Projects</a>
                    </li>
                </ul>
                    <Lottie
                        options={hamburgerDefaultOptions}
                        height={40}
                        width={45}
                        speed={2}
                    />
                
            </RightContent>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    color: #fff;
    box-sizing: border-box;
    padding: 36px 0 36px 0;
    justify-content: space-between;
    margin: 0 auto;
    max-height: 118px;
    max-width: 1100px;
`;

const LeftContent = styled.section`
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Quicksand", sans-serif;
    font-weight: 700;
    font-size: 25px;

    @media (max-width: 720px) {
        margin: 0 auto;
    }
`;

const RightContent = styled.ul`
    font-size: 16px;
    color: #fff;
    display: flex;
    gap: 15px;
    align-items: center;

    ul {
        display: flex;
        gap: 15px;
        align-items: center;
    }

    svg {
        cursor: pointer;
    }

    @media (max-width: 720px) {

        ul{
                    display: none;
        }

    }
`;
