import { Grid } from "@mui/material";
import { MyAccordion } from '../components/MyAccordion'
import LoanSlider from '../components/LoanSlider'
import Tooltips from '../assets/data/tooltips.json'
import Stepper from '../components/Stepper'
import { useAppSelector } from "../store/redux";
import { useState } from "react";



export default function LoanPage() {
    const tips = Tooltips.tooltips

    const [openTip,setOpenTip] = useState<number | boolean>(0)

    const loanSize = useAppSelector(state => state.loan.loanSize)
    
    
    const handleChange = (isExpanded:boolean,id:number): void => {
        
        setOpenTip(isExpanded ? id : 0) 
    };
    return (   
        <Grid container style={{ height:"100vh", width:'100vw' }}>
            <Grid item xs={12} md={4} lg={4} className="tipsContainer">
                <Grid item container xs={12} md={12} lg={12} className="appBar">
                    <div className="logo">
                        <span>REACT-DEMO COMPANY</span>
                    </div>
                    <button  className="login">Log in</button>
                </Grid>
                <Grid item container className="accordionsBlock" xs={12} md={12} lg={12}>
                    {
                        tips.map(tip => <MyAccordion key={tip.id} onChange={handleChange} expanded= {openTip === tip.id } {...tip}/>)                        
                    }
                </Grid>                
            </Grid>   
            <Grid item xs={12} md={8} lg={8}  className="loanContainer">          
                <Grid item container style={{justifyContent:"center"}} xs={12} md={12} lg={12}  >
                    <Grid item className="stepper" xs={12} md={12} lg={12}>
                           <Stepper/>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                            <div className="loanTitle">How much do you need to borrow?</div>
                            <span className="loanDescription">You can estimate your loan size and always change it later</span>
                    </Grid>
                    <Grid item xs={12} md={8} lg={8}>
                           <div className="loanBlock">
                                <div className="title">
                                    <span>Loan size</span>
                                </div>
                                <div className="loanSize">
                                    ${loanSize.toLocaleString('en')}
                                </div>
                                <LoanSlider/>
                           </div>
                           <button className="nextStep" disabled={ loanSize === 1000 }>Continue</button>
                    </Grid>
                </Grid>
            </Grid>          
        </Grid>
      
    );
  }