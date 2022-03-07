import SignupForm from "../components/SignupForm";
import {useState} from 'react'
import SignupFormSuccess from "../components/SignupFormSuccess";



export default function Form() {
    const [formIsSubmitted , setFormIsSubmitted] = useState(false)

    const submitForm = () => {
        setFormIsSubmitted(true)
    }
  return (
    <div>
      {!formIsSubmitted ? (
          <SignupForm submitForm={submitForm}/>
      ) : (
          <SignupFormSuccess/>
      
      )}
    </div>
  );
}