const resetvalidation = (values) => {

    let errors = {};    
    if(!values.npassword){
        errors.npassword="password is required"
    }else if (values.npassword.length < 5 ){
        errors.npassword = "Password must be morethan 5 Characters"
    }
    if(values.npassword!=values.fpassword){
        errors.fpassword = "password is not matched"
    }
   
  return errors
}

export default resetvalidation;