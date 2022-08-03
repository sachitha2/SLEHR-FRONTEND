import { Link as RouterLink } from 'react-router-dom';
// material
import {  Button, Container, Stack } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';


export default function Allergies() {
  return (
    <Page title="Dashboard: Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          
          <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            Add Allergies
          </Button>
        </Stack>
      </Container>
    </Page>
  );
}
