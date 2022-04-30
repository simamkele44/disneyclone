import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Viewers from './Viewers';
import DisneyLogo from '../images/logo.svg';
import LucaLogo from '../images/lucialogo2.png';
import PlayIcon from '../images/play-icon-white.png';
import PlayWhiteIcon from '../images/play-icon-white.png';
import Lucia from '../images/lucia.gif';

function Landing() {
    return (
        <Container className="d-block">
            <Nav className="d-flex">
                <Logo src={DisneyLogo}/>
                <LoginContainer>
                    <Login className="btn btn-danger">Login</Login>
                </LoginContainer>
            </Nav>
            <MovieInfo className="d-block">
                <MovieLogo src={LucaLogo}/>
                <Year className="d-flex">
                    <p>13+</p>
                </Year>
                <MovieButtons>
                    <WatchButton className="d-flex">
                        <img src={PlayIcon}/>
                        <span>WATCH NOW</span>
                    </WatchButton>
                    <ListButton className="d-flex">
                        <img src={PlayWhiteIcon}/>
                        <span>TRAILER</span>
                    </ListButton>
                </MovieButtons>
            </MovieInfo>
            <Label>
                <p>Episodes</p>
            </Label>
            <Viewers/>
        </Container>
    )
}

export default Landing

const Container = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
    &:before {
        background: url(${Lucia}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -2;
    }
`;

const Logo = styled.img`
    width: 80px;
`;

const Login = styled.div`
    padding: 5px 20px 5px 20px;
    background: #50B7F8;
    border: 1px solid #50B7F8;

    &:hover {
        background: #43a3e0;
        border: 1px solid #43a3e0;
    }
`;

const LoginContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
`;

const Nav = styled.div`
    margin-top: 20px;
`;

const MovieInfo = styled.div``;

const MovieLogo = styled.img`
    width: 28%;
    margin-top: 70px;
`;

const Year = styled.div`
    margin-top: 40px;

    p {
        padding: 4px;
        border: 1px solid #f6f6f9;
        border-radius: 3px;
        color: #ffffff;
        font-size: 13px;
        opacity: 0.7;
    }
`;

const MovieButtons = styled.div`
    display: flex;
`;

const WatchButton = styled.button`
    padding: 10px 30px 10px 25px;
    background: #50B7F8;
    border-radius: 3px;
    border-width: 0px;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    color: #ffffff;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    img {
        margin-right: 10px;
    }

    &:hover {
        background: #43a3e0;
    }

`;

const ListButton = styled(WatchButton)`
    background: rgba(249, 249, 249, .1);

    &:hover {
        background: rgba(249, 249, 249, .3);
    }
`;

const Label = styled.div`
    margin-top: 20px;
    p {
        color: #ffffff;
        font-weight: bold;
        z-index: 22;
    }
`;