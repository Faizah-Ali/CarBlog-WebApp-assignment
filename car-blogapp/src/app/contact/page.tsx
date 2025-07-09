// 'use client'

// import { useState } from 'react'
// import styles from '@/styles/contact.module.css'

// export default function ContactPage() {
//   const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
//   const [errors, setErrors] = useState<{ [key: string]: string }>({})

//   const validate = () => {
//     const newErrors: { [key: string]: string } = {}
//     if (!form.name.trim()) newErrors.name = 'Name is required'
//     if (!form.email.trim()) newErrors.email = 'Email is required'
//     else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email is invalid'
//     if (!form.subject.trim()) newErrors.subject = 'Subject is required'
//     if (!form.message.trim()) newErrors.message = 'Message is required'
//     return newErrors
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()
//     const validationErrors = validate()
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors)
//     } else {
//       alert('Message submitted successfully 🚀')
//       setForm({ name: '', email: '', subject: '', message: '' })
//       setErrors({})
//     }
//   }

//   return (
//     <div className={styles.wrapper}>
//       <h1 className={styles.heading}>📬 Contact Us</h1>
// <form onSubmit={handleSubmit} className={styles.form}>
//   <div className={styles.field}>
//     <label className={styles.label}>Name</label>
//     <input
//       type="text"
//       value={form.name}
//       onChange={e => setForm({ ...form, name: e.target.value })}
//       className={styles.input}
//     />
//     {errors.name && <span className={styles.error}>{errors.name}</span>}
//   </div>

//   <div className={styles.field}>
//     <label className={styles.label}>Email</label>
//     <input
//       type="email"
//       value={form.email}
//       onChange={e => setForm({ ...form, email: e.target.value })}
//       className={styles.input}
//     />
//     {errors.email && <span className={styles.error}>{errors.email}</span>}
//   </div>

//   <div className={styles.field}>
//     <label className={styles.label}>Subject</label>
//     <input
//       type="text"
//       value={form.subject}
//       onChange={e => setForm({ ...form, subject: e.target.value })}
//       className={styles.input}
//     />
//     {errors.subject && <span className={styles.error}>{errors.subject}</span>}
//   </div>

//   <div className={styles.field}>
//     <label className={styles.label}>Message</label>
//     <textarea
//       rows={4}
//       value={form.message}
//       onChange={e => setForm({ ...form, message: e.target.value })}
//       className={styles.textarea}
//     ></textarea>
//     {errors.message && <span className={styles.error}>{errors.message}</span>}
//   </div>

//   <button type="submit" className={styles.submitBtn}>Submit</button>
// </form>

//     </div>
//   )
// }

'use client';

import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/contact.module.css';

export default function CarRentalForm() {
  // Updated state to match the new form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    message: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [statusMessage, setStatusMessage] = useState(''); // For success/error messages

  // Updated handleChange to work with all input types
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error for the field as user types
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
    setStatusMessage(''); // Clear general status message on input change
  };

  // Updated validation logic for new fields
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
    } else if (!/^\+?\d{7,15}$/.test(formData.phoneNumber.trim())) { // Basic phone number regex
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

  // Updated handleSubmit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatusMessage('Please correct the errors above.');
      return;
    }

    // If validation passes, proceed with submission
    setErrors({}); // Clear any previous errors

    try {
      // Simulate API call
      // In a real application, you would send this data to your backend API here
      // Example:
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });
      //
      // if (response.ok) {
      //   setStatusMessage('Message sent successfully! We will get back to you soon.');
      //   setFormData({ firstName: '', lastName: '', phoneNumber: '', emailAddress: '', message: '' }); // Clear form
      // } else {
      //   setStatusMessage('Failed to send message. Please try again.');
      // }

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
      setStatusMessage('Message submitted successfully! 🚀');
      setFormData({ firstName: '', lastName: '', phoneNumber: '', emailAddress: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    }
  };

  return (
    <section className={styles.rentalFormContainer}> {/* Reusing this container as it has the background */}
      <Image
        src="/HeroSection.png" // Path to your background image
        alt="Car on a scenic road"
        layout="fill"
        objectFit="cover"
        quality={90}
        className={styles.backgroundImage}
        priority
      />

      <div className={styles.formCard}>
        <h2 className={styles.formHeading}>📬 Contact Us</h2> {/* Updated heading */}
        <form onSubmit={handleSubmit}>
          <div className={styles.formGrid}>
            {/* First Name */}
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

            {/* Last Name */}
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

            {/* Phone Number */}
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

            {/* Email Address */}
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

            {/* Message Textarea */}
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

          </div> {/* End of formGrid */}

          <button type="submit" className={styles.searchButton}> {/* Reusing searchButton style */}
            SUBMIT <span className={styles.arrowIcon}>&#9654;</span>
          </button>
          {statusMessage && <p className={styles.statusMessage}>{statusMessage}</p>}
        </form>
      </div>
    </section>
  );
}