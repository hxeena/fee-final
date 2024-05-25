import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ setIsLoggedIn, setUsername }) => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });
  const [isLoggedInLocal, setIsLoggedInLocal] = useState(false); // Local state to track login status

  const handleInputChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Perform login logic, e.g., validate credentials and set login status
    // For simplicity, let's assume login is successful when email and password are not empty
    if (formData.email !== "" && formData.password !== "") {
      setIsLoggedInLocal(true);
      setIsLoggedIn(true);
      setUsername(formData.name); // Set username to email for simplicity
    }
  };

  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          Hello! <span className="text-primaryColor">Welcome</span> Back 
        </h3>
        {!isLoggedInLocal ? ( // Render login form if user is not logged in locally
          <form className="py-4 md:py-0">
            <div className="mb-5">
              <input
                type="name"
                placeholder="Username"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border [#0066ff61] focus: outline-none focus: border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder: text-textColor rounded-md"
                required
              />
            </div>

            <div className="mb-5">
              <input
                type="password"
                placeholder="Enter Your Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border-b border-solid border [#0066ff61] focus: outline-none focus: border-b-primaryColor text-[22px] leading-7 text-headingColor placeholder: text-textColor rounded-md"
                required
              />
            </div>

            <div className="mb-7">
              <button
                type='button' // Change type to button
                onClick={handleLogin} // Handle login when button is clicked
                className='w-full bg-primaryColor text-white text-[18px]leading-[30px] rounded-lg px-4 py-3'
              >
                Login
              </button>
            </div>
            <p className='mt-5 text-textColor text-center'>
              Don&apos;t have an account?
              <Link to='/register' className='text-primaryColor font-medium ml-1'>Register
              </Link>
            </p>
          </form>
        ) : (
          // Render username if user is logged in locally
          <div>
            {/* Replace this with your user profile component */}
            <h3>User Profile</h3>
            <p>Username: {formData.name}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Login;