import { useState } from 'react';
// material
import { Menu, Button, MenuItem, Typography, Select } from '@mui/material';
import {useAtom} from 'jotai';
// component
import Iconify from '../../../components/Iconify';


// ----------------------------------------------------------------------

const SORT_BY_OPTIONS = [
  { value: 'doctor', label: 'Doctor' },
  { value: 'radiographer', label: 'Radiographer' },
  { value: 'pharmacist', label: 'Pharmacist' },
  { value: 'pathologist', label: 'Pathologist' },
  { value: 'attendant', label: 'Attendant' }
];

export default function DoctorSort() {
  const [open, setOpen] = useState(null);
  const [selected, setSelected] = useState('');

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };
  
  const handleChange = (event) => {
    setSelected(event.target.value);
    localStorage.setItem('Doctor', event.target.value);
  };

  return (
    <>
      <Select
                labelId="tag-label"
                id="tag-select"
                value={selected}
                label="Doctor"
                onChange={handleChange}
              >
                <MenuItem value={'doctor'}>Doctor</MenuItem>
                <MenuItem value={'radiographer'}>Radiographer</MenuItem>
                <MenuItem value={'pharmacist'}>Pharmacist</MenuItem>
                <MenuItem value={'pathologist'}>Pathologist</MenuItem>
                <MenuItem value={'attendant'}>Attendant</MenuItem>
                {/* <MenuItem value={20}>Tag2</MenuItem>
                <MenuItem value={30}>Tag13</MenuItem> */}
              </Select>
      {/* <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((value, label) => (
          <MenuItem
            key={value.value}
            selected={value.value === 'doctor'}
            onClick={handleClose}
            sx={{ typography: 'body2' }}
            onChange={handleChange}
          >
            {label}
          </MenuItem>
        ))}
      </Menu> */}
    </>
  );
}
