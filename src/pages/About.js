import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Tabs,
  Tab,
} from '@mui/material';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Williams',
      role: 'Founder & CEO',
      bio: 'With over 15 years of experience in education, Dr. Williams founded EdTodo to revolutionize the way students learn.',
      avatar: 'SW',
    },
    {
      name: 'Michael Johnson',
      role: 'Head of Curriculum',
      bio: 'Michael brings his expertise in educational technology and curriculum development to create engaging learning experiences.',
      avatar: 'MJ',
    },
    {
      name: 'Emily Chen',
      role: 'Student Success Manager',
      bio: 'Emily ensures that every student receives the support they need to achieve their academic goals.',
      avatar: 'EC',
    },
  ];

  const teamMembersAI = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      bio: 'Former professor with 15+ years in education technology and a passion for accessible learning.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      funFact: '"I love hiking and have climbed 3 of the world\'s tallest peaks!"',
    },
    {
      name: 'Michael Chen',
      role: 'Chief Academic Officer',
      bio: 'Education innovator with expertise in curriculum development and learning science.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      funFact: '"I play jazz piano in my free time."',
    },
    {
      name: 'Jessica Williams',
      role: 'Head of Technology',
      bio: 'Tech leader focused on creating seamless digital learning experiences.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      funFact: '"I build robots as a hobby!"',
    },
    {
      name: 'David Rodriguez',
      role: 'Director of Student Success',
      bio: 'Dedicated to ensuring every student receives the support they need to thrive.',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
      funFact: '"I\'ve visited over 25 countries and love learning new languages."',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        data-aos="fade-up"
        sx={{
          bgcolor: 'rgba(245,245,250,0.55)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          color: 'white',
          borderRadius: 6,
          maxWidth: '90vw',
          margin: '40px auto',
          marginTop: '30mm',
          p: { xs: 2, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: 6,
            background: 'linear-gradient(120deg, rgba(108,59,191,0.12) 0%, rgba(255,214,0,0.10) 100%)',
            animation: 'animatedBg 12s ease-in-out infinite alternate',
          },
          '& > *': { position: 'relative', zIndex: 1 },
        }}
      >
        {/* Left: Text Content */}
        <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16 }}>
              About Us
            </Box>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.1 }}>
            Empowering Futures<br />Through Quality Education
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Since 2010, EdtoDo has been dedicated to providing accessible, high-quality education that transforms lives and builds careers.
          </Typography>
        </Box>
        {/* Right: Image */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/assets/hero-classroom.jpg"
            alt="Classroom"
            sx={{
              width: { xs: '100%', md: 400 },
              height: { xs: 220, md: 320 },
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: 6,
            }}
          />
        </Box>
      </Box>

      {/* Our Story Section */}
      <Box
        data-aos="fade-right"
        sx={{
          bgcolor: 'rgba(245,245,250,0.55)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          color: 'white',
          borderRadius: 6,
          maxWidth: '90vw',
          margin: '40px auto',
          p: { xs: 2, md: 6 },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: 6,
            background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)',
            animation: 'animatedBg 12s ease-in-out infinite alternate',
          },
          '& > *': { position: 'relative', zIndex: 1 },
        }}
      >
        {/* Left: Image */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mb: { xs: 4, md: 0 } }}>
          <Box
            component="img"
            src="/assets/npr-event.jpg"
            alt="NPR College Event"
            sx={{
              width: { xs: '100%', md: 420 },
              height: { xs: 220, md: 320 },
              objectFit: 'cover',
              borderRadius: 4,
              boxShadow: 6,
            }}
          />
        </Box>
        {/* Right: Story Content */}
        <Box sx={{ flex: 1, pl: { md: 6 } }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16 }}>
              Our Story
            </Box>
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '1.6rem', md: '2.2rem' }, lineHeight: 1.1 }}>
            From Small Beginnings to Global Impact
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
            EdtoDo began with a simple mission: to make quality education accessible to everyone. What started as a small team of passionate educators has grown into a global institution that has helped thousands of students achieve their dreams.
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)', mb: 3 }}>
            Our journey has been defined by innovation, dedication, and a commitment to student success. We've continuously evolved our programs to meet the changing demands of the job market while maintaining our core values of excellence, inclusivity, and integrity.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ffd600', fontSize: 28 }}>✔️</Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white' }}>Founded in 2010</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Started with just 3 instructors and 50 students</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ffd600', fontSize: 28 }}>✔️</Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white' }}>Expanded in 2015</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Opened 5 new campuses and launched online learning platform</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ color: '#ffd600', fontSize: 28 }}>✔️</Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white' }}>Global Reach by 2020</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>Now serving students in over 50 countries worldwide</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* What Drives Us Forward Section */}
      <Box
        data-aos="fade-up"
        sx={{
          bgcolor: 'rgba(245,245,250,0.55)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          color: 'white',
          borderRadius: 6,
          maxWidth: '90vw',
          margin: '40px auto',
          p: { xs: 2, md: 6 },
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: 6,
            background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)',
            animation: 'animatedBg 12s ease-in-out infinite alternate',
          },
          '& > *': { position: 'relative', zIndex: 1 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Our Mission & Values
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            What Drives Us Forward
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
            Our mission and values form the foundation of everything we do at Edtodo.
          </Typography>
        </Box>
        {/* Tabs Section */}
        <MissionVisionValuesTabs />
      </Box>

      {/* Team Section */}
      <Box
        data-aos="zoom-in"
        sx={{
          bgcolor: 'rgba(245,245,250,0.55)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          color: 'white',
          borderRadius: 6,
          maxWidth: '90vw',
          margin: '40px auto',
          p: { xs: 2, md: 6 },
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: 6,
            background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)',
            animation: 'animatedBg 12s ease-in-out infinite alternate',
          },
          '& > *': { position: 'relative', zIndex: 1 },
        }}
      >
        <Container>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
            <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
              Our Team
            </Box>
            <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1, color: 'white' }}>
              Meet the Experts Behind Edtodo
            </Typography>
            <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
              Our team of dedicated professionals brings together decades of experience in education, industry, and technology.
            </Typography>
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              mt: 2,
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'center', md: 'space-between' },
            }}
          >
            {teamMembersAI.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} lg={3} xl={3} key={index}>
                <Box
                  sx={{
                    borderRadius: 4,
                    overflow: 'hidden',
                    boxShadow: 6,
                    bgcolor: 'rgba(255,255,255,0.04)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.03)',
                      boxShadow: 12,
                      bgcolor: 'rgba(255,255,255,0.08)',
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={member.avatar}
                    alt={member.name}
                    sx={{ width: '100%', height: 140, objectFit: 'cover' }}
                  />
                  <Box sx={{ p: 1.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', fontSize: '0.9rem' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#ffd600', mb: 0.5, fontSize: '0.8rem' }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 0.5, fontSize: '0.8rem' }}>
                      {member.bio}
                    </Typography>
                    <Box sx={{ color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', fontSize: 12, mt: 0.5, display: { xs: 'block', md: 'none' } }}>
                      {member.funFact}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Upcoming Events & Open Houses Section */}
      <Box
        data-aos="fade-up"
        sx={{
          bgcolor: 'rgba(245,245,250,0.55)',
          backdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255,255,255,0.18)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
          color: 'white',
          borderRadius: 6,
          maxWidth: '90vw',
          margin: '40px auto',
          p: { xs: 2, md: 6 },
          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            borderRadius: 6,
            background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)',
            animation: 'animatedBg 12s ease-in-out infinite alternate',
          },
          '& > *': { position: 'relative', zIndex: 1 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Events
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            Upcoming Events & Open Houses
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
            Join us for informative sessions, workshops, and opportunities to connect with our community.
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              title: 'Virtual Open House',
              date: 'May 15, 2023',
              time: '6:00 PM - 8:00 PM',
              location: 'Online (Zoom)',
              description: 'Learn about our programs, meet instructors, and get your questions answered.',
            },
            {
              title: 'Web Development Workshop',
              date: 'June 2, 2023',
              time: '10:00 AM - 2:00 PM',
              location: 'Main Campus, Room 302',
              description: 'A hands-on introduction to modern web development techniques.',
            },
            {
              title: 'Career Fair',
              date: 'June 20, 2023',
              time: '9:00 AM - 4:00 PM',
              location: 'Conference Center',
              description: 'Connect with top employers looking to hire our graduates.',
            },
          ].map((event, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 4, p: 3, boxShadow: 4, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: '1.5px solid #6c3bbf' }}>
                <Typography variant="h6" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                  {event.title}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.8)', mb: 0.5 }}>
                  <Box component="span" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                    <span role="img" aria-label="calendar">📅</span>
                  </Box>
                  {event.date} • {event.time}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', color: 'rgba(255,255,255,0.8)', mb: 2 }}>
                  <Box component="span" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                    <span role="img" aria-label="location">📍</span>
                  </Box>
                  {event.location}
                </Box>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 3 }}>
                  {event.description}
                </Typography>
                <Box sx={{ mt: 'auto' }}>
                  <Box
                    component="button"
                    sx={{
                      width: '100%',
                      bgcolor: 'transparent',
                      color: 'white',
                      border: '1.5px solid #b39ddb',
                      borderRadius: 2,
                      py: 1,
                      fontWeight: 700,
                      fontSize: 16,
                      cursor: 'pointer',
                      transition: 'background 0.2s, color 0.2s',
                      '&:hover': {
                        bgcolor: '#ffd600',
                        color: '#2d0b4e',
                        borderColor: '#ffd600',
                      },
                    }}
                  >
                    Register
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
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

function MissionVisionValuesTabs() {
  const [tab, setTab] = useState(0);
  const handleChange = (event, newValue) => setTab(newValue);
  const tabContent = [
    {
      label: 'Our Mission',
      heading: 'Empowering Through Education',
      content: `At EdTodo, our mission is to empower learners everywhere by providing accessible, innovative, and high-quality education. We strive to nurture curiosity, inspire growth, and help every student unlock their full potential—regardless of background or circumstance.`
    },
    {
      label: 'Our Vision',
      heading: 'A Vision for Global Impact',
      content: `We envision a world where education is a catalyst for positive change, bridging gaps and building brighter futures. Our goal is to be a global leader in transformative learning, fostering a community where knowledge is shared, creativity is celebrated, and lifelong learning is embraced.`
    },
    {
      label: 'Our Values',
      heading: 'Our Core Values',
      content: `• Excellence: We are committed to the highest standards in teaching, learning, and service.\n• Inclusivity: We celebrate diversity and ensure that everyone has equal access to opportunities.\n• Innovation: We embrace new ideas and technologies to enhance the learning experience.\n• Integrity: We act with honesty, transparency, and respect in all that we do.\n• Student Success: We put learners at the heart of every decision, supporting their journeys from start to finish.`
    }
  ];
  return (
    <>
      <Tabs
        value={tab}
        onChange={handleChange}
        centered
        sx={{ mb: 4, bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 2 }}
        TabIndicatorProps={{ style: { background: '#ffd600' } }}
      >
        {tabContent.map((t, idx) => (
          <Tab key={t.label} label={t.label} sx={{ color: 'white', fontWeight: 700, fontSize: 16 }} />
        ))}
      </Tabs>
      <Box sx={{ maxWidth: 900, mx: 'auto', bgcolor: 'rgba(255,255,255,0.04)', borderRadius: 3, p: { xs: 2, md: 4 }, boxShadow: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'white' }}>{tabContent[tab].heading}</Typography>
        <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)' }}>
          {tabContent[tab].content.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </Typography>
      </Box>
    </>
  );
}

export default About; 