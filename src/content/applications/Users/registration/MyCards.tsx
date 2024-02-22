import { ChangeEvent, useState } from 'react';
import {
  Box,
  Grid,
  Radio,
  FormControlLabel,
  Typography,
  Card,
  CardHeader,
  Divider,
  lighten,
  CardActionArea,
  CardContent,
  Tooltip,
  IconButton,
  Avatar,
  styled,
  TextField,
  Button
} from '@mui/material';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
const MuiAvatar = styled(Box)(
  ({ theme }) => `
    width: ${theme.spacing(12)};
    height: ${theme.spacing(12)};
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
`
);

const AvatarContainer = styled(Box)(
  ({ theme }) => `
    display: flex;
`
);
function MyCards() {
  const data = {
    savedCards: 7
  };

  const [selectedValue, setSelectedValue] = useState('a');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleDelete = () => { };

  return (
    <>
      
      <Grid item xs={12}>
            <AvatarContainer>
              <MuiAvatar>
                <img
                  src="/static/images/avatars/car-driver.png"
                  alt="Cab Driver"
                />
              </MuiAvatar>
              <Typography variant="h4">
                <Box sx={{ pb: 2 }}>
                  <b>For cab drivers</b>
                </Box>
                <Typography component="span" variant="subtitle2" align="left">
                  Enter the details below to register yourself. Our team will contact you in the next 24 hours
                </Typography>
              </Typography>
            </AvatarContainer>

          </Grid>
          <Grid item xs={12} mb={4}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
            >
              Submit
            </Button>
          </Grid>
      
    </>
  );
}

export default MyCards;
