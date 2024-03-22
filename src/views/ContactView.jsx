import React, { useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useLanguage } from '../context/Language'; 
import db from "../firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SuccessModal from '../components/SuccessModal';
import ErrorModal from '../components/ErrorModal';

const ContactView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [commentError, setCommentError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const { isEnglish } = useLanguage();

  const handleSubmit = async (event) => {
    event.preventDefault();

    let hasError = false;

    if (name.trim() === '') {
      setNameError(isEnglish ? 'Name is required' : 'Ingrese su nombre');
      hasError = true;
    } else {
      setNameError('');
    }

    if (email.trim() === '') {
      setEmailError(isEnglish ? 'Email is required' : 'Ingrese su correo');
      hasError = true;
    } else if (!validateEmail(email)) {
      setEmailError(isEnglish ? 'Please enter a valid email address' : 'Por favor, ingrese una dirección de correo electrónico válida');
      hasError = true;
    } else {
      setEmailError('');
    }

    if (comment.trim() === '') {
      setCommentError(isEnglish ? 'Comment is required' : 'Ingrese su comentario');
      hasError = true;
    } else {
      setCommentError('');
    }

    if (hasError) return;

    try {
      await addDoc(collection(db, "contact"), {
        name, email, comment, timestamp: serverTimestamp()
      });
      setShowSuccessModal(true);
      setName('');
      setEmail('');
      setComment('');
    } catch (error) {
      setShowErrorModal(true);
      console.error('Error:', error);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    const handleScroll = () => {
      const skillElements = document.querySelectorAll('.contact');
      skillElements.forEach((skill) => {
        const rect = skill.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const visiblePercent = (windowHeight - rect.top) / windowHeight;
        if (visiblePercent >= 0.1) {
          skill.classList.add('in-viewport');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="contact" className="lg:p-20 p-8 bg-black">
      <div className="flex items-center accordion">
        <FaArrowRight size={36} className="mr-2 arrow-right" />
        <h2 className="text-3xl sm:text-5xl font-bold text-white">{isEnglish ? 'Contact' : 'Contacto'}</h2>
      </div>
      <p className="text-md sm:text-xl text-gray-400 mt-2 flex items-center accordion">
        {isEnglish ? 'Send me a message!' : '¡Envíame un mensaje!'}
      </p>
      <form className="mt-8 max-w-2xl mx-auto" onSubmit={handleSubmit} noValidate>
        <div className="mb-4">
          <label htmlFor="name" className="block text-white text-md sm:text-lg font-bold mb-2 cursor-none contact">{isEnglish ? 'Name' : 'Nombre'}</label>
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder={isEnglish ? 'Enter your name' : 'Ingrese su nombre'} className="appearance-none bg-gray-200 border border-gray-200 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500 cursor-none contact" style={{ borderWidth: '3px' }} />
          {nameError && <p className="text-red-500">{nameError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-md sm:text-lg font-bold mb-2 cursor-none contact">{isEnglish ? 'Email' : 'Correo'}</label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={isEnglish ? 'Enter your email' : 'Ingrese su correo'} className="appearance-none bg-gray-200 border border-gray-200 rounded-lg w-full p-2 focus:outline-none focus:border-blue-500 cursor-none contact" style={{ borderWidth: '3px' }} />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-white text-md sm:text-lg font-bold mb-2 cursor-none contact">{isEnglish ? 'Comment' : 'Comentario'}</label>
          <textarea id="comment" name="comment" value={comment} onChange={(e) => setComment(e.target.value)} placeholder={isEnglish ? 'I wanted to contact you to...' : 'Quería contactarte para...'} className="appearance-none bg-gray-200 border border-gray-200 rounded-lg w-full p-6 pt-1 pl-2 focus:outline-none focus:border-blue-500 cursor-none contact" style={{ borderWidth: '3px' }}></textarea>
          {commentError && <p className="text-red-500">{commentError}</p>}
        </div>
        <div className="flex items-center justify-end">
          <button type="submit" className="submit-hover border rounded-full text-white font-bold py-2 text-center inline-block w-28 contact">{isEnglish ? 'Submit' : 'Enviar'}</button>
        </div>
      </form>
      {showSuccessModal && <SuccessModal onClose={() => setShowSuccessModal(false)} />}
      {showErrorModal && <ErrorModal onClose={() => setShowErrorModal(false)} />}
    </section>
  );
};

export default ContactView;
