import { changeLoanSize } from "../store/loanSlice";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import { useDispatch } from "react-redux";



const LoanSlider = styled(Slider)({
  color: "#52af77",
  height: 4,
  "& .MuiSlider-track": {
    border: "none"
  },
  '& .MuiSlider-markLabel[data-index="0"]': {
    transform: "translateX(0%)"
  },
  '& .MuiSlider-markLabel[data-index="1"]': {
    transform: "translateX(-100%)"
  },
  "& .MuiSlider-thumb": {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "7px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit"
    },
    "&:before": {
      display: "none"
    }
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
    "&:before": { display: "none" },
    "&.MuiSlider-valueLabelOpen": {
      transform: "translate(50%, -100%) rotate(-45deg) scale(1)"
    },
    "& > *": {
      transform: "rotate(45deg)"
    }
  }
});
const marks = [
  {
    value: 1000,
    label: "$1,000"
  },
  {
    value: 500000,
    label: "$500,000"
  }
];

export default function CustomizedSlider() {
  
  const dispatch = useDispatch()
  const handleChange = (event: Event, newValue: number | number[]) => {
    dispatch(changeLoanSize(newValue))
  };

  return (  
    <div className="loan">
      <LoanSlider
        min={1000}
        max={500000}
        onChange={handleChange}
        defaultValue={0}
        step={5000}
        marks={marks}
      />
    </div> 
  );
}
