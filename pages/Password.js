import Reset from '../components/Reset'
import {useState} from 'react'
import ResetForm from '../components/ResetForm'



export default function Password() {
    const [passwordIsSubmitted , setPasswordIsSubmitted] = useState(false)

    const resetForm = () => {
        setPasswordIsSubmitted(true)
    }
  return (
    <div>
      {!passwordIsSubmitted ? (
          <Reset resetForm={resetForm}/>
      ) : (
          <ResetForm />
      
      )}
    </div>
  );
}