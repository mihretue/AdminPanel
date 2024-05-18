import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';

import SideNav  from './side-nav';
import  TopNav  from './top-nav';

const SIDE_NAV_WIDTH = 100;
const TOP_NAV_HEIGHT = 64;

const LayoutRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  
  paddingTop: TOP_NAV_HEIGHT,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  },
  
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
  
});

 const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <TopNav />
      <SideNav  />
      <LayoutRoot  >
        <LayoutContainer >
          {children}
         
        </LayoutContainer>
      </LayoutRoot>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};


export default Layout;