import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  Paper,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import { Link } from 'react-router-dom';
import stardomVideo from '../assets/Stardom copy.mp4';
import ekalal from '../assets/ekalal.jpeg';
import enter from '../assets/Enter.jpeg';
import pencil from '../assets/Pencil.jpeg';
import sarva from '../assets/sarva.jpeg';
import spark from '../assets/spark.jpeg';
import tansam from '../assets/Tansam.jpeg';
import shreee from '../assets/shreee.jpeg';
import unicef from '../assets/unicef.jpg';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import groupPhoto from '../assets/group-photo.jpg';
import ritLogo from '../assets/RIT.jpeg';
import kalasalingamLogo from '../assets/Kalasalingam college.png';
import vvLogo from '../assets/vv college.jpeg';
import tnauLogo from '../assets/TNAU.png';
import reachLogo from '../assets/Reach.png';
import psnLogo from '../assets/psn college.jpeg';
import dutyLogo from '../assets/Duty.png';
import collogeLogo from '../assets/colloge.png';
import popesLogo from '../assets/popes college.jpeg';
import chatolicLogo from '../assets/Chatolic.png';
import stLogo from '../assets/ST college.png';
import scadLogo from '../assets/scad college.png';
import fxexLogo from '../assets/FXEX.png';
import college2Logo from '../assets/College2.png';
import psrrLogo from '../assets/PSRR college.png';
import internshipOpportunityImg from '../assets/Intrenship opportunity.jpeg';

const studentImg = 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=facearea&w=256&h=256&facepad=2';

const testimonialData = [
  {
    name: 'Sarah Johnson',
    role: 'Web Developer at Tech Solutions Inc.',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: "The Web Development Bootcamp completely transformed my career. I went from knowing almost nothing about coding to landing a full-time developer role within 3 months of graduation.",
  },
  {
    name: 'Michael Chen',
    role: 'Data Analyst at Global Analytics',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: "The Data Science program provided me with the exact skills I needed to transition into analytics. The instructors were knowledgeable and the hands-on projects gave me real-world experience.",
  },
  {
    name: 'Jessica Williams',
    role: 'UX Designer at Creative Digital',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    quote: "I can't recommend the UX/UI Design course enough. The curriculum was comprehensive and up-to-date with industry standards. I now have an amazing portfolio and a job I love.",
  },
  {
    name: 'David Rodriguez',
    role: 'Full Stack Developer at Innovatech',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
    quote: "The mentorship and project-based learning approach helped me build confidence in my skills. I was able to contribute meaningfully to my team from day one.",
  },
  {
    name: 'Emily Park',
    role: 'Product Manager at NextGen Tech',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
    quote: "The Product Management certification gave me the framework and vocabulary I needed to advance my career. The case studies were particularly valuable.",
  },
  {
    name: 'Amit Sharma',
    role: 'Data Scientist at DataWiz',
    avatar: 'https://randomuser.me/api/portraits/men/51.jpg',
    quote: "Edtodo's Data Science program was a game changer for me. The hands-on projects and expert guidance helped me land my dream job!",
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Specialist at BrightAds',
    avatar: 'https://randomuser.me/api/portraits/women/23.jpg',
    quote: "The Digital Marketing course was very practical and up-to-date. I was able to apply what I learned immediately at work.",
  },
  {
    name: 'Lucas Kim',
    role: 'Mobile App Developer at Appify',
    avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
    quote: "I loved the Mobile App Development bootcamp! The instructors were supportive and the curriculum was very relevant to the industry.",
  },
];

const Home = () => {
  const features = [
    {
      title: 'Personalized Learning',
      description: 'Tailored educational experiences for every student',
      icon: '🎯',
    },
    {
      title: 'Expert Tutors',
      description: 'Learn from experienced and qualified educators',
      icon: '👨‍🏫',
    },
    {
      title: 'Flexible Scheduling',
      description: 'Study at your own pace and convenience',
      icon: '⏰',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Student',
      text: 'EdTodo has transformed my learning experience. The personalized approach helped me excel in my studies.',
      avatar: 'SJ',
    },
    {
      name: 'Michael Chen',
      role: 'Parent',
      text: "My child's academic performance has improved significantly since joining EdTodo. Highly recommended!",
      avatar: 'MC',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Student',
      text: 'The tutors are amazing and the flexible scheduling makes it easy to balance school and extracurricular activities.',
      avatar: 'ER',
    },
  ];

  // Carousel state and logic
  const [testimonialSlide, setTestimonialSlide] = useState(0);
  const testimonialsPerPage = 3; // Show 3 at a time
  const totalTestimonialSlides = Math.ceil(testimonialData.length / testimonialsPerPage);
  const handleTestimonialPrev = () => setTestimonialSlide((prev) => (prev === 0 ? totalTestimonialSlides - 1 : prev - 1));
  const handleTestimonialNext = () => setTestimonialSlide((prev) => (prev === totalTestimonialSlides - 1 ? 0 : prev + 1));
  const testimonialStartIdx = testimonialSlide * testimonialsPerPage;
  const visibleTestimonials = testimonialData.slice(testimonialStartIdx, testimonialStartIdx + testimonialsPerPage);

  return (
    <Box>
      {/* Hero Section */}
      <Box id="hero-section" data-aos="fade-up" sx={{
        position: 'relative',
        bgcolor: 'rgba(245,245,250,0.55)',
        backdropFilter: 'blur(16px)',
        border: '1.5px solid rgba(255,255,255,0.18)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
        color: 'white',
        width: '1390px',
        maxWidth: '100%',
        margin: '40px auto',
        marginTop: '30mm',
        overflow: 'hidden',
        borderRadius: '40px',
        display: 'flex',
        alignItems: 'center',
        minHeight: { xs: 700, md: 600 },
        '::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          borderRadius: '40px',
          background: 'linear-gradient(120deg, rgba(108,59,191,0.12) 0%, rgba(255,214,0,0.10) 100%)',
          animation: 'animatedBg 12s ease-in-out infinite alternate',
        },
        '& > *': { position: 'relative', zIndex: 1 },
      }}>
        {/* Blurred Gradient Background */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            background: 'radial-gradient(circle at 30% 30%, #6a11cb 0%, #2575fc 50%, #1a2980 100%)',
            filter: 'blur(60px)',
            opacity: 0.85,
            transition: 'background 1s',
            animation: 'gradientMotion 10s ease-in-out infinite alternate',
          }}
        />
        {/* Main Content */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%', position: 'relative', zIndex: 1, px: 4, py: { xs: 4, md: 0 } }}>
          {/* Video with Certificate Card Overlay */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', mb: { xs: 4, md: 0 } }}>
            <Box sx={{ position: 'relative', width: { xs: '100%', md: 600 }, height: { xs: 260, md: 400 }, borderRadius: 4, overflow: 'hidden', boxShadow: 6, background: '#1a0536' }}>
              <video
                src={stardomVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 24 }}
              />
              {/* Certificate Card Overlay */}
              <Paper
                elevation={8}
                sx={{
                  position: 'absolute',
                  top: 24,
                  left: 24,
                  bgcolor: '#3d1766',
                  color: 'white',
                  px: 3,
                  py: 2,
                  borderRadius: 3,
                  minWidth: 220,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  boxShadow: '0 8px 32px rgba(61,23,102,0.25)',
                  border: '2px solid #ffd600',
                  zIndex: 2,
                  maxWidth: { xs: 200, md: 260 },
                }}
              >
                <VerifiedIcon sx={{ color: '#ffd600', fontSize: 32 }} />
                <Box>
                  <Typography fontWeight={700}>Certified Courses</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    Industry-recognized certifications to boost your career
                  </Typography>
                </Box>
              </Paper>
            </Box>
          </Box>
          {/* Information Section */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: { xs: 'center', md: 'flex-start' }, pl: { md: 6 }, textAlign: { xs: 'center', md: 'left' } }}>
            <Chip
              label="Transform Your Future"
              sx={{
                bgcolor: '#ffd600',
                color: '#2d0b4e',
                fontWeight: 700,
                mb: 3,
                fontSize: 16,
                px: 2,
                py: 1,
                borderRadius: 2,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.2rem', md: '3.2rem' },
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              Unlock Your Potential<br />with Quality Education
            </Typography>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
              Discover a world of learning opportunities designed to help you achieve your 
              personal and professional goals.
            </Typography>
            <Stack direction="row" spacing={2} mb={4} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Button
                variant="contained"
                sx={{
                  bgcolor: '#ffd600',
                  color: '#2d0b4e',
                  fontWeight: 600,
                  '&:hover': { bgcolor: '#ffea00' },
                }}
                size="large"
                endIcon={<ArrowForwardIcon />}
                component={Link}
                to="/programs"
              >
                Explore Program
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderColor: 'rgba(255,255,255,0.5)',
                  color: 'white',
                  fontWeight: 700,
                  '&:hover': { borderColor: '#ffd600', color: '#ffd600' },
                }}
                size="large"
                component={Link}
                to="/about"
              >
                Learn More
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} justifyContent={{ xs: 'center', md: 'flex-start' }}>
              <Stack direction="row" spacing={-1}>
                {[0, 1, 2, 3].map((i) => (
                  <Avatar
                    key={i}
                    src={studentImg}
                    sx={{ border: '2px solid #fff', width: 40, height: 40, zIndex: 4 - i }}
                  />
                ))}
              </Stack>
              <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>
                2,500+ students already enrolled
              </Typography>
            </Stack>
          </Box>
        </Box>
        {/* Keyframes for gradient motion */}
        <style>{`
          @keyframes gradientMotion {
            0% {
              background-position: 0% 50%;
            }
            100% {
              background-position: 100% 50%;
            }
          }
        `}</style>
      </Box>
      {/* Stats Section */}
      <Box id="stats-section" data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', py: 6, width: '1390px', maxWidth: '100%', margin: '40px auto', borderRadius: '40px', position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: '40px', background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {[
              { value: '50+', label: 'Courses & Trainings' },
              { value: '100+', label: 'Colleges & Institutions' },
              { value: '50+', label: 'Industrial experts & Trainers' },
              { value: '100+', label: 'Government programs & Projects' },
              { value: '300+', label: 'Educational Programs' },
              { value: '2+', label: 'Students Trained' },
            ].map((stat, idx) => (
              <Grid item xs={6} sm={4} md={2} key={idx} sx={{ textAlign: 'center', mb: 2 }}>
                <Typography variant="h4" sx={{ color: '#ffd600', fontWeight: 700 }}>
                  {stat.value}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'white', opacity: 0.85 }}>
                  {stat.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Internship & Training Opportunity Section */}
      <Box id="internship-opportunity-section" data-aos="fade-up" sx={{ bgcolor: 'rgba(255,255,255,0.13)', border: '1.5px solid #b39ddb', boxShadow: 4, borderRadius: '40px', width: '1390px', maxWidth: '100%', margin: '40px auto', my: 6, p: { xs: 3, md: 8 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, mb: 2 }}>
            <Box sx={{ fontSize: 48, mr: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🎓</Box>
            <Typography variant="h4" sx={{ fontWeight: 800, color: '#3d1766' }}>
              Internship & Training Opportunities
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: 'rgba(61,23,102,0.85)', mb: 3 }}>
            We are excited to offer students hands-on internship opportunities and professional training programs. Gain real-world experience, work with industry experts, and build skills that will set you apart in your career journey.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, borderRadius: 2, px: 4, boxShadow: 0, '&:hover': { bgcolor: '#ffe066' } }}
            component={Link}
            to="/programs"
          >
            Learn More & Apply
          </Button>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Box component="img" src={internshipOpportunityImg} alt="Internship Opportunity" sx={{ width: { xs: '100%', md: 340 }, maxWidth: 400, borderRadius: 4, boxShadow: 3, objectFit: 'cover' }} />
        </Box>
      </Box>
      {/* Collaborators Section */}
      <Box id="collaborators-section" data-aos="fade-right" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', py: 8, width: '1390px', maxWidth: '100%', margin: '40px auto', borderRadius: '40px', position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: '40px', background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ color: '#ffd600', fontWeight: 700, mb: 4 }}>
            Our <span style={{ color: 'white', fontWeight: 400 }}>Collaboraters</span>
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {[
              ekalal,
              enter,
              pencil,
              sarva,
              spark,
              tansam,
              shreee,
              unicef,
            ].map((logo, idx) => (
              <Grid item key={idx} xs={6} sm={4} md={2} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src={logo}
                  alt={`Collaborator ${idx + 1}`}
                  sx={{ width: 120, height: 60, objectFit: 'contain', borderRadius: 2, bgcolor: 'white', p: 1 }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Featured Learning Programs Section */}
      <Box id="featured-programs-section" data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', py: 10, width: '1390px', maxWidth: '100%', margin: '40px auto', borderRadius: '40px', position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: '40px', background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Chip label="Our Programs" sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, mb: 2, fontSize: 16, px: 2, py: 1, borderRadius: 2 }} />
            <Typography variant="h3" align="center" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
              Featured Learning Programs
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
              Explore our most popular programs designed to help you master new skills and advance your career.
            </Typography>
          </Box>
          <Grid container spacing={4} justifyContent="center">
            {/* Example program cards, replace with your actual data/images */}
            {[
              {
                title: 'Web Development Bootcamp',
                desc: 'Master modern web development with HTML, CSS, JavaScript, React, and Node.js.',
                img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
                duration: '12 weeks',
                level: 'Beginner to Advanced',
                category: 'Technology',
              },
              {
                title: 'Industry 4.0',
                desc: 'Learn to analyze data, create visualizations, and build predictive models.',
                img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80',
                duration: '16 weeks',
                level: 'Intermediate',
                category: 'Technology',
              },
              {
                title: 'Digital Marketing Mastery',
                desc: 'Develop comprehensive digital marketing skills for the modern business landscape.',
                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
                duration: '8 weeks',
                level: 'All Levels',
                category: 'Business',
              },
              {
                title: 'UX/UI Design Fundamentals',
                desc: 'Create user-centered designs and intuitive interfaces for digital products.',
                img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
                duration: '10 weeks',
                level: 'Beginner',
                category: 'Design',
              },
              {
                title: 'Business Leadership',
                desc: 'Develop essential leadership skills to drive organizational success.',
                img: 'https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=400&q=80',
                duration: '6 weeks',
                level: 'Advanced',
                category: 'Business',
              },
              {
                title: 'Mobile App Development',
                desc: 'Build native and cross-platform mobile applications for iOS and Android.',
                img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
                duration: '14 weeks',
                level: 'Intermediate',
                category: 'Technology',
              },
            ].map((program, idx) => (
              <Grid item xs={12} sm={6} md={4} key={idx}>
                <Card sx={{ borderRadius: 4, bgcolor: '#3d1766', color: 'white', boxShadow: 3, border: '2px solid #6a11cb' }}>
                  <Box sx={{ position: 'relative' }}>
                    <Box
                      component="img"
                      src={program.img}
                      alt={program.title}
                      sx={{ width: '100%', height: 180, objectFit: 'cover', borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                    />
                    <Chip
                      label={program.category}
                      sx={{ position: 'absolute', top: 12, right: 12, bgcolor: '#6a11cb', color: 'white', fontWeight: 600 }}
                    />
                  </Box>
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{program.title}</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>{program.desc}</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <span role="img" aria-label="duration">📅</span> {program.duration}
                      </Typography>
                      <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <span role="img" aria-label="level">📈</span> {program.level}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
            <Button
              variant="contained"
              sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 4, py: 1.5, borderRadius: 2, fontSize: 18, boxShadow: 2, '&:hover': { bgcolor: '#ffea00' } }}
              size="large"
              component={Link}
              to="/programs"
            >
              View All Programs
            </Button>
          </Box>
        </Container>
      </Box>
      {/* Why Choose Us Section */}
      <Box id="why-choose-us-section" data-aos="fade-left" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', py: 10, width: '1390px', maxWidth: '100%', margin: '40px auto', borderRadius: '40px', position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: '40px', background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            {/* Left Side: Vertically Centered */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Chip label="Why Choose Us" sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, mb: 3, fontSize: 16, px: 2, py: 1, borderRadius: 2 }} />
              <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
                What Makes Our Education Experience Different
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
                We combine innovative teaching methods, industry expertise, and personalized learning paths to ensure your success.
              </Typography>
              <Stack spacing={3}>
                {/* 1. Expert Instructors */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <SchoolIcon sx={{ color: '#ffd600', fontSize: 36, bgcolor: 'rgba(255,214,0,0.08)', borderRadius: 2, p: 1 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>Expert Instructors</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Learn from industry professionals with years of real-world experience.
                    </Typography>
                  </Box>
                </Box>
                {/* 2. Flexible Learning */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <LaptopChromebookIcon sx={{ color: '#ffd600', fontSize: 36, bgcolor: 'rgba(255,214,0,0.08)', borderRadius: 2, p: 1 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>Flexible Learning</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Study at your own pace with our flexible online and in-person options.
                    </Typography>
                  </Box>
                </Box>
                {/* 3. Elevate Your Institution's Reputation */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <TrendingUpIcon sx={{ color: '#ffd600', fontSize: 36, bgcolor: 'rgba(255,214,0,0.08)', borderRadius: 2, p: 1 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>Elevate Your Institution's Reputation</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      By partnering with Startdom Education, you can enhance your college's standing and visibility in the education landscape.
                    </Typography>
                  </Box>
                </Box>
                {/* 4. Government Recognition and Funding */}
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                  <EmojiEventsIcon sx={{ color: '#ffd600', fontSize: 36, bgcolor: 'rgba(255,214,0,0.08)', borderRadius: 2, p: 1 }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 700 }}>Government Recognition and Funding</Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                      Startdom Education has a deep understanding of state and central government schemes that promote startups and entrepreneurship.
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Grid>
            {/* Right Side: Image at Top Right with Card to the Right */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end' }}>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                <Box
                  component="img"
                  src={groupPhoto}
                  alt="Group Photo"
                  sx={{ width: 320, height: 240, objectFit: 'cover', borderRadius: 4, boxShadow: 6, bgcolor: 'transparent', display: 'block' }}
                />
                <Paper
                  elevation={6}
                  sx={{
                    bgcolor: 'white',
                    color: '#3d1766',
                    px: 3,
                    py: 2,
                    borderRadius: 3,
                    minWidth: 220,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                    boxShadow: '0 8px 32px rgba(61,23,102,0.15)',
                  }}
                >
                  <CheckCircleIcon sx={{ color: '#ffd600', fontSize: 32 }} />
                  <Box>
                    <Typography fontWeight={700} sx={{ color: '#3d1766' }}>98% Success Rate</Typography>
                    <Typography variant="body2" sx={{ color: '#3d1766', opacity: 0.8 }}>
                      Our students consistently achieve their learning goals and career objectives after completing our programs.
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Testimonials Section */}
      <Box id="testimonials-section" data-aos="zoom-in" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', py: 10, width: '1390px', maxWidth: '100%', margin: '40px auto', borderRadius: '40px', position: 'relative', height: 600, display: 'flex', flexDirection: 'column', justifyContent: 'center', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: '40px', background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Chip label="Testimonials" sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, mb: 2, fontSize: 16, px: 2, py: 1, borderRadius: 2 }} />
            <Typography variant="h3" align="center" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
              What Our Students Say
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
              Hear from our students about how our programs have transformed their careers and lives.
            </Typography>
          </Box>
          {/* Carousel Implementation */}
          <Box sx={{ position: 'relative', width: '100%' }}>
            <Button onClick={handleTestimonialPrev} sx={{ position: 'absolute', left: -60, top: '50%', transform: 'translateY(-50%)', zIndex: 2, minWidth: 0, bgcolor: 'white', color: '#3d1766', borderRadius: '50%', boxShadow: 2, p: 1, '&:hover': { bgcolor: '#ffd600', color: '#3d1766' } }}>
              &#8592;
            </Button>
            <Grid container spacing={4} justifyContent="center">
              {visibleTestimonials.map((testimonial, idx) => (
                <Grid item xs={12} sm={6} md={4} key={idx}>
                  <Box sx={{ border: '1.5px solid #b39ddb', borderRadius: 4, bgcolor: 'white', color: '#3d1766', p: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: 2, maxWidth: 280, width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar src={testimonial.avatar} alt={testimonial.name} sx={{ width: 48, height: 48, mr: 2 }} />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#3d1766' }}>{testimonial.name}</Typography>
                        <Typography variant="body2" sx={{ color: '#7c4dff' }}>{testimonial.role}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#3d1766' }}>
                      '{testimonial.quote}'
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Button onClick={handleTestimonialNext} sx={{ position: 'absolute', right: -60, top: '50%', transform: 'translateY(-50%)', zIndex: 2, minWidth: 0, bgcolor: 'white', color: '#3d1766', borderRadius: '50%', boxShadow: 2, p: 1, '&:hover': { bgcolor: '#ffd600', color: '#3d1766' } }}>
              &#8594;
            </Button>
            {/* Dots */}
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 1 }}>
              {Array.from({ length: totalTestimonialSlides }).map((_, idx) => (
                <Box key={idx} sx={{ width: 16, height: 8, borderRadius: 4, bgcolor: idx === testimonialSlide ? '#ffd600' : '#e0e0e0', transition: 'all 0.3s' }} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
      {/* Our Trusted Institutions Section */}
      <Box id="trusted-institutions-section" data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', py: 8, width: '1390px', maxWidth: '100%', margin: '40px auto', borderRadius: '40px', position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: '40px', background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Container maxWidth="lg">
          <Typography variant="h3" align="center" sx={{ color: '#ffd600', fontWeight: 700, mb: 2 }}>
            Our Trusted Institutions
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4 }}>
            Proudly partnered with leading colleges and universities
          </Typography>
          <Grid container spacing={4} justifyContent="center" alignItems="center">
            {[
              { src: ritLogo, alt: 'RIT' },
              { src: kalasalingamLogo, alt: 'Kalasalingam College' },
              { src: vvLogo, alt: 'VV College of Engineering' },
              { src: tnauLogo, alt: 'TNAU EDII-KABIF' },
              { src: reachLogo, alt: 'Reach the Unreachable' },
              { src: psnLogo, alt: 'PSN College of Engineering' },
              { src: dutyLogo, alt: 'Duty College' },
              { src: collogeLogo, alt: 'Colloge' },
              { src: popesLogo, alt: "Pope's College" },
              { src: chatolicLogo, alt: "St. Xavier's Catholic College of Engineering" },
              { src: stLogo, alt: 'ST College' },
              { src: scadLogo, alt: 'SCAD College of Engineering & Technology' },
              { src: fxexLogo, alt: 'Francis Xavier Engineering College' },
              { src: college2Logo, alt: 'College 2' },
              { src: psrrLogo, alt: 'PSRR College of Engineering' },
            ].map((logo, idx) => (
              <Grid item xs={6} sm={4} md={3} lg={2} key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{ width: 100, height: 100, objectFit: 'contain', bgcolor: 'white', borderRadius: 2, p: 1, boxShadow: 2 }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      <style>{`
        @keyframes animatedBg {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </Box>
  );
};

export default Home; 