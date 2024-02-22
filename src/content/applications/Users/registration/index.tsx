import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import MyCards from './MyCards';
import DocumentDetailCard from './DocumentCard';

function Registration() {

  return (
    <>
      <Helmet>
        <title>User Details - Management</title>
      </Helmet>
      <Container sx={{ mt: 3 }} maxWidth="lg">
        <Grid
          container
          direction="row"
          border={1}
          borderRadius={2}
          p={3}
        >
          <MyCards/>
          <DocumentDetailCard />
          </Grid>
      </Container>
    </>
  );
}

export default Registration;
