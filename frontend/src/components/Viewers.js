import React from 'react'
import styled from 'styled-components';
import HoverVideoPlayer from 'react-hover-video-player';
import LuciaWater from '../videos/luciawater.mp4';
import Ep1 from '../images/ep1.jpg';
import Ep2 from '../images/ep2.jpg';
import Ep3 from '../images/ep3.jpeg';
import Ep4 from '../images/ep4.jpeg';
import Ep5 from '../images/ep5.png';
import Movie2 from '../videos/movie2.mp4';
import Movie3 from '../videos/movie3.mp4';
import Movie4 from '../videos/movie4.mp4';
import Movie5 from '../videos/movie5.mp4';

function Viewers() {
    return (
        <Container>
            <Wrap>
                <HoverVideoPlayer
                videoSrc={LuciaWater}
                style={{
                    borderRadius: '5px',
                    // The container should have a set 16:9 aspect ratio
                    // (https://css-tricks.com/aspect-ratio-boxes/)
                  }}

                pausedOverlay={
                    <img
                    src={Ep1}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: '5px',
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
                />
                <p>01</p>
            </Wrap>
            <Wrap>
            <HoverVideoPlayer
                videoSrc={Movie2}
                style={{
                    borderRadius: '5px',
                    // The container should have a set 16:9 aspect ratio
                    // (https://css-tricks.com/aspect-ratio-boxes/)
                  }}

                pausedOverlay={
                    <img
                    src={Ep2}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: '5px',
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
                />
                <p>02</p>
            </Wrap>
            <Wrap>
            <HoverVideoPlayer
                videoSrc={Movie3}
                style={{
                    borderRadius: '5px',
                    // The container should have a set 16:9 aspect ratio
                    // (https://css-tricks.com/aspect-ratio-boxes/)
                  }}

                pausedOverlay={
                    <img
                    src={Ep3}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: '5px',
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
                />
                <p>03</p>
            </Wrap>
            <Wrap>
            <HoverVideoPlayer
                videoSrc={Movie4}
                style={{
                    borderRadius: '5px',
                    // The container should have a set 16:9 aspect ratio
                    // (https://css-tricks.com/aspect-ratio-boxes/)
                  }}

                pausedOverlay={
                    <img
                    src={Ep4}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: '5px',
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
                />
                <p>04</p>
            </Wrap>
            <Wrap>
            <HoverVideoPlayer
                videoSrc={Movie5}
                style={{
                    borderRadius: '5px',
                    // The container should have a set 16:9 aspect ratio
                    // (https://css-tricks.com/aspect-ratio-boxes/)
                  }}

                pausedOverlay={
                    <img
                    src={Ep5}
                    alt=""
                    style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: '5px',
                    }}
                    />
                }
                loadingOverlay={
                    <div className="loading-spinner-overlay" />
                }
                />
                <p>05</p>
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 1vh;
    display: grid;
    padding: 7px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
    cursor: pointer;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    height: 72%;
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 5px;
        background: -webkit-linear-gradient(top, 
            rgba(0,0,0,0.9) 0%, 
            rgba(0,0,0,0) 20%,
            rgba(0,0,0,0) 80%,
            rgba(0,0,0,0.7) 100%
          ),
          -webkit-linear-gradient(left, 
            rgba(0,0,0,0.9) 0%, 
            rgba(0,0,0,0) 20%,
            rgba(0,0,0,0) 80%,
            rgba(0,0,0,0.7) 100%
          );
    }

    &:hover {
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.19);
    }

    P {
        position: absolute;
        color: #fff;
        font-weight: bold;
        margin-top: -40px;
        margin-left: 13px;
        font-size: 20px;
        z-index: 88;
    }

    video {
        border-radius: 5px;
    }
`;
