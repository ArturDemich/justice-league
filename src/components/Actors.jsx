import * as React from 'react';
import { Container, Box, Typography, Card } from '@mui/material';

import Holloway from '../assets/image/actors/JamesHolloway.png'
import Walton from '../assets/image/actors/JoshuaWalton.png'
import Morgan from '../assets/image/actors/MorganONeill.png'
import Elliott from '../assets/image/actors/PatrickElliott.png'
import Birch from '../assets/image/actors/RhysBirch.png'
import Bowen from '../assets/image/actors/SamanthaBowen.png'

import Flag from '../assets/image/Flag.png'


const actors = [
    { img: Bowen, name: 'Samantha Bowen' },
    { img: Birch, name: 'Rhys Birch' },
    { img: Holloway, name: 'James Holloway' },
    { img: Walton, name: 'Joshu Walton' },
    { img: Elliott, name: 'PatrickElliott' },
    { img: Morgan, name: 'Morgan O`Neill' }
]

const style = {
    wrapContainer: {
        maxWidth: '1550px !important',
        paddingTop: '78px',
    },
    titleContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: '35px',
        marginBottom: '47px',
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
        gap: '59px',
        justifyContent: 'center',

    },
    card: {
        overflow: 'unset',
        boxShadow: 'none',
        backgroundColor: 'unset',
        borderRadius: '50%'
    },
    image: {
        borderRadius: '50%'
    },
    name: {
        textAlign: 'center',
        paddingTop: '1rem',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '18px',
        lineHeight: '20px'
    }
}

function Actors() {

    return (
        <Container sx={style.wrapContainer}>
            <Container sx={style.titleContainer}>
                <Typography sx={style.text}><img src={Flag} /> Popular Actors {'&'} Directors {'>'}</Typography>
            </Container>

            <Box sx={style.cardContainer}>
                {actors.map((actor, index) => (
                    <Box key={index}>
                        <Card sx={style.card}>
                            <img src={actor.img} style={style.image} />
                        </Card>
                        <Typography sx={style.name}>
                            {actor.name}
                        </Typography>
                    </Box>
                ))}
            </Box>

        </Container>
    )

}
export default Actors