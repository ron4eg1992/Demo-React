import { FC } from 'react'; 

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import  OpenIcon  from '../assets/icons/openTips.svg'
import  CloseIcon  from '../assets/icons/closeTips.svg'

  

const useStyles = makeStyles((theme: any) => ({
  root: {
    marginBottom:'20px',
    width: "100%",
    "& .Mui-expanded": {
      borderRadius:'30px'
    },
    "& .MuiIconButton-root": {
      color:'white'
    },
    '& .MuiPaper-root': {
      borderRadius:'30px'
    },
    '& .MuiAccordion-root:before': {
      content:'none'
    },
    '& .MuiAccordionSummary-content': {
      alignItems:'center'
    }
  },
  icon: {
    flexBasis: '20%',
    flexShrink: 0,
  },
  headTip: {
    paddingLeft:'10px',
    textAlign:"left",
    fontSize:'16px', 
    fontWeight:600
  },
  details: {
    minHeight:'100px',
    background: "rgb(255 255 255 / 20%)",
    borderBottomLeftRadius:"30px",
    borderBottomRightRadius:"30px",
    padding:'30px 40px',
    "& p": {
        fontWeight:600,
        textAlign:'left'
    },
  },
  accord:{    
    background:'rgb(255 255 255 / 20%)',
    border:'2px solid #ffffff17',
    color:'white',
    minHeight:'68px',

  }
}));

type AccordionTipProps = {
    id: number
    title: string
    text: string
    expanded:boolean
    onChange:(isExpanded:boolean, id:number) => void
}

export const MyAccordion:FC<AccordionTipProps> = ({ id, title, text, expanded, onChange }) => {
  const classes = useStyles();

  const handleChange = (e: React.ChangeEvent<{}>, isExpanded:boolean): void => {
      onChange(isExpanded,id)      
  };

  return (

    <div className={ classes.root }>
      <Accordion expanded={ expanded }  className={ classes.accord } onChange={ handleChange }>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={`acc-${id}`}                       
        >
        <Typography className={ classes.icon }>
            <img src={ expanded ? OpenIcon : CloseIcon } alt="icon for tip"></img>
        </Typography>
        <Typography className={ classes.headTip }>
            { title }
        </Typography>         
        </AccordionSummary>
        <AccordionDetails className={ classes.details }>
            <p>{ text }</p>
        </AccordionDetails>
      </Accordion>
          
    </div>
  );
}
