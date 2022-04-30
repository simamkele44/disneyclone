import React, { useEffect } from 'react'
import styled from 'styled-components';
import ImgSlider from './ImgSlider';
import Viewers from './Viewers';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';
import Landing from './Landing';

function Home() {

    const dispatch = useDispatch();
    useEffect(()=>{
        // db.collection("movies").onSnapshot((snapshot)=>{
        //     let tempMovies = snapshot.docs.map((doc)=>{
        //         return { id: doc.id, ...doc.data() }
        //     })
        //     dispatch(setMovies(tempMovies));
        //     //console.log(tempMovies)
        // })
        fetch('http://127.0.0.1:8000/api/movies/', {
            'method': 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(resp => dispatch(setMovies(resp)))
        .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            {/*<ImgSlider/>*/}
            <Landing/>
            <Movies/>
        </Container>
    )
}

export default Home

const Container = styled.main`
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;
    &:before {
        background: url("/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 100vh;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`;


