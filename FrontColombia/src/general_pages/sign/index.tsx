import React, { useState } from 'react';
import SignIn from '../../components/signin/index.tsx';
import SignUp from '../../components/signup/index.tsx';
import endpoints from '../../endpoint/index.tsx';

const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  const ToggleButton = () => (
    <p className="mt-4 text-center">
      {isLoginView ? (
        <>
          Don't have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleView}
          >
            Sign Up
          </button>
        </>
      ) : (
        <>
          Already have an account?{' '}
          <button
            className="text-blue-500 hover:underline"
            onClick={toggleView}
          >
            Sign In
          </button>
        </>
      )}
    </p>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {isLoginView ? <SignIn /> : <SignUp />}
          <ToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
