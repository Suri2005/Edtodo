import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
  const services = [
    {
      title: 'Online Tutoring',
      description: 'Virtual one-on-one sessions with expert tutors from anywhere in the world.',
      features: [
        'Interactive whiteboard',
        'Screen sharing',
        'Real-time feedback',
        'Recorded sessions',
      ],
      icon: '💻',
    },
    {
      title: 'Homework Help',
      description: 'Get assistance with assignments and projects from qualified tutors.',
      features: [
        '24/7 availability',
        'Step-by-step solutions',
        'Concept clarification',
        'Progress tracking',
      ],
      icon: '📚',
    },
    {
      title: 'Study Resources',
      description: 'Access to comprehensive study materials and practice exercises.',
      features: [
        'Custom worksheets',
        'Practice tests',
        'Video tutorials',
        'Study guides',
      ],
      icon: '📖',
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
        }}
      >
        {/* Left: Text Content */}
        <Box sx={{ flex: 1, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16 }}>
              Our Services
            </Box>
          </Box>
          <Typography variant="h2" sx={{ fontWeight: 800, mb: 2, fontSize: { xs: '2rem', md: '2.8rem' }, lineHeight: 1.1 }}>
            Comprehensive Education<br />& Training Solutions
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)' }}>
            Discover our wide range of educational services designed to help individuals and organizations achieve their learning goals.
          </Typography>
        </Box>
        {/* Right: Image */}
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src="/assets/services-hero.jpg"
            alt="Education and Training"
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

      {/* Our Service Categories Section */}
      <ServiceCategoriesSection />

      {/* How We Deliver Excellence Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 6 }, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Our Process
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 1 }}>
            How We Deliver Excellence
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
            Our systematic approach ensures that we deliver high-quality educational services that meet your specific needs.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'stretch', justifyContent: 'center', gap: 3, mt: 4 }}>
          {[
            {
              step: '01',
              title: 'Needs Assessment',
              desc: 'We begin by understanding your specific learning goals, challenges, and requirements.',
            },
            {
              step: '02',
              title: 'Custom Solution Design',
              desc: 'Our experts design a tailored solution that addresses your unique educational needs.',
            },
            {
              step: '03',
              title: 'Implementation',
              desc: 'We deliver the solution with a focus on engagement, effectiveness, and excellence.',
            },
            {
              step: '04',
              title: 'Evaluation & Refinement',
              desc: 'We measure outcomes, gather feedback, and continuously improve our services.',
            },
          ].map((item, idx, arr) => (
            <Box key={item.step} sx={{
              flex: 1,
              minWidth: 220,
              bgcolor: '#3d1766',
              border: '2px solid #ffd600',
              borderRadius: 4,
              p: 3,
              position: 'relative',
              mb: { xs: 3, md: 0 },
            }}>
              <Typography variant="h4" sx={{ color: '#ffd600', fontWeight: 700, mb: 1 }}>{item.step}</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>{item.title}</Typography>
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>{item.desc}</Typography>
              {/* Arrow */}
              {idx < arr.length - 1 && (
                <Box sx={{
                  display: { xs: 'none', md: 'block' },
                  position: 'absolute',
                  right: -28,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: 32,
                  color: '#ffd600',
                  zIndex: 1,
                }}>
                  &#8594;
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Success Stories Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 6 }, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Success Stories
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            Real Results from Our Services
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
            See how our educational services have transformed organizations and individuals.
          </Typography>
        </Box>
        <Box sx={{
          overflowX: { xs: 'visible', md: 'auto' },
          width: '100%',
          pb: 2,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            minWidth: { md: `${2 * 400}px` },
          }}>
            {[
              {
                title: 'TechCorp Workforce Transformation',
                image: '/assets/techcorp.jpg',
                badge: 'Corporate Training',
                description: 'We helped TechCorp upskill 500+ employees in cloud computing, resulting in a 30% increase in project efficiency and $2M in cost savings.',
                button: 'Read Full Case Study',
              },
              {
                title: 'City College Curriculum Redesign',
                image: '/assets/citycollege.jpg',
                badge: 'Educational Consulting',
                description: "Our curriculum redesign for City College's computer science program led to a 45% increase in enrollment and improved graduate employment rates.",
                button: 'Read Full Case Study',
              },
            ].map((story, idx) => (
              <Box key={idx} sx={{ bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 4, p: 0, boxShadow: 4, minWidth: { xs: 'auto', md: 380 }, maxWidth: 400, flex: '0 0 380px', height: '100%', display: 'flex', flexDirection: 'column', border: '1.5px solid #6c3bbf', overflow: 'hidden' }}>
                <Box sx={{ width: '100%', height: 220, bgcolor: '#3d1766', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Box
                    component="img"
                    src={story.image}
                    alt={story.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover', borderTopLeftRadius: 4, borderTopRightRadius: 4 }}
                  />
                </Box>
                <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 15, mb: 1 }}>
                      {story.badge}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>
                      {story.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>{story.description}</Typography>
                  </Box>
                  <Box sx={{ mt: 'auto' }}>
                    <Button
                      variant="outlined"
                      sx={{
                        width: '100%',
                        color: 'white',
                        borderColor: '#b39ddb',
                        fontWeight: 700,
                        borderRadius: 2,
                        '&:hover': {
                          bgcolor: '#ffd600',
                          color: '#2d0b4e',
                          borderColor: '#ffd600',
                        },
                      }}
                    >
                      {story.button}
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* FAQ Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 6 }, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            FAQs
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            Frequently Asked Questions
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
            Find answers to common questions about our educational services.
          </Typography>
        </Box>
        <Box sx={{
          overflowX: { xs: 'visible', md: 'auto' },
          width: '100%',
          pb: 2,
        }}>
          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: 4,
            minWidth: { md: `${6 * 400}px` },
          }}>
            {[
              {
                q: 'How are your educational services customized?',
                a: "We begin with a thorough needs assessment to understand your specific goals and challenges. Based on this, our experts design a tailored solution that addresses your unique requirements, whether you're an individual, business, or educational institution."
              },
              {
                q: 'Do you offer both online and in-person services?',
                a: 'Yes, we provide flexible delivery options including fully online, in-person, and hybrid approaches. Our goal is to accommodate your preferences and ensure the most effective learning experience.'
              },
              {
                q: 'How do you measure the effectiveness of your services?',
                a: 'We use a comprehensive evaluation framework that includes pre and post-assessments, participant feedback, performance metrics, and long-term outcome tracking to ensure our services deliver measurable results.'
              },
              {
                q: 'What industries do you specialize in for corporate training?',
                a: 'We have expertise across multiple industries including technology, healthcare, finance, manufacturing, and education. Our team includes subject matter experts from various fields who bring industry-specific knowledge to our training programs.'
              },
              {
                q: 'How long does it typically take to develop a custom program?',
                a: 'The timeline varies based on the complexity and scope of the program. A standard corporate training project might take 4–6 weeks to develop, while a comprehensive curriculum redesign for an educational institution could take 3–6 months.'
              },
              {
                q: 'Do you provide ongoing support after service delivery?',
                a: 'Yes, we offer various support options including follow-up sessions, resource libraries, community forums, and coaching to ensure sustainable results and continuous improvement.'
              },
            ].map((faq, idx) => (
              <Box key={idx} sx={{ bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 4, p: 3, boxShadow: 2, border: '1.5px solid #b39ddb', color: 'white', minWidth: { xs: 'auto', md: 380 }, maxWidth: 400, flex: '0 0 380px', height: '100%' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'white', mb: 1 }}>{faq.q}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>{faq.a}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 8 }, textAlign: 'center', position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Get Started
          </Box>
          <Typography variant="h3" sx={{ fontWeight: 800, mb: 2, color: '#3d1766', fontSize: { xs: '2rem', md: '2.8rem' } }}>
            Ready to Transform Your Learning Experience?
          </Typography>
          <Typography variant="h6" sx={{ color: '#6c3bbf', mb: 4, maxWidth: 700 }}>
            Contact us today to discuss your educational needs and discover how our services can help you achieve your goals.
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            sx={{ bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, borderRadius: 2, px: 4, boxShadow: 0, '&:hover': { bgcolor: '#ffe066' } }}
            endIcon={<span style={{ fontSize: 20, marginLeft: 4 }}>→</span>}
            href="/contact"
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{ color: '#3d1766', borderColor: '#b39ddb', fontWeight: 700, borderRadius: 2, px: 4, bgcolor: 'white', '&:hover': { bgcolor: '#f3eaff', borderColor: '#6c3bbf' } }}
            href="/programs"
          >
            Explore Programs
          </Button>
        </Box>
      </Box>

      {/* Client Testimonials Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 6 }, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Testimonials
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            What Our Clients Say
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {[
            {
              name: "Priya S.",
              quote: "EdtoDo's training helped our team master new technologies quickly. The results were immediate and impressive!",
              role: "HR Manager, TechCorp"
            },
            {
              name: "Dr. Anil Kumar",
              quote: "The curriculum redesign exceeded our expectations. Our students are more engaged and successful than ever.",
              role: "Dean, City College"
            }
          ].map((testimonial, idx) => (
            <Grid item xs={12} md={6} key={idx}>
              <Box sx={{ bgcolor: 'rgba(255,255,255,0.08)', borderRadius: 4, p: 3, boxShadow: 2, border: '1.5px solid #b39ddb', color: 'white', height: '100%' }}>
                <Typography variant="body1" sx={{ fontStyle: 'italic', mb: 2 }}>
                  "{testimonial.quote}"
                </Typography>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{testimonial.name}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>{testimonial.role}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Our Partners / Trusted By Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 6 }, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Our Partners
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            Trusted By Leading Organizations
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mb: 2 }}>
          {[1,2,3,4,5].map((n) => (
            <Box key={n} component="img" src={`/assets/partner${n}.png`} alt={`Partner ${n}`} sx={{ height: 60, width: 120, objectFit: 'contain', bgcolor: 'white', borderRadius: 2, p: 1, boxShadow: 1 }} />
          ))}
        </Box>
      </Box>

      {/* Awards & Recognitions Section */}
      <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '60px auto', p: { xs: 2, md: 6 }, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
          <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
            Awards
          </Box>
          <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
            Awards & Recognitions
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap', mb: 2 }}>
          {[
            { img: '/assets/award1.png', label: 'Top EdTech Innovator 2023' },
            { img: '/assets/award2.png', label: 'Best Learning Platform' },
            { img: '/assets/award3.png', label: 'Excellence in Training' },
          ].map((award, idx) => (
            <Box key={idx} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
              <Box component="img" src={award.img} alt={award.label} sx={{ height: 60, width: 60, objectFit: 'contain', bgcolor: 'white', borderRadius: '50%', p: 1, boxShadow: 1, mb: 1 }} />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', fontWeight: 700 }}>{award.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

function ServiceCategoriesSection() {
  const [tab, setTab] = useState('individuals');

  const categories = {
    individuals: [
      {
        icon: '📈',
        title: 'Career-Focused Programs',
        description: 'Intensive training programs designed to prepare you for specific career paths in high-demand fields.',
        features: [
          'Industry-aligned curriculum',
          'Hands-on projects',
          'Career placement assistance',
          'Flexible learning options',
        ],
      },
      {
        icon: '📖',
        title: 'Skill Development Workshops',
        description: 'Short-term workshops focused on building specific skills that enhance your professional profile.',
        features: [
          'Practical skill-building',
          'Expert-led sessions',
          'Interactive learning',
          'Certificate of completion',
        ],
      },
      {
        icon: '🎓',
        title: 'Certification Programs',
        description: 'Prepare for industry-recognized certifications that validate your expertise and boost your credentials.',
        features: [
          'Exam preparation',
          'Practice tests',
          'Study materials',
          'Certification guidance',
        ],
      },
      {
        icon: '👤',
        title: 'One-on-One Mentoring',
        description: 'Personalized guidance from industry experts to help you navigate your learning and career journey.',
        features: [
          'Customized learning plan',
          'Regular feedback',
          'Career advice',
          'Networking opportunities',
        ],
      },
      {
        icon: '💡',
        title: 'Online Learning Resources',
        description: 'Self-paced digital learning materials that allow you to learn anytime, anywhere according to your schedule.',
        features: [
          '24/7 access',
          'Interactive content',
          'Progress tracking',
          'Mobile compatibility',
        ],
      },
      {
        icon: '🧭',
        title: 'Career Counseling',
        description: 'Professional guidance to help you make informed decisions about your education and career path.',
        features: [
          'Career assessment',
          'Goal setting',
          'Action planning',
          'Job search strategies',
        ],
      },
    ],
    businesses: [
      {
        icon: '👤',
        title: 'Corporate Training',
        description: 'Customized training programs designed to upskill your workforce and address specific business needs.',
        features: [
          'Tailored curriculum',
          'On-site or virtual delivery',
          'Progress reporting',
          'ROI measurement',
        ],
      },
      {
        icon: '🎖️',
        title: 'Leadership Development',
        description: 'Programs focused on building effective leaders who can drive organizational success.',
        features: [
          'Management skills',
          'Strategic thinking',
          'Team building',
          'Change management',
        ],
      },
      {
        icon: '📈',
        title: 'Talent Assessment',
        description: 'Comprehensive evaluation tools to identify skills gaps and inform hiring and development decisions.',
        features: [
          'Skills assessment',
          'Personality profiling',
          'Competency mapping',
          'Development planning',
        ],
      },
    ],
    institutions: [
      {
        icon: '📖',
        title: 'Curriculum Development',
        description: 'Expert assistance in designing modern, effective curricula that meet educational standards and student needs.',
        features: [
          'Needs assessment',
          'Content creation',
          'Assessment design',
          'Continuous improvement',
        ],
      },
      {
        icon: '👤',
        title: 'Faculty Training',
        description: 'Professional development programs for educators to enhance teaching effectiveness and student engagement.',
        features: [
          'Teaching methodologies',
          'Technology integration',
          'Student assessment',
          'Classroom management',
        ],
      },
      {
        icon: '📈',
        title: 'Educational Technology',
        description: 'Implementation of digital tools and platforms to enhance the learning experience and educational outcomes.',
        features: [
          'LMS implementation',
          'Digital content creation',
          'Technology training',
          'Analytics and reporting',
        ],
      },
    ],
  };

  return (
    <Box data-aos="fade-up" sx={{ bgcolor: 'rgba(245,245,250,0.55)', backdropFilter: 'blur(16px)', border: '1.5px solid rgba(255,255,255,0.18)', boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)', color: '#3d1766', borderRadius: 6, maxWidth: '1200px', margin: '40px auto', p: { xs: 2, md: 6 }, mt: 6, position: 'relative', '::before': { content: '""', position: 'absolute', inset: 0, zIndex: 0, borderRadius: 6, background: 'linear-gradient(120deg, rgba(108,59,191,0.10) 0%, rgba(255,214,0,0.08) 100%)', animation: 'animatedBg 12s ease-in-out infinite alternate' }, '& > *': { position: 'relative', zIndex: 1 } }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        <Box sx={{ display: 'inline-block', bgcolor: '#ffd600', color: '#2d0b4e', fontWeight: 700, px: 2, py: 0.5, borderRadius: 2, fontSize: 16, mb: 2 }}>
          What We Offer
        </Box>
        <Typography variant="h3" align="center" sx={{ fontWeight: 800, mb: 1 }}>
          Our Service Categories
        </Typography>
        <Typography variant="h6" align="center" sx={{ color: 'rgba(255,255,255,0.8)', maxWidth: 700 }}>
          We provide a comprehensive range of educational services to meet diverse learning needs.
        </Typography>
      </Box>
      {/* Tabs */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
        <Box sx={{
          display: 'flex',
          bgcolor: 'rgba(255,255,255,0.08)',
          borderRadius: 2,
          p: 0.5,
          gap: 1,
        }}>
          <Box
            sx={{ px: 2, py: 1, bgcolor: tab === 'individuals' ? '#6c3bbf' : 'transparent', color: tab === 'individuals' ? 'white' : 'rgba(255,255,255,0.7)', borderRadius: 2, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}
            onClick={() => setTab('individuals')}
          >
            For Individuals
          </Box>
          <Box
            sx={{ px: 2, py: 1, bgcolor: tab === 'businesses' ? '#6c3bbf' : 'transparent', color: tab === 'businesses' ? 'white' : 'rgba(255,255,255,0.7)', borderRadius: 2, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}
            onClick={() => setTab('businesses')}
          >
            For Businesses
          </Box>
          <Box
            sx={{ px: 2, py: 1, bgcolor: tab === 'institutions' ? '#6c3bbf' : 'transparent', color: tab === 'institutions' ? 'white' : 'rgba(255,255,255,0.7)', borderRadius: 2, fontWeight: 700, fontSize: 16, cursor: 'pointer' }}
            onClick={() => setTab('institutions')}
          >
            For Institutions
          </Box>
        </Box>
      </Box>
      {/* Service Cards Grid */}
      <Box sx={{
        overflowX: { xs: 'visible', md: 'auto' },
        width: '100%',
        pb: 2,
      }}>
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          minWidth: { md: `${categories[tab].length * 340}px` },
        }}>
          {categories[tab].length === 0 ? (
            <Typography align="center" sx={{ color: 'rgba(255,255,255,0.7)', width: '100%' }}>
              Coming soon.
            </Typography>
          ) : (
            categories[tab].map((service, idx) => (
              <Box
                key={idx}
                sx={{
                  bgcolor: 'rgba(255,255,255,0.10)',
                  borderRadius: 4,
                  p: 3,
                  boxShadow: 6,
                  minWidth: { xs: 'auto', md: 320 },
                  maxWidth: 340,
                  flex: '0 0 320px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  border: '1.5px solid #b39ddb',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'translateY(-8px) scale(1.03)',
                    boxShadow: 12,
                    bgcolor: 'rgba(255,255,255,0.18)',
                  },
                }}
              >
                <Box sx={{ fontSize: 48, mb: 2, color: '#ffd600', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: '#3d1766', borderRadius: '50%', width: 64, height: 64, boxShadow: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, color: 'white', mb: 1, fontSize: '1.1rem', textAlign: 'center' }}>
                  {service.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', mb: 2, textAlign: 'center' }}>
                  {service.description}
                </Typography>
                <List dense sx={{ color: '#ffd600', mb: 0, width: '100%' }}>
                  {service.features.map((feature, i) => (
                    <ListItem key={i} sx={{ py: 0, px: 0, alignItems: 'flex-start' }}>
                      <ListItemIcon sx={{ minWidth: 28, color: '#ffd600' }}>
                        <CheckCircleIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText primary={feature} primaryTypographyProps={{ fontSize: 14, color: 'rgba(255,255,255,0.9)' }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default Services; 