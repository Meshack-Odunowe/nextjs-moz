/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
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
  const [expanded, setExpanded] = React.useState('');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div  className='h-screen max-w-[1000px] mx-auto my-44 rounded-md '>
      <h5 className='text-3xl text-center font-semibold my-20'>FREQUENTLY ASKED QUESTIONS</h5>
      <Accordion expanded={expanded === 'panel1'}  onChange={handleChange('panel1')}>
        <AccordionSummary  aria-controls="panel1d-content" id="panel1d-header">
          <Typography  className=' rounded-md text-purple-900 py-4 px-8 w-full'>What is Mozisha?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Mozisha is a platform dedicated to nurturing Africa's premium talents and connecting them with global businesses. We specialize in providing outsourcing solutions to elevate the potential of startups.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>What makes Mozisha Unique?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Our uniqueness lies in our commitment to nurturing talent from over 50 countries in Africa, providing efficient outsourcing services, and fostering collaborative partnerships for global success.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>How Can Mozisha Help My Business?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Using its premium talents, Mozisha offers a range of services, including operations, sales, marketing, executive assistant support, customer service, IT and technical support, among others. By partnering with us, you can focus on your core business activities while we do the heavy lifting.
          </Typography>
        </AccordionDetails>
      </Accordion><Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>What does Mozisha offer in Sales and Marketing?
</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          We provide talents with expertise in lead generation, digital marketing campaigns (SEO, SEM, social media), content creation, email marketing, sales funnel management, and CRM to enhance your brand's reach.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography className=' rounded-md text-purple-900 py-4 px-8 w-full'>How does Mozisha handle Executive Assistant and Admin Support?

</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className='  max-w-[1000px]'>
          Our executive assistants offer top-tier administrative support, including calendar management, travel planning, data entry, and virtual receptionist services, allowing you to focus on your vision.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    
      
     
      
    </div>
  );
}
