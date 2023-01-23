import * as React from 'react';
import { Container, Box, Typography, Card, CardMedia, Button } from '@mui/material';

import Shows1 from '../assets/image/shows/1.png'
import Shows2 from '../assets/image/shows/2.png'
import Shows3 from '../assets/image/shows/3.png'
import Shows4 from '../assets/image/shows/4.png'
import Shows5 from '../assets/image/shows/5.png'
import Shows6 from '../assets/image/shows/6.png'

import Movie1 from '../assets/image/movies/11.png'
import Movie2 from '../assets/image/movies/12.png'
import Movie3 from '../assets/image/movies/13.png'
import Movie4 from '../assets/image/movies/8.png'
import Movie5 from '../assets/image/movies/9.png'
import Movie6 from '../assets/image/movies/10.png'

import Flag from '../assets/image/Flag.png'

const movies = [
    Movie1,
    Movie2,
    Movie3,
    Movie4,
    Movie5,
    Movie6,
]

const shows = [
    Shows1,
    Shows2,
    Shows3,
    Shows4,
    Shows5,
    Shows6,
]

const style = {
    wrapContainer: {
        maxWidth: '1550px !important'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '35px',
        marginBottom: '47px',
        marginTop: '68px',
        marginLeft: '0',
        marginRight: '0'
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '28px',
        lineHeight: '20px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'wrap',
        gap: '44px',
        justifyContent: 'center',

    },
    card: {
        overflow: 'unset',
        boxShadow: 'none',
        backgroundColor: 'unset'
    },
    image: {
        borderRadius: '22px'
    },
    btn: {
        borderRadius: '100px',
        width: '141px',
        height: '50px',
        background: 'linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%)',
        marginTop: '55px',
        marginLeft: '25px',
    }
}

function TrendsBlock() {


    return (
        <Container sx={style.wrapContainer}>
            <Container sx={style.titleContainer}>

                <Typography sx={style.text}><img src={Flag} /> Trending TV Shows {'>'}</Typography>
            </Container>

            <Box sx={style.cardContainer}>
                {shows.map((show, index) => (
                    <Card key={index} sx={style.card}>
                        <img src={show} style={style.image} />
                    </Card>
                ))}
            </Box>

            <Container sx={style.titleContainer}>
                <Typography sx={style.text}><img src={Flag} /> Trending Movies {'>'}</Typography>
            </Container>

            <Box sx={style.cardContainer}>
                {movies.map((movie, index) => (
                    <Card key={index} sx={style.card}>
                        <img src={movie} style={style.image} />
                    </Card>
                ))}
            </Box>

            <Button sx={style.btn} variant="contained">See more</Button>
        </Container>
    )
}

export default TrendsBlock