import * as React from 'react';
import { Container, Box, Typography, Card, CardMedia, Button } from '@mui/material';

import Register from '../assets/image/Register.svg'
import Reg from '../assets/image/Reg.png'


const style = {
    wrapContainer: {
        marginTop: '121px',
        marginBottom: '121px',
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
        fontSize: '64px',
        lineHeight: '100%',
        textTransform: 'capitalize'
    },
    cardContainer: {
        height: '270px',
        width: 'auto',
        borderRadius: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        minWidth: '700px',
        maxWidth: '1224px,'

    },
    card: {
        overflow: 'unset',
        boxShadow: 'none',
        backgroundColor: 'unset'
    },
    button: {
        borderRadius: '100px',
        width: '141px',
        height: '50px',
        background: 'linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%)',
    }
}


function RegisterNow() {

    return (
        <Container sx={style.wrapContainer}>
            <CardMedia
                component="div"
                image={Reg}
                sx={style.cardContainer}
            >
                <Typography sx={style.text}>
                    Are You New Here ? <br></br>
                    Don’t wait, Register Now.
                </Typography>

                <Button sx={style.button} variant="contained">Register Now</Button>

            </CardMedia>

        </Container>
    )

}
export default RegisterNow