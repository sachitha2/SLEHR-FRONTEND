import {useAtom} from 'jotai';

import { Link as RouterLink,Outlet } from 'react-router-dom';
// material
import {  Button, Container, Stack, TextField } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import {patientIdAtom} from '../../App'

// components
import Diagnosis from './Diagnoses';
import Allergies from './Allergies';
import Vaccines from './Vaccines';



export default function Doctor(props) {
  const [patientId,setPatientId] = useAtom(patientIdAtom);
  return (
    <Page title="Dashboard: Blog">
      <Container>
        {patientId}
        <Diagnosis/>
        <Allergies/>
        <Vaccines />
      </Container>
      <Outlet />
    </Page>
  );
}
