import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Logo from '../assets/image/Logo.svg'


function Footer() {

    return (
        <Container maxWidth="xxl" sx={{
            background: '#101012',
            width: '100%',
            display: 'flex',
            minHeight: '280px',
            color: '#C2C2C2',


        }}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: '245px !important',
                paddingRight: '245px !important',
                gap: '52px',
                maxWidth: '1800px !important',
                marginLeft: 'auto',
                marginRight: 'auto',
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
            </Box>
        </Container>
    )
}

export default Footer