import React, { useState } from 'react'; // Importa useState correctamente
import SignIn from '../../components/signin/index.tsx';
import SignUp from '../../components/signup/index.tsx';
import Navbar from '../../components/navbar/index.tsx'
import Footer from '../../components/footer/index.tsx';
const Login = () => {
  const [isLoginView, setIsLoginView] = useState(true);

  const toggleView = () => {
    setIsLoginView(!isLoginView);
  };

  const ToggleButton = () => (
    <p>
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
    <>
    <Navbar/>
    <div className="container mx-auto p-4">
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            {isLoginView ? <SignIn /> : <SignUp />}
            <div className="text-center mt-4">
              <ToggleButton />
            </div>
          </div>
        </div>
      </div>
     <Footer/>
    </>
  );
};

export default Login;

