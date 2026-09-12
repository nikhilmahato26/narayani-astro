import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalService, setModalService] = useState('Lal Kitab Consultation');
  const [toastMessage, setToastMessage] = useState(null);

  const openBookingModal = (service = 'Lal Kitab Consultation') => {
    setModalService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeBookingModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = '';
  };

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <BookingContext.Provider
      value={{
        isModalOpen,
        modalService,
        openBookingModal,
        closeBookingModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}
