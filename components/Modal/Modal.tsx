// components/Modal.tsx

import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import styles from './Modal.module.scss';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !dialogRef.current) return;

    dialogRef.current.focus();
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className={styles.backdrop} onClick={onClose} />

      <div className={styles.wrapper}>
        <div ref={dialogRef} className={styles.dialog} tabIndex={-1}>
          <div className={styles.body}>
            <div className={styles.header}>
              <h3 className={styles.title} id='modal-title'>
                {title}
              </h3>

              <button
                className={styles.closeBtn}
                onClick={onClose}
                type='button'
                aria-label='Close modal'>
                <X size={24} />
              </button>
            </div>

            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
