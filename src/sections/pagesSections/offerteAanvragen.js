import React from 'react';
import { Box, Container, Image, Heading, Input, Button, Text } from 'theme-ui';

import moneySave from "assets/moneySave.svg"
import formVideo from "assets/formVideo.gif"
import Jackpot from './offerteAaanvragen/jackpot';


function OfferteAanvragenSection() {
    return (
        <Box sx={styles.subscribe}>
            <Heading>Offerte Aanvragen</Heading>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,<br />
                consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            <Image src={moneySave} sx={styles.image} />
            <Box sx={styles.formVideo}>
            <Box sx={styles.formContainer}>
                <Box sx={styles.form}>
                    <Box sx={styles.inputContainer}>
                        <Box sx={styles.textContainers}>
                            <Text>Doe nu onze gratis dakscan!</Text>
                        </Box>
                        <Box sx={styles.inputWrapper}>
                            <Input type="text" placeholder="Postcode" />
                            <Box sx={styles.inputSpacer} /> {/* Burada boşluk ekleniyor */}
                            <Input type="text" placeholder="Huisnr." />
                        </Box>
                    </Box>

                    <Button>Check Postcode</Button>
                </Box>

            </Box>
            </Box>
            <Box sx={styles.jackpot}>
                <Jackpot />
            </Box>
        </Box>
    );
}

export default OfferteAanvragenSection;

const styles = {
    subscribe: {
        backgroundColor: '#F9FBFD',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '200px',
        height: 'auto',
        mt: '20px',
    },
    // Diğer stiller...
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        mt: '200px',
        mb: '100px',
        backgroundColor: '#FFFFFF',
        borderRadius: '10px',
        padding: '20px',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        mx: 'auto',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            boxShadow: '0px 2px 10px rgba(19, 166, 102, 0.5)',
        },
      },
      formVideo: { 
        mt: "20vh",
        backgroundImage: `url(${formVideo})`,
        backgroundSize: 'cover',
        borderRadius: "10px",
        width: "100%",
        height: "100%",
      },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '300px',
        mb: '20px',
    },
    textContainers: {
        marginBottom: '10px',
    },
    inputWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    },
    inputSpacer: {
        width: '30px',
    },
    jackpot: {
        mt: "20px",
    }
}
