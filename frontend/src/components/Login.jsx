import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Importing Font Awesome icon for close

function Login({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    // Optionally, close the modal after submission
    onClose();
  };

  return (
    <>
      {isOpen && (
        <dialog id="login_modal" className="modal modal-open">
          <div className="modal-box relative">
            {/* Close button in the top-right corner */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              aria-label="Close"
            >
              <FaTimes className="text-xl" />
            </button>

            <h3 className="font-bold text-lg">Login</h3>
            <form onSubmit={handleSubmit} className="py-4">
              <div className="form-control mb-4">
                <label className="label" htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mb-4">
                <label className="label" htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="modal-action flex justify-between">
                <button type="submit" className="btn btn-primary">Login</button>
              </div>
            </form>
            <div className="absolute bottom-4 right-4 text-sm">
              <p className="text-gray-600">
                Not registered? <a href="/signup" className="text-blue-500 hover:underline">Signup</a>
              </p>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Login;
