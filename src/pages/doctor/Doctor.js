import { Link as RouterLink,Outlet } from 'react-router-dom';
// material
import {  Button, Container, Stack, TextField } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';

export default function Doctor() {
  return (
    <Page title="Dashboard: Blog">
      <Container>

        <TextField id="outlined-basic" label="Find Patient by Id" variant="outlined" />
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>

            
          
            <Button variant="contained" component={RouterLink} to="">
              Dashboard
            </Button>
            <Button variant="contained" component={RouterLink} to="diagnoses">
              Diagnoses
            </Button>
            <Button variant="contained" component={RouterLink} to="vaccines">
              Vaccines
            </Button>
            <Button variant="contained" component={RouterLink} to="allergies">
              Allergies
            </Button>
            <Button variant="contained" component={RouterLink} to="labtests">
              Lab Tests
            </Button>
            <Button variant="contained" component={RouterLink} to="scans">
              Scans
            </Button>
            <Button variant="contained" component={RouterLink} to="prescriptions">
              Prescriptions
            </Button>
        </Stack>
      </Container>
      <Outlet />
    </Page>
  );
}
