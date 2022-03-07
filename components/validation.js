const validation = (values) => {

    let errors = {};    
    if(!values.name){
        errors.name="name is required"
    }
    if(!values.email){
        errors.email="email is required"
    }else if(!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email="Email is invalid"
    }
    if(!values.password){
        errors.password="password is required"
    }else if (values.password.length < 5 ){
        errors.password = "Password must be morethan 5 Characters"
    }
    if(values.password!=values.cpassword){
        errors.cpassword = "password is not matched"
    }
   
  return errors
}

export default validation;