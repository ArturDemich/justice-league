import * as React from 'react';
import { Container, Box, Typography, CardMedia, Button } from '@mui/material';

import Banner from '../assets/image/Banner.svg'
import Watch from '../assets/image/Watch.png'
import Star from '../assets/image/Star.svg'



const styles = {
    wrapContainer: {
        maxWidth: '1800px !important',
        display: 'flex',
        paddingLeft: '84px !important',
        paddingRight: '0 !important',
    },
    wrapBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '35px',
        width: '100%',
    },
    title: {
        color: '#FFFFFF',
        fontFamily: 'Marcellus',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '80px',
        lineHeight: '70px',
        width: '532px',
        height: 'auto',
        alignSelf: 'start',
        marginTop: '121px',
    },
    action: {
        color: '#FFFFFF',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '16px',
        lineHeight: '10px',
    },
    content: {
        color: '#FFFFFF',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '28px',
        width: '532px',
        height: 'auto',
        alignSelf: 'start',
    },
    buttons: {
        width: '366px',
        height: '50px',
        alignSelf: 'start',
        display: 'flex',
        gap: '30px',
    },
    btnW: {
        borderRadius: '100px',
        width: '141px',
        height: '50px',
        background: 'linear-gradient(316.53deg, #26FFF2 13.2%, #326CFF 71.54%)',
    },
    btnInfo: {
        borderRadius: '100px',
        width: '195px',
        height: '50px',
        background: '#FFFFFF',
        color: '#323232',
        fontFamily: 'Mulish',
        fontStyle: 'normal',
        fontWeight: '800',
        fontSize: '16px',
        lineHeight: '20px',
        textTransform: 'none',
    },
    img: {
        height: '764px',
        width: '955px',
    },
    age: {
        marginLeft: '18px',
        marginRight: '18px',
        boxSizing: 'border-box',
        borderRadius: '50px',
        border: '1.5px solid',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderLeftColor: 'rgba(50, 108, 255, 1)',
        borderTopColor: 'rgba(50, 108, 255, 1)',
        borderRightColor: 'rgba(38, 255, 242, 1)',
        borderBottomColor: 'rgba(38, 255, 242, 1)',


    },
    star: {
        marginLeft: '41px'
    },
}

function MainBanner() {

    return (
        <Container sx={styles.wrapContainer}>
            <Box sx={styles.wrapBox}>
                <Typography sx={styles.title}>
                    Zack Snyder's Justice League
                </Typography>
                <Box sx={styles.action}>
                    2021 <span style={styles.age}> 18+ </span> 4h 2min  <span style={styles.star}>8.8 <img src={Star} /></span>
                </Box>
                <Typography sx={styles.content}>
                    Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.
                </Typography>
                <Box sx={styles.buttons}>
                    <Button sx={styles.btnW} variant="contained"><img src={Watch} width="81px" height="20px" /> </Button>
                    <Button sx={styles.btnInfo} variant="contained">More information</Button>
                </Box>
            </Box>
            <CardMedia
                component="img"
                image={Banner}
                sx={styles.img}
            >

            </CardMedia>
        </Container>
    )

}
export default MainBanner