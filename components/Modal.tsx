import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 overflow-y-auto'
      aria-labelledby='modal-title'
      role='dialog'
      aria-modal='true'>
      {/* Backdrop */}
      <div
        className='fixed inset-0 bg-navy-900 bg-opacity-75 transition-opacity backdrop-blur-sm'
        onClick={onClose}></div>

      <div className='flex min-h-screen items-center justify-center p-4 text-center sm:p-0'>
        <div className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg border-t-4 border-signal-500'>
          <div className='bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4'>
            <div className='flex justify-between items-center mb-5'>
              <h3 className='text-xl font-bold leading-6 text-navy-900' id='modal-title'>
                {title}
              </h3>
              <button
                type='button'
                className='rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none'
                onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            <div className='mt-2'>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
