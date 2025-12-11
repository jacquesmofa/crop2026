import { useState } from 'react';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: string;
  amount: string;
}

export default function PaymentModal({ isOpen, onClose, tier, amount }: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<'stripe' | 'paypal' | 'bank' | null>(null);
  const [formData, setFormData] = useState({
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Send email notification
      const emailBody = `
New Partnership Payment Request

Tier: ${tier}
Amount: ${amount}
Payment Method: ${paymentMethod}

Organization Details:
- Organization Name: ${formData.organizationName}
- Contact Name: ${formData.contactName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Country: ${formData.country}

Message:
${formData.message}
      `;

      // Create mailto link
      const mailtoLink = `mailto:crop2026@gmail.com?subject=Partnership Payment Request - ${tier}&body=${encodeURIComponent(emailBody)}`;
      window.location.href = mailtoLink;

      setTimeout(() => {
        onClose();
        setSubmitSuccess(false);
        setPaymentMethod(null);
        setFormData({
          organizationName: '',
          contactName: '',
          email: '',
          phone: '',
          country: '',
          message: '',
        });
      }, 2000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary-dark p-6 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white mb-1">
                Partnership Payment
              </h2>
              <p className="text-white/90 text-sm">
                {tier} - {amount}
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors cursor-pointer"
            >
              <i className="ri-close-line text-2xl text-white"></i>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-check-line text-4xl text-green-600"></i>
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy mb-3">
                Request Submitted!
              </h3>
              <p className="text-gray-600">
                Our partnership team will contact you shortly to complete the payment process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Payment Method Selection */}
              {!paymentMethod ? (
                <div>
                  <h3 className="font-serif text-xl font-semibold text-navy mb-6">
                    Select Payment Method
                  </h3>
                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('stripe')}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                          <i className="ri-bank-card-line text-3xl text-white"></i>
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-navy text-lg mb-1 group-hover:text-primary transition-colors">
                            Credit/Debit Card (Stripe)
                          </h4>
                          <p className="text-sm text-gray-600">
                            Secure payment via Stripe - Visa, Mastercard, Amex
                          </p>
                        </div>
                        <i className="ri-arrow-right-s-line text-2xl text-gray-400 group-hover:text-primary transition-colors"></i>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center">
                          <i className="ri-paypal-line text-3xl text-white"></i>
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-navy text-lg mb-1 group-hover:text-primary transition-colors">
                            PayPal
                          </h4>
                          <p className="text-sm text-gray-600">
                            Fast and secure payment via PayPal
                          </p>
                        </div>
                        <i className="ri-arrow-right-s-line text-2xl text-gray-400 group-hover:text-primary transition-colors"></i>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className="w-full p-6 border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer group"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-teal-500 rounded-xl flex items-center justify-center">
                          <i className="ri-bank-line text-3xl text-white"></i>
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="font-semibold text-navy text-lg mb-1 group-hover:text-primary transition-colors">
                            Bank Transfer
                          </h4>
                          <p className="text-sm text-gray-600">
                            Direct bank transfer (Australian & International)
                          </p>
                        </div>
                        <i className="ri-arrow-right-s-line text-2xl text-gray-400 group-hover:text-primary transition-colors"></i>
                      </div>
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod(null)}
                    className="flex items-center space-x-2 text-primary hover:text-primary-dark mb-6 cursor-pointer"
                  >
                    <i className="ri-arrow-left-line"></i>
                    <span className="text-sm font-medium">Change Payment Method</span>
                  </button>

                  <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl mb-6">
                    <div className="flex items-center space-x-3">
                      <i className={`text-2xl ${
                        paymentMethod === 'stripe' ? 'ri-bank-card-line text-blue-600' :
                        paymentMethod === 'paypal' ? 'ri-paypal-line text-blue-600' :
                        'ri-bank-line text-green-600'
                      }`}></i>
                      <div>
                        <p className="text-sm text-gray-600">Selected Payment Method</p>
                        <p className="font-semibold text-navy">
                          {paymentMethod === 'stripe' ? 'Credit/Debit Card (Stripe)' :
                           paymentMethod === 'paypal' ? 'PayPal' :
                           'Bank Transfer'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-navy mb-6">
                    Organization Details
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        value={formData.organizationName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        name="contactName"
                        value={formData.contactName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter contact person name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="email@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                          placeholder="+61 xxx xxx xxx"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country *
                      </label>
                      <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter country"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                        placeholder="Any special requirements or questions..."
                      />
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <i className="ri-information-line text-blue-600 text-xl mt-0.5"></i>
                      <div className="text-sm text-blue-800">
                        <p className="font-semibold mb-1">Next Steps:</p>
                        <p>
                          After submitting this form, our partnership team will contact you within 24 hours with payment instructions and invoice details.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <i className="ri-loader-4-line animate-spin mr-2"></i>
                          Processing...
                        </span>
                      ) : (
                        'Submit Request'
                      )}
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
