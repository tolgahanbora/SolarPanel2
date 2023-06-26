import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';

import serviceImage3 from 'assets/service-3.png';

import serviceImage2 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'De leukste installateurs',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'Altijd de beste deal',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: '0% btw voor zonnepanelen',
    path: '#',
  },
 
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle 
          title="Alles perfect geregeld"
          text="De Glimlach van GoVolt
          is altijd inbegrepen"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
