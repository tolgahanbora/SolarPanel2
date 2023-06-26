import React, { useContext } from 'react';
import { Button, Box, Flex } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from 'contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Link as ScrollLink } from 'react-scroll';
import menuItems from './header.data';
import submenu from './header.data';
import Logo from 'components/logo';
import logoDark from 'assets/Voltmaster.svg';

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Button sx={styles.drawerButton}>

          <span sx={styles.buttonText}>Menu</span>

          <IoMdMenu size="22px" sx={styles.icon} />

        </Button>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#02073E" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Logo image={logoDark} />
          <Box sx={styles.menu}>
          {menuItems.map(({ path, label, submenu }, i) => (
  <div key={i}>
    <ScrollLink
      activeClass="active"
      to={path}
      spy={true}
      smooth={true}
      offset={10}
      duration={500}
    >
      {label}
    </ScrollLink>
    {submenu && submenu.length > 0 && (
      <ul>
        {submenu.map(({ path: subPath, label: subLabel }, j) => (
          <li key={j}>
            <ScrollLink
              activeClass="active"
              to={subPath}
              spy={true}
              smooth={true}
              offset={10}
              duration={500}
            >
              {subLabel}
            </ScrollLink>
          </li>
        ))}
      </ul>
    )}
  </div>
))}

          </Box>

          <Box sx={styles.menuFooter}>

          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 960px)': {
      display: 'flex',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    background: '#fff',

  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '30px',
    right: '30px',
    zIndex: '1',
  },

  content: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '30px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',

    a: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'black',
      py: '5px',
      cursor: 'pointer',
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  button: {
    fontSize: '15px',
    fw: '700',
    height: '48px',
    borderRadius: '3px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
    backgroundColor: 'black',
    color: '#fff',

  },
  drawerButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '-0.16px',
    borderRadius: '5px',
    color: '#ffffff',
    backgroundColor: 'black',
    padding: '6.5px 24px',
  },

  buttonText: {
    marginRight: '8px', // İstediğiniz boşluk değerini ayarlayabilirsiniz
  },
  icon: {
    marginRight: "20px"
  }


};

export default MobileDrawer;
