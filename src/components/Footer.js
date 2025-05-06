import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Stack,
} from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#3d1766', color: 'white', pt: 8, pb: 2, mt: 0 }} component="footer">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Left: Logo and Description */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Box sx={{ bgcolor: '#ffd600', borderRadius: '50%', width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', mr: 1 }}>
                <Box component="span" sx={{ color: '#3d1766', fontSize: 24 }}>🎓</Box>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: 'white' }}>Edtodo</Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
              Empowering individuals through quality education and skill development programs since 2010.
            </Typography>
          </Grid>
          {/* Center: Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>Quick Links</Typography>
            <Stack spacing={1}>
              <Button component={Link} to="/" sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}>Home</Button>
              <Button component={Link} to="/about" sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}>About Us</Button>
              <Button component={Link} to="/services" sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}>Our Services</Button>
              <Button component={Link} to="/programs" sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}>Our Programs</Button>
              <Button component={Link} to="/portfolios" sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}>Portfolios</Button>
              <Button component={Link} to="/contact" sx={{ color: 'white', justifyContent: 'flex-start', textTransform: 'none' }}>Contact Us</Button>
            </Stack>
          </Grid>
          {/* Right: Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>Contact Info</Typography>
            <Stack spacing={1}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#ffd600', fontSize: 20 }}>📍</Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>123 Education Street, Learning City, 10001</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#ffd600', fontSize: 20 }}>📞</Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>+1 (555) 123-4567</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Box component="span" sx={{ color: '#ffd600', fontSize: 20 }}>✉️</Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>info@eduskill.com</Typography>
              </Box>
            </Stack>
          </Grid>
          {/* Rightmost: Newsletter */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>Newsletter</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
              Subscribe to our newsletter to receive updates and educational resources.
            </Typography>
            <Box component="form" sx={{ display: 'flex', gap: 1, mb: 1 }}>
              <input
                type="email"
                placeholder="Your email address"
                style={{
                  flex: 1,
                  padding: '10px 12px',
                  borderRadius: 4,
                  border: '1px solid #888',
                  outline: 'none',
                  fontSize: 16,
                  background: 'rgba(255,255,255,0.08)',
                  color: 'white',
                }}
              />
              <Button type="submit" variant="contained" sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 3, borderRadius: 2, boxShadow: 2, '&:hover': { bgcolor: '#ffea00' } }}>
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.1)', mt: 6, pt: 3, textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
          © 2025 EdtoDo. All rights reserved.
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 