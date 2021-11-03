import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import Results from 'src/components/brands/Results';
import Toolbar from 'src/components/brands/Toolbar';

const Brands = () => {
 

  return (
    <>
      <Helmet>
        <title>Brands | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <Toolbar />
          <Box sx={{ pt: 3 }}>
           <Results data={} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Brands;
