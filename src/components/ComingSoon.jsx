import * as React from 'react';
import { Container, Box, Typography, CardMedia } from '@mui/material';

import Bunny from '../assets/image/Bunny.png'
import Coming from '../assets/image/coming.svg'


const styles = {
    containerRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: '59px',
        maxWidth: '1440px !important',

        background: 'linear-gradient(87.02deg, #0D1A73 29.67%, #000000 70.52%)',
        boxShadow: '0px 0px 30px rgb(255 255 255 / 10%)',
        borderRadius: '20px',
        height: '341px',
        marginTop: '102px',
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    imgMovie: {
        height: '341px',
        width: '739px',
        borderTopLeftRadius: '20px',
        borderBottomLeftRadius: '20px',
    },
    imgCom: {
        height: '199px',
        width: '455px',
        paddingLeft: '120px',
        alignSelf: 'center',
        backgroundSize: 'unset',
    }
}

function ComingSoon() {

    return (
        <Container sx={styles.containerRow}>

            <CardMedia
                component="div"
                image={Bunny}
                sx={styles.imgMovie}
            />

            <CardMedia
                component="div"
                image={Coming}
                sx={styles.imgCom}
            />


        </Container>
    )

}
export default ComingSoon