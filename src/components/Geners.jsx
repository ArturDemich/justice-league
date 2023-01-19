import * as React from 'react';
import { Container, Box, Typography, Card } from '@mui/material';

import Action from '../assets/image/genres/Action.png'
import Comedy from '../assets/image/genres/Comedy.png'
import Documentary from '../assets/image/genres/Documentary.png'
import Drama from '../assets/image/genres/Drama.png'
import Historical from '../assets/image/genres/Historical.png'
import Horror from '../assets/image/genres/Horror.png'
import Romance from '../assets/image/genres/Romance.png'
import Scifi from '../assets/image/genres/Sci-fi.png'

import Flag from '../assets/image/Flag.png'

const genres = [
    Romance,
    Drama,
    Historical,
    Action,
    Scifi,
    Horror,
    Comedy,
    Documentary
]

const style = {
    wrapContainer: {
        maxWidth: '1550px !important'
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '35px',
        paddingTop: '2rem',
        paddingBottom: '4rem',
        marginLeft: '0',
        marginRight: '0'
    },
    text: {
        color: '#FFFFFF',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '28px',
        lineHeight: '20px'
    },
    cardContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'wrap',
        gap: '27px',

    },
    card: {
        overflow: 'unset',
        boxShadow: 'none',
        backgroundColor: 'unset'
    },
    image: {
        borderRadius: '22px'
    }
}

function Genres() {


    return (
        <Container sx={style.wrapContainer}>
            <Container sx={style.titleContainer}>
                <Typography sx={style.text}><img src={Flag} /> Trending TV Shows {'>'}</Typography>
            </Container>

            <Box sx={style.cardContainer}>
                {genres.map(gener => (
                    <Card sx={style.card}>
                        <img src={gener} style={style.image} />
                    </Card>
                ))}
            </Box>
        </Container>
    )

}

export default Genres