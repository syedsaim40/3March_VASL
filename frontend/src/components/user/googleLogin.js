import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
// refresh token

// const clientId =
//     '1068904748671-ngjq97fgfjtgp3e82efhf4dmd09j4dkf.apps.googleusercontent.com';

function Login() {
  const onSuccess = (response) => {
    console.log(response);
    axios({
      method: "POST",
      url: "http://localhost:4000/api/vasal/googlelogin",
      data: { tokenId: response.tokenId },
    }).then((response) => {
      console.log("Google login success", response);
    });
  };

  const onFailure = (res) => {
    console.log(res);
  };
  return (
    <div>
      <GoogleLogin
        clientId="1068904748671-ngjq97fgfjtgp3e82efhf4dmd09j4dkf.apps.googleusercontent.com"
        buttonText="Login With Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
      />
    </div>
  );
}

export default Login;
