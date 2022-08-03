import {useAtom} from 'jotai';
import { useState,useEffect } from 'react';
import { Link as RouterLink,Outlet } from 'react-router-dom';
// material
import {  Button, Container, Stack, TextField } from '@mui/material';
// components
import Page from '../../components/Page';
import Iconify from '../../components/Iconify';
import {patientIdAtom} from '../../App'

export default function Doctor() {
  const [patientId,setPatientId] = useAtom(patientIdAtom);
  const [searchVal,setSearchVal] = useState('')
  const find = (e)=>{
    if(e.target.value === ""){
      setPatientId("")
    }
    setSearchVal(e.target.value)
  }

  const findPerson = ()=>{
    
    if(searchVal !== ""){
      setPatientId(searchVal)
    }
  }
  return (
    <Page title="Dashboard: Blog">
      <Container>
        
        <Stack direction="row" space={2}>
          <TextField id="outlined-basic" label="Find Patient by Id" variant="outlined" onChange={find} />
          <Button variant="contained" onClick={findPerson}>Find</Button>
        </Stack>
        {
          patientId === "" ? null : 
          <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5} mt={5}>
            
          
            <Button variant="contained" component={RouterLink} to="">
              Dashboard
            </Button>
            <Button variant="contained" component={RouterLink} to="demographic">
              Demographic
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
        }
        
      </Container>
      <Outlet />
    </Page>
  );
}
