/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem', color:'#b97eed' }} />}
    {...props}
  />
))(({ theme }) => ({
  
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#fff'
      : '#f6f6f6',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  border: '1px solid purple',
}));

export default function FrequentlyAskedQuestions() {
  const [expanded, setExpanded] =useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div  className='h-full max-w-[1000px] mx-auto my-44 rounded-md '>
      <h5 className='text-3xl text-center font-semibold my-20'>FREQUENTLY ASKED QUESTIONS</h5>
      <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
          <Typography  className=' rounded-md  py-4 px-8 w-full' >What do we do at Mozisha? .</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha nurtures top-tier African technology talent through its innovative, practice-based model. We also empower fast-growing companies to build remote data, sales, marketing, and operations teams in Africa, granting them access to stellar talent at competitive rates.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'>How does Mozisha differ from other competitors?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Our commitment to excellence shines through our innovative model, where we meticulously identify and cultivate premium talent to perfectly match the specific needs of our partner businesses. Leveraging our extensive network and deep expertise, we empower companies to access a pool of highly skilled African professionals capable of driving innovation, efficiency, and growth – all at highly competitive rates. Whether you require one or several talented individuals, Mozisha streamlines the recruitment process, enabling you to seamlessly scale your team within a matter of days.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'>How does Mozisha training work?

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Driven by our innovative, practice-based training model, young Africans gain the competitive edge to thrive on the global stage. This comprehensive program includes immersive skills training, real-world capstone projects, expert mentorship, and practical apprenticeship opportunities.
          </Typography>
        </AccordionDetails>
      </Accordion><Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'>How does the mentorship programme at Mozisha work?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Designed for your success, the Mozisha Mentorship Program is a customized, 3- month journey. Whether you're an emerging professional ready to take the next step or an aspiring talent eager to learn from the best, we connect you with seasoned experts who share your path and achievements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'>How does Mozisha apprenticeship work?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha Apprenticeship pairs talented Africans with businesses for an immersive 3-month training program. This hands-on experience equips young individuals with the practical skills they need to excel in the ever-evolving world of technology.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'> What industries does Mozisha serve?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha connects fast-growing businesses across diverse sectors with top-tier, pre-trained talent. Regardless of your location or industry, we meticulously match your specific needs with premium talent, ensuring a seamless integration into your team.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'> What category of talents can I hire at Mozisha?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha specializes in providing data, sales, marketing, and operations talents.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'>  How can I hire talents from Mozisha?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Fill out the needs assessment form on www.mozisha.com/business or contact us at info@mozisha.comto get started.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'> How do I request a quote or pricing information?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Kindly contact us at info@mozisha.com to get started
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'> How many countries does Mozisha serve?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha bridges the global talent gap by providing a gateway to a network of exceptionally trained professionals across 50+ African countries. We connect companies worldwide with premium African talent, facilitating meaningful partnerships that drive mutual success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'>  Does Mozisha handle compliance and Labour laws in the recruitment process?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          From substandard employment agreements to wrong contractor setups, global hiring can be a compliance minefield. Diverse benefits, fees, and pensions across countries add more complexity. Mozisha cuts through it all, ensuring you're compliant and free to focus on your business. Get top talent to boost your productivity, while we handle the payroll hassle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md  py-4 px-8 w-full'> Is Mozisha hiring? How can I apply for a job?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Register as a skilled talent seeking job opportunities on our website, and we will contact you with the next steps.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    
      
     
      
    </div>
  );
}
