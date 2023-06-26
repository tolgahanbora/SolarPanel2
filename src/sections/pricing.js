import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Grid, Button, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import PriceCard from 'components/cards/price-card';
import priceIcon1 from 'assets/price-user-1-1.svg';
import priceIcon2 from 'assets/price-user-1-2.svg';


const Pricing = () => {
 
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
     
    </Box>
  );
};

export default Pricing;


const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px'],
  },
};
