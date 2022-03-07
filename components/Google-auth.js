import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

export class Googleauth extends Component {
  
    responseGoogle = (response)=> {
        console.log(response)
        console.log(response.profileObj)
    }


  render() {
    return (
      <div>
        <GoogleLogin
        clientId='525417722220-30j2nq0c8mrsmolfh716vdgs9lhvlbsp.apps.googleusercontent.com'
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        cookiePolicy={'single_host_origin'}


        />
      </div>
    );
  }
}

export default Googleauth;