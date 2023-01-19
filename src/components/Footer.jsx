import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Logo from '../assets/image/Logo.svg'


function Footer() {


    return (
        <Container maxWidth="xxl" sx={{
            background: '#101012',
            width: '100%',
            display: 'flex',
            height: '280px',
            color: '#C2C2C2',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: '11rem !important',
            paddingRight: '11rem !important',
            gap: '2rem'

        }}>
            <Box>
                <img src={Logo} width="157" height="70" />
            </Box>
            <Box>
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
            <Box>
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
            <Box>
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
            <Box>
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
        </Container>
    )
}

export default Footer