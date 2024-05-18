import { Link as RouterLink, matchPath, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { items } from './config';

const SIDE_NAV_WIDTH = 100;
const TOP_NAV_HEIGHT = 64;

 const SideNav = () => {
  const location = useLocation();

  return (
    <Drawer
    className='container'
      open
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100% - ${TOP_NAV_HEIGHT}px)`,
          p: 1,
          top: TOP_NAV_HEIGHT,
          marginLeft: '-60px',
          
          padding: '4rem',
          width: SIDE_NAV_WIDTH,
          zIndex: (theme) => theme.zIndex.appBar - 100
        }
      }}
    >
      <List sx={{ width: '100%',margin:{
        xs:'2rem'
      } }}>
        {items.map((item) => {
          const active = matchPath({ path: item.href, end: true }, location.pathname);

          return (
            <ListItem
              disablePadding
              component={RouterLink}
              key={item.href}
              to={item.href}
              sx={{
                flexDirection: 'column',
                px: 2,
                py: 1.5,
                
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  color: active ? 'primary.main' : 'neutral.400'
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  variant: 'caption',
                  sx: {
                    color: active ? 'primary.main' : 'text.secondary'
                  }
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};


export default SideNav;