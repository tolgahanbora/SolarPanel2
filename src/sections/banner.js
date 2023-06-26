import React from 'react';
import { Box, Container, Image, Heading, Input, Button,Text } from 'theme-ui';
import bannerImage from 'assets/bannerSeccond.png';




const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
        <Box sx={styles.images}>
          <Box sx={styles.content}>
            <Heading as="h2">Energie besparen met je eigen zonnepanelen</Heading>
            {/* Form */}
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
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;



const styles = {
  banner: {

    overflow: 'hidden',
    backgroundColor: '#F9FBFD',
    textAlign: 'center',
    pt: ['110px', null, null, null, '130px'],
    h2: {
      mx: ['auto', null, null, null, '0'],
    textAlign: 'center', // Add this line to center the text on all screen sizes
      fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
      lineHeight: 1.25,
      color: '#02073E',
      fontWeight: 700,
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: '49vh',
      mt: '30px',
      mb: ['40px', null, null, '65px'],
    },
  },
  container: {

    width: "100%",
    innerHeight: "100%",
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  images: {
    flex: ['0 0 100%', null, null, null, '0 0 61.5%'],
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'left',
    height: "100vh",

  },
  textContainers: {
    marginBottom: '10px',
  },
  formContainer: {
    position: 'absolute',
    bottom: ['60px', null, null, null, '100px'],
    right: ['auto', null, null, null, '370px'],
    left: ['50%', null, null, null, 'auto'],
    transform: ['translateX(-50%)', null, null, null, 'none'],
    width: ['90%', null, null, null, 'auto'],

  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: '40px',
    backgroundColor: '#FFFFFF',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: ['100%', null, null, null, '300px'],
    mx: ['auto', null, null, null, '0'],
    transition: 'background-color 0.3s ease',
        '&:hover': {
            boxShadow: '0px 2px 10px rgba(19, 166, 102, 0.5)',
        },
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: '300px',
    mb: ['15px', null, null, null, '20px'],
  },
  inputWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: ['column', null, null, null, 'row'],
    alignItems: ['center', null, null, null, 'initial'],
  },
  inputSpacer: {
    width: '30px',
    display: ['none', null, null, null, 'initial'],
  },
};
