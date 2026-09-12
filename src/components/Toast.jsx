import React from 'react';
import { useBooking } from '../context/BookingContext';

export default function Toast() {
  const { toastMessage } = useBooking();

  if (!toastMessage) return null;

  return (
    <div className="toast-notice show">
      <span>✨</span> <span>{toastMessage}</span>
    </div>
  );
}
