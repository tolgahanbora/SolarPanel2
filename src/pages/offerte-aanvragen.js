import Layout from 'components/layout'
import React from 'react'
import { Box, Container, Flex, Text, Heading } from 'theme-ui';
import { Link } from 'components/link';
import BlockTitle from 'components/block-title';
import Accordion from 'components/accordion/accordion';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';



import OfferteAanvragenSection from 'sections/pagesSections/offerteAanvragen.js';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';

function OfferteAanvragen() {
    return (

        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <Box as="section" id="banner" sx={styles.banner}>
                        <Container sx={styles.container}>
                       
                    <OfferteAanvragenSection  />
                   <Box sx={styles.FAQ}>
                   <FAQ />
                   </Box>
                 
                        </Container>
                        <Box sx={styles.Subscribe}>
                   <Subscribe />
                   </Box>
                    </Box>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    )
}

export default OfferteAanvragen


const styles = {
    banner: {
        overflow: 'hidden',
        backgroundColor: '#F9FBFD',
        textAlign: 'center',
        pt: ['110px', null, null, null, '130px'],
        h2: {
          fontSize: ['28px', null, null, '32px', '38px', '48px', '64px'],
          lineHeight: 1.25,
          color: '#02073E',
          fontWeight: 700,
          width: '100%',
          maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
          mx: '39vh',
          mt: '15vh',
          mb: ['40px', null, null, '65px'],
        },
      },
      container: {
    
        width: "100%",
        innerHeight: "100%",
        mt: "1vh",
        position: 'relative',
        '.bannerIcon': {
          position: 'absolute',
          display: ['none', null, null, null, 'block'],
        },
      },
      FAQ: {
        mt: "10vh"
      },
      Subscribe: {
        mt: "10vh"
      }
};