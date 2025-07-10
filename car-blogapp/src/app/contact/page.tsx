'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/contact.module.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CarRentalForm() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }

    setStatusMessage('');
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required';
    } else if (!/^\+?\d{7,15}$/.test(formData.phoneNumber.trim())) {
      newErrors.phoneNumber = 'Invalid Phone Number';
    }
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress.trim())) {
      newErrors.emailAddress = 'Email Address is invalid';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please correct the errors above.');
      return;
    }

    setErrors({});

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success('Message submitted successfully! 🚀');
      setFormData({ firstName: '', lastName: '', phoneNumber: '', emailAddress: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <section className={styles.rentalFormContainer}>
      <Image
        src="/HeroSection.png"
        alt="Car on a scenic road"
        layout="fill"
        objectFit="cover"
        quality={90}
        className={styles.backgroundImage}
        priority
      />

      <div className={styles.formCard}>
        <h2 className={styles.formHeading}>📬 Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              {errors.firstName && <p className={styles.errorMessage}>{errors.firstName}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              {errors.lastName && <p className={styles.errorMessage}>{errors.lastName}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>Phone No.</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              {errors.phoneNumber && <p className={styles.errorMessage}>{errors.phoneNumber}</p>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="emailAddress" className={styles.label}>Email Address</label>
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Your Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                className={styles.inputField}
                required
              />
              {errors.emailAddress && <p className={styles.errorMessage}>{errors.emailAddress}</p>}
            </div>

            <div className={styles.formGroup} style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={styles.textareaField}
                required
              ></textarea>
              {errors.message && <p className={styles.errorMessage}>{errors.message}</p>}
            </div>
          </div>

          <button type="submit" className={styles.searchButton}>
            SUBMIT <span className={styles.arrowIcon}>&#9654;</span>
          </button>
          {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        </form>
      </div>

   
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
    </section>
  );
}
