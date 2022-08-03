import { useState } from 'react';
// material
import { Menu, Button, MenuItem, Typography } from '@mui/material';
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
    setSelected(event.target.value.label);
    localStorage.setItem('Doctor', event.target.value);
  };

  return (
    <>
      <Button
        color="inherit"
        disableRipple
        onClick={handleOpen}
        endIcon={<Iconify icon={open ? 'eva:chevron-up-fill' : 'eva:chevron-down-fill'} />}
      >
        Select User Role:&nbsp;
        <Typography component="span" variant="subtitle2" sx={{ color: 'text.secondary' }}>
        {selected}
        </Typography>
      </Button>
      <Menu
        keepMounted
        anchorEl={open}
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        {SORT_BY_OPTIONS.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === 'doctor'}
            onClick={handleClose}
            sx={{ typography: 'body2' }}
            onChange={handleChange}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
