import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Logo from '../assets/image/Logo.svg'


const styles = {
    wrapContainer: {
        background: '#101012',
        width: '100%',
        display: 'flex',
        minHeight: '280px',
        color: '#C2C2C2',
    },
    wrapBox: {
        display: 'flex',

        alignSelf: 'center',
        paddingLeft: '245px !important',
        paddingRight: '245px !important',
        gap: '52px',
        maxWidth: '1800px !important',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    textBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
}

function Footer() {

    return (
        <Container maxWidth="xxl" sx={styles.wrapContainer}>
            <Box sx={styles.wrapBox}>
                <Box sx={styles.textBox}>
                    <img src={Logo} width="157" height="70" />
                </Box>
                <Box sx={styles.textBox}>
                    <Typography>
                        Voice over and Subtitle
                    </Typography>
                    <Typography>
                        Media Center
                    </Typography>
                    <Typography>
                        Privacy
                    </Typography>
                    <Typography>
                        Contact us
                    </Typography>
                </Box>
                <Box sx={styles.textBox}>
                    <Typography>
                        Voice Description
                    </Typography>
                    <Typography>
                        Investor Relations
                    </Typography>
                    <Typography>
                        Legal Provisions
                    </Typography>

                </Box>
                <Box sx={styles.textBox}>
                    <Typography>
                        Help Center
                    </Typography>
                    <Typography>
                        Job Opportunities
                    </Typography>
                    <Typography>
                        Cookies Preferences
                    </Typography>

                </Box>
                <Box sx={styles.textBox}>
                    <Typography>
                        Gift Cards
                    </Typography>
                    <Typography>
                        Terms of Use
                    </Typography>
                    <Typography>
                        Corporate Informations
                    </Typography>

                </Box>
            </Box>
        </Container>
    )
}

export default Footer