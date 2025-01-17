import { useOktaAuth } from "@okta/okta-react";
import { Link } from "react-router-dom";

export const Heros = () => {


  const { authState } = useOktaAuth();

  return (
    <div>
      <div className="d-none d-lg-block pb-5">
        <div className="row g-0 mt-5">
          <div className="col-sm-6 col-md-6">
            <div className="col-image-left"></div>
          </div>

          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>What have you been rading? </h1>
              <p className="lead">
                The library team would love to know what you have been rading.
                Whatever it is to learn a new skill ot grow within one, we will
                be able to provide the top content for you!
              </p>
              {authState?.isAuthenticated ?
                <Link type='button' className="btn btn-secondary color btn-lg text-white color buttonn" to='search'>Explore top books</Link>
                :
                <Link className="btn  btn-secondary color btn-lg text-white color buttonn" to="/login">
                Sign up
              </Link>
            }
             
            </div>
          </div>
        </div>
        <div className="row g-0">
          <div className="col-4 col-md-4 container d-flex justify-content-center align-items-center">
            <div className="ml-2">
              <h1>Our collection is always changing!</h1>
              <p className="lead">
                Try to check in daily as out collection is always changing! We
                work nonstop to provide the most accurate book selection
                possible for our students! We are diligent about our book
                selection and our books are alwas going
                to be our top priority.
              </p>
            </div>
          </div>
          <div className="col-sm-6 col-md-6">
            <div className="col-image-right"></div>
          </div>
        </div>
      </div>

      {/* Mobile Heros */}
      <div className="d-large-none">
        <div className="container">
          <div className="m-2">
          
              <div className="mt-2 pt-5">
                <h1>What have you been rading? </h1>
                <p className="lead">
                  The library team would love to know what you have been rading.
                  Whatever it is to learn a new skill ot grow within one, we
                  will be able to provide the top content for you!
                </p>
        
              
              </div>
            </div>
            <div className="m-2 pt-3">
              <div className="col-image-right2"></div>
              <div className="mt-2 pt-5">
                <h1>Our collection is always changing!</h1>
                <p className="lead">
                  Try to check in daily as out collection is always changing! We
                  work nonstop to provide the most accurate book selection
                  possible for our students! We are diligent about our book
                  selection and our books are alwas going
                  to be our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  );
};
