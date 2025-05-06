import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Programs', path: '/programs' },
    { text: 'Services', path: '/services' },
    { text: 'Contact', path: '/contact' },
  ];

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem
          button
          component={Link}
          to={item.path}
          key={item.text}
          onClick={handleDrawerToggle}
        >
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 1200,
        bgcolor: 'transparent',
        boxShadow: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pointerEvents: 'auto',
      }}
    >
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: 'rgba(255,255,255,0.75)',
          color: '#222',
          backdropFilter: 'blur(16px)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          borderRadius: '32px',
          height: 80,
          width: { xs: '98vw', sm: '90vw', md: '800px', lg: '900px' },
          maxWidth: 900,
          margin: '16px auto',
          left: 0,
          right: 0,
          mx: 'auto',
          justifyContent: 'center',
          transition: 'background 0.3s, box-shadow 0.3s',
        }}
      >
        <Toolbar sx={{ minHeight: '80px', height: '80px', px: 3 }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: '#222',
              display: 'flex',
              alignItems: 'center',
              fontWeight: 700,
              fontSize: { xs: 22, md: 28 },
              letterSpacing: 0.5,
              transition: 'color 0.2s',
              '&:hover': { color: '#6c3bbf' },
            }}
          >
            <span style={{ fontSize: 28, marginRight: 8 }}>🎓</span>EdTodo
          </Typography>
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: '#222',
                    fontWeight: 600,
                    fontSize: 16,
                    px: 2,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'color 0.2s, background 0.2s, box-shadow 0.2s, transform 0.2s',
                    '&:hover': {
                      color: '#6c3bbf',
                      background: 'rgba(108,59,191,0.08)',
                      boxShadow: '0 2px 8px 0 rgba(108,59,191,0.10)',
                      transform: 'scale(1.06)',
                    },
                    '&:after': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      left: 8,
                      right: 8,
                      bottom: 6,
                      height: 2,
                      borderRadius: 1,
                      background: '#ffd600',
                      opacity: 0,
                      transform: 'scaleX(0)',
                      transition: 'opacity 0.2s, transform 0.2s',
                    },
                    '&:hover:after': {
                      opacity: 1,
                      transform: 'scaleX(1)',
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Navbar; 