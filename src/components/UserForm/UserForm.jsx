import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { addUser } from '../../features/users/usersSlice';
import { toast } from 'react-toastify';
import '../../styles/UserForm.css';
import userprofile from '../../assets/userprofile.png';

const UserForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const handleThemeToggle = () => {
    // Add your theme toggle logic here
    console.log('Theme toggled');
  };

  const onSubmit = async (data) => {
    try {
      await dispatch(addUser(data));
      reset();
      toast.success('User added successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to add user');
    }
  };

  return (
    <section className="form-card">
      <aside className="welcome-section">
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
        </div>
        <h3 className="welcome-title">Welcome!</h3>
        <h2 className="get-started">Let's Get Started</h2>
        <p className="welcome-text">
          Please fill out the form to register your information. We're excited to have you join us!
        </p>
        <img 
          src={userprofile} 
          alt="User Profile" 
          style={{
            maxWidth: '300px',
            display: 'block',
            margin: '15px auto',
            borderRadius: '8px'
          }}
        />
      </aside>

      <main className="form-section">
        <h2 className="form-title">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              {...register('firstName', { required: 'First name is required' })}
              className="form-control"
              placeholder="First Name"
            />
            {errors.firstName && (
              <p className="error-message">{errors.firstName.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              {...register('lastName', { required: 'Last name is required' })}
              className="form-control"
              placeholder="Last Name"
            />
            {errors.lastName && (
              <p className="error-message">{errors.lastName.message}</p>
            )}
          </div>

          <div className="form-group">
            <textarea
              {...register('address', { required: 'Address is required' })}
              className="form-control"
              placeholder="Address"
              rows="3"
            />
            {errors.address && (
              <p className="error-message">{errors.address.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              {...register('company', { required: 'Company is required' })}
              className="form-control"
              placeholder="Company"
            />
            {errors.company && (
              <p className="error-message">{errors.company.message}</p>
            )}
          </div>

          <div className="form-group">
            <input
              {...register('telephone', {
                required: 'Telephone number is required',
                pattern: {
                  value: /^\d{11}$/,
                  message: 'Please enter a valid 11-digit telephone number'
                }
              })}
              className="form-control"
              placeholder="Telephone Number"
            />
            {errors.telephone && (
              <p className="error-message">{errors.telephone.message}</p>
            )}
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </main>
    </section>
  );
};

export default UserForm;