import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Box, Link, Stack } from '@mui/material';
import  Logo from '../image/newcart.png';

const TOP_NAV_HEIGHT = 64;

 const TopNav = () => (
  <Box
    component="header"
    sx={{
      backgroundColor: 'white',
      color: 'common.white',
      position: 'fixed',
      width: '100%',
      marginLeft: '-10px',
      zIndex: (theme) => theme.zIndex.appBar
    }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        minHeight: TOP_NAV_HEIGHT,
        px: 3
      }}
    >
      <Stack
        alignItems="center"
        direction="row"
        spacing={3}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{
            display: 'inline-flex',
            height: 24,
            width: 24
          }}
        >
         <img src={Logo} alt='logo img' className='rounded'/>
        </Box>
      </Stack>
      <Stack
        alignItems="center"
        direction="row"
        spacing={2}
      >
       
        <Avatar
          src="/assets/avatars/avatar-chen-simmons.jpg"
          variant="rounded"
        />
      </Stack>
    </Stack>
  </Box>
);

export default TopNav;
