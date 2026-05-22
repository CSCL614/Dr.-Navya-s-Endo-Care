"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CalendarHeart, Loader2 } from "lucide-react";

interface AppointmentContextType {
  openModal: () => void;
  closeModal: () => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export function AppointmentProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setTimeout(() => setIsSuccess(false), 300); // Reset after animation
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      service: formData.get('department'),
    };

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        alert('Failed to send appointment request. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppointmentContext.Provider value={{ openModal, closeModal }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary">
                    <CalendarHeart className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-heading text-slate-800">
                      Book Appointment
                    </h2>
                    <p className="text-sm text-slate-500">
                      Fill out the form below to schedule your consultation.
                    </p>
                  </div>
                </div>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Request Sent Successfully!</h3>
                    <p className="text-slate-500 mb-6">Our team will contact you shortly to confirm your appointment time.</p>
                    <button
                      onClick={closeModal}
                      className="w-full py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl transition-colors"
                    >
                      Close
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1">
                        <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          maxLength={10}
                          minLength={10}
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit phone number"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                          placeholder="9876543210"
                          onInput={(e) => {
                            // Only allow numbers
                            e.currentTarget.value = e.currentTarget.value.replace(/[^0-9]/g, '');
                          }}
                        />
                      </div>
                      <div className="space-y-1">
                        <label htmlFor="date" className="text-sm font-medium text-slate-700">Preferred Date <span className="text-red-500">*</span></label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="department" className="text-sm font-medium text-slate-700">Service Required <span className="text-red-500">*</span></label>
                      <select
                        id="department"
                        name="department"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none text-slate-600 bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="diabetes">Diabetes Management</option>
                        <option value="thyroid">Thyroid Treatment</option>
                        <option value="pcos">PCOS & Obesity</option>
                        <option value="hormonal">Hormonal Imbalance</option>
                        <option value="other">Other Consultation</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl shadow-soft hover:shadow-glow transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        "Confirm Appointment Request"
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </AppointmentContext.Provider>
  );
}

export function useAppointment() {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error("useAppointment must be used within an AppointmentProvider");
  }
  return context;
}
