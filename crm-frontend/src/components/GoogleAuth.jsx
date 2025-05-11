import React from 'react';
import { GoogleLogin } from 'react-google-login';
export default function GoogleAuth({ onSuccess }) {
  return (
    <div className="flex h-screen justify-center items-center">
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_ID}
        buttonText="Login with Google"
        onSuccess={resp => onSuccess(resp.tokenId)}
        onFailure={console.error}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}