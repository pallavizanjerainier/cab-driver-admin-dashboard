import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import SignUpContainer from './SignUp';
import LandingHeader from 'src/layouts/SidebarLayout/LandingHeader';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function SignUp() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Cars Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        <Card sx={{ p: 10, mb: 10, borderRadius: 0 }}>
          <SignUpContainer />
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default SignUp;
