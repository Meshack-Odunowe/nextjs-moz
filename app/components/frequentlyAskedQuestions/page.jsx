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
      ? '#b97eed'
      : '#e6d8f2',
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
    <div  className='h-screen max-w-[1000px] mx-auto my-44 rounded-md '>
      <h5 className='text-3xl text-center font-semibold my-20'>FREQUENTLY ASKED QUESTIONS</h5>
      <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')} >
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
          <Typography  className=' rounded-md text-purple-900 py-4 px-8 w-full' >What is Mozisha?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha is a platform dedicated to nurturing Africa's premium talents and facilitating their access to employment opportunities. We also specialize in providing outsourcing solutions to elevate the potential of startups.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>How does Mozisha support talent development?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha offers immersive learning experiences and mentorship programs to help talents develop market-relevant skills.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>What are Mozisha’s training areas

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha carefully selects its training areas based on market demands, emerging trends, and opportunities for job creation. We understand that the job market is constantly evolving, and it is essential to offer training programs that equip our students with the skills and knowledge that are in demand. Our current training domains include: data, design, research, sales and marketing.
          </Typography>
        </AccordionDetails>
      </Accordion><Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>How does Mozisha connect talents with global businesses? 
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          We collaborate with global businesses for outsourcing and recruitment opportunities. Talents who complete our programs may have the chance to be matched with these businesses based on their skills and preferences.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>How can Mozisha help my business? 

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Using its premium talents, Mozisha offers a range of services, including operations, sales, marketing, executive assistant support, customer service, IT and technical support, among others. By partnering with us, you can focus on your core business activities while we do the heavy lifting.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'> Are Mozisha programmes only for talents in Africa?


</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          While our primary focus is on nurturing African talents, Mozisha is open to individuals from diverse backgrounds who are interested in participating in our programs.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    
      
     
      
    </div>
  );
}
