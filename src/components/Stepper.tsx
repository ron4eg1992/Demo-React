import React from "react";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepConnector from '@material-ui/core/StepConnector';
import clsx from 'clsx';
import StepLabel from '@material-ui/core/StepLabel';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "85%",
    padding:'30px 0',
    backgroundColor:'#ffffff00'
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: 'grey',
    borderRadius: 1,
  },
  button: {
    marginRight: theme.spacing(1)
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  completed: {
    display: "inline-block"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));
const ColorlibConnector = withStyles({
    alternativeLabel: {
        top:10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    active: {
      '& $line': {
        backgroundImage:
          '#2D8F43',
          
      },
    },
    completed: {
      '& $line': {
        backgroundImage:
          '#CCCCCC',
      },
    },
    line: {
      bottom:500,
      height: 2,
      width:'100%',
      border: 0,
      backgroundColor: '#CCCCCC',
      borderRadius: 1,
    },
  })(StepConnector);
  
  const useColorlibStepIconStyles = makeStyles({
    root: {
      border: "5px solid #ccc",
      backgroundColor: '#ccc',
      zIndex: 1,
      color: '#fff',
      width: 10,
      height: 10,
      display: 'flex',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    active: {
      backgroundColor:
        'white',
      border:'5px solid #2D8F43'
    },
    completed: {
      backgroundColor:
        '#2D8F43',
    },
  });
  
  function ColorlibStepIcon(props:any) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props; 
    return (
      <div
        className={clsx(classes.root, {
          [classes.active]: active,
          [classes.completed]: completed,
        })}
      >       
      </div>
    );
  }

function getSteps() {
  return ["1", "2", "3", "4", "5"];
}

export default function LoanStepper() {
  const classes = useStyles();
  const activeStep = 0
  const steps = getSteps();

  
  return (
    <div className={classes.root}>
      <Stepper alternativeLabel activeStep={activeStep} style={{background:"#ffffff00"}} connector={<ColorlibConnector />}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  );
}
