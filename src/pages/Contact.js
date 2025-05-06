import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setOpenSnackbar(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box
        data-aos="fade-up"
        sx={{
          position: 'relative',
          height: { xs: '300px', md: '400px' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/assets/contact-hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.5)',
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 900, fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Contact Us
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 400, maxWidth: '600px', margin: '0 auto' }}>
            Get in touch with our team for any questions or inquiries. We're here to help!
          </Typography>
        </Container>
      </Box>

      {/* Contact Form and Info */}
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Card sx={{ borderRadius: 4, boxShadow: 6, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: '#3d1766' }}>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonIcon sx={{ color: '#6c3bbf' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <EmailIcon sx={{ color: '#6c3bbf' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PhoneIcon sx={{ color: '#6c3bbf' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <SubjectIcon sx={{ color: '#6c3bbf' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        label="Message"
                        name="message"
                        multiline
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <MessageIcon sx={{ color: '#6c3bbf' }} />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{ bgcolor: '#6c3bbf', color: 'white', fontWeight: 700, py: 1.5, '&:hover': { bgcolor: '#3d1766' } }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </CardContent>
            </Card>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={5}>
            <Card sx={{ borderRadius: 4, boxShadow: 6, transition: 'transform 0.2s', '&:hover': { transform: 'translateY(-5px)' } }}>
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 800, color: '#3d1766' }}>
                  Contact Information
                </Typography>
                <Box sx={{ mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EmailIcon sx={{ mr: 2, color: '#6c3bbf' }} />
                    <Typography>info@edtodo.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <PhoneIcon sx={{ mr: 2, color: '#6c3bbf' }} />
                    <Typography>(123) 456-7890</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <LocationOnIcon sx={{ mr: 2, color: '#6c3bbf' }} />
                    <Typography>
                      123 Education Street
                      <br />
                      Learning City, LC 12345
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, color: '#3d1766' }}>
                    Office Hours
                  </Typography>
                  <Typography>
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* About EdtoDo Section */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Box
          sx={{
            bgcolor: 'rgba(245,245,250,0.55)',
            backdropFilter: 'blur(12px)',
            border: '1.5px solid rgba(255,255,255,0.18)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
            borderRadius: 6,
            p: { xs: 3, md: 6 },
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#3d1766', mb: 2 }}>
            About EdtoDo
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(61,23,102,0.85)', mb: 3, maxWidth: 700, mx: 'auto' }}>
            EdtoDo is dedicated to transforming education and professional development through innovative, personalized learning solutions. Our mission is to empower individuals, businesses, and institutions to achieve their goals and unlock their full potential.
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#ffd600', color: '#3d1766', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontSize: 32, boxShadow: 2 }}>
                  🌟
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>Innovation</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(61,23,102,0.7)' }}>We embrace new ideas and technologies to deliver the best learning experiences.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#ffd600', color: '#3d1766', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontSize: 32, boxShadow: 2 }}>
                  🤝
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>Collaboration</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(61,23,102,0.7)' }}>We work closely with our clients and partners to create meaningful impact.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#ffd600', color: '#3d1766', borderRadius: '50%', width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontSize: 32, boxShadow: 2 }}>
                  🎯
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>Results-Driven</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(61,23,102,0.7)' }}>We are committed to measurable outcomes and lasting success for our clients.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* Website Overview Section */}
      <Container maxWidth="md" sx={{ mb: 8 }}>
        <Box
          sx={{
            bgcolor: 'rgba(255,255,255,0.13)',
            border: '1.5px solid #b39ddb',
            borderRadius: 6,
            boxShadow: 4,
            p: { xs: 3, md: 6 },
            textAlign: 'center',
            mb: 4,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 800, color: '#3d1766', mb: 2 }}>
            Website Overview
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(61,23,102,0.85)', mb: 3, maxWidth: 700, mx: 'auto' }}>
            EdtoDo is your all-in-one platform for education, training, and professional development. Whether you're an individual seeking to upskill, a business looking to empower your workforce, or an institution aiming to modernize your curriculum, EdtoDo provides tailored solutions to help you succeed.
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#6c3bbf', color: '#ffd600', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontSize: 28, boxShadow: 2 }}>
                  👩‍��
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>For Individuals</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(61,23,102,0.7)' }}>Personalized learning paths, career-focused programs, and expert mentoring to help you reach your goals.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#6c3bbf', color: '#ffd600', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontSize: 28, boxShadow: 2 }}>
                  🏢
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>For Businesses</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(61,23,102,0.7)' }}>Corporate training, leadership development, and talent assessment to drive organizational success.</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box sx={{ bgcolor: '#6c3bbf', color: '#ffd600', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 1, fontSize: 28, boxShadow: 2 }}>
                  ��
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>For Institutions</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(61,23,102,0.7)' }}>Curriculum development, faculty training, and educational technology solutions for modern learning environments.</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: '100%' }}
        >
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 