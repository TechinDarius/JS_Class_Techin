import { useState } from "react";

const message = ["Learn React", "Apply for jobs", "Invest your new income"];


export default function App(){
  return(
    <div>
    <Steps/>
    <Steps/>
    <Steps/>
    <Steps/>
  </div>
  )
};
  
function Steps() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    step > 1 ? setStep((s) => s - 1) : setStep(3);
  }
  function handleNext() {
    step < 3 ? setStep((s) => s + 1) : setStep(1);
  }

  return (
    <div style={{margin:'5px',padding:"10px", backgroundColor:"blue", width:'300px', color:"red"}}>
      <button style={{position:'relative',left:'275px'}} onClick={() => setIsOpen((is) => !is)}>&times;</button>

      {isOpen && (
        <div className="steps" style={{backgroundColor:'lightgray', padding:'10px', marginTop:'10px'}}>
          <div
            style={{ display: "flex", flexDirection: "row", gap: "45px" }}
            className="numbers"
          >
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>

          <p className="message">
            Step {step}: {message[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{
                backgroundColor: "#07950f2",
                color: "#000",
                marginRight: "20px",
              }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#07950f2", color: "#000" }}
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

