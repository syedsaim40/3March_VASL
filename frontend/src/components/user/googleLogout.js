import React from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId =
  '1068904748671-ngjq97fgfjtgp3e82efhf4dmd09j4dkf.apps.googleusercontent.com';

function Logout() {
  const onSuccess = () => {
    console.log('Logout hogya hai');
    alert('Logout hogya hai');
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;