import React from 'react';

const AuthForm = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4">Loan Application</h2>
              {/* Login Form */}
              <form>
                <h3 className="text-center mb-4">Login</h3>
                <div className="mb-3">
                  <label htmlFor="loginEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="loginEmail" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="loginPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="loginPassword" required />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
              </form>

              <hr className="mt-4 mb-4" />

              {/* Registration Form */}
              <form>
                <h3 className="text-center mb-4">Register</h3>
                <div className="mb-3">
                  <label htmlFor="registerFirstName" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="registerFirstName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerLastName" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="registerLastName" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerEmail" className="form-label">Email</label>
                  <input type="email" className="form-control" id="registerEmail" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="registerPassword" className="form-label">Password</label>
                  <input type="password" className="form-control" id="registerPassword" required />
                </div>
                <button type="submit" className="btn btn-success">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
