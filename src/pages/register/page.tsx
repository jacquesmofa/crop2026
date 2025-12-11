import { useState } from 'react';
import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    country: '',
    registrationType: '',
    dietaryRequirements: '',
    accessibilityNeeds: '',
    interests: [] as string[],
    abstractSubmission: 'no',
    abstractTitle: '',
    abstractSummary: '',
    newsletter: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleInterestToggle = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.target as HTMLFormElement;
      const formDataToSubmit = new FormData(formElement);
      
      const response = await fetch('https://readdy.ai/api/form/d4gtq4jamli27834gdr0', {
        method: 'POST',
        body: new URLSearchParams(formDataToSubmit as any),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          organization: '',
          country: '',
          registrationType: '',
          dietaryRequirements: '',
          accessibilityNeeds: '',
          interests: [],
          abstractSubmission: 'no',
          abstractTitle: '',
          abstractSummary: '',
          newsletter: true,
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const thematicPillars = [
    'Climate Justice',
    'Culture-Based Trade',
    'Migration & Displacement',
    'Urbanization',
    'Youth & Technology',
    'Indigenous Knowledge',
    'Health & Wellbeing',
    'Education',
    'Conflict Resolution',
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-primary-dark to-navy">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Join Us</span>
            <div className="h-0.5 w-16 bg-secondary mt-2 mx-auto"></div>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Register Your Interest
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Be part of the global movement for cultural resilience and planetary sustainability. Register now for CROP Conference 2026.
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' && (
            <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <i className="ri-checkbox-circle-fill text-green-600 text-2xl mt-0.5"></i>
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">Registration Successful!</h3>
                  <p className="text-green-700">Thank you for your interest in CROP Conference 2026. We'll be in touch with more details soon.</p>
                </div>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-6 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <i className="ri-error-warning-fill text-red-600 text-2xl mt-0.5"></i>
                <div>
                  <h3 className="font-semibold text-red-900 mb-1">Submission Failed</h3>
                  <p className="text-red-700">There was an error submitting your registration. Please try again.</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
            <form id="registration-form" data-readdy-form onSubmit={handleSubmit}>
              {/* Personal Information */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center">
                  <i className="ri-user-line text-primary mr-3"></i>
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+61 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center">
                  <i className="ri-briefcase-line text-primary mr-3"></i>
                  Professional Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-semibold text-navy mb-2">
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your organization name"
                    />
                  </div>
                  <div>
                    <label htmlFor="country" className="block text-sm font-semibold text-navy mb-2">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your country"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="registrationType" className="block text-sm font-semibold text-navy mb-2">
                      Registration Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="registrationType"
                      name="registrationType"
                      value={formData.registrationType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none bg-white cursor-pointer"
                    >
                      <option value="">Select registration type</option>
                      <option value="delegate">Conference Delegate</option>
                      <option value="speaker">Speaker/Presenter</option>
                      <option value="researcher">Researcher</option>
                      <option value="student">Student</option>
                      <option value="media">Media</option>
                      <option value="partner">Partner Organization</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Thematic Interests */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center">
                  <i className="ri-heart-line text-primary mr-3"></i>
                  Thematic Interests
                </h2>
                <p className="text-gray-600 mb-4">Select the thematic pillars you're most interested in:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {thematicPillars.map((pillar) => (
                    <button
                      key={pillar}
                      type="button"
                      onClick={() => handleInterestToggle(pillar)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all duration-200 text-left cursor-pointer ${
                        formData.interests.includes(pillar)
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{pillar}</span>
                        {formData.interests.includes(pillar) && (
                          <i className="ri-checkbox-circle-fill"></i>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                <input
                  type="hidden"
                  name="interests"
                  value={formData.interests.join(', ')}
                />
              </div>

              {/* Abstract Submission */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center">
                  <i className="ri-file-text-line text-primary mr-3"></i>
                  Abstract Submission
                </h2>
                <div className="mb-6">
                  <label className="block text-sm font-semibold text-navy mb-3">
                    Would you like to submit an abstract for presentation?
                  </label>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, abstractSubmission: 'yes' }))}
                      className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                        formData.abstractSubmission === 'yes'
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-primary'
                      }`}
                    >
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, abstractSubmission: 'no' }))}
                      className={`px-6 py-3 rounded-lg border-2 transition-all duration-200 cursor-pointer ${
                        formData.abstractSubmission === 'no'
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-primary'
                      }`}
                    >
                      No
                    </button>
                  </div>
                  <input type="hidden" name="abstractSubmission" value={formData.abstractSubmission} />
                </div>

                {formData.abstractSubmission === 'yes' && (
                  <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
                    <div>
                      <label htmlFor="abstractTitle" className="block text-sm font-semibold text-navy mb-2">
                        Abstract Title
                      </label>
                      <input
                        type="text"
                        id="abstractTitle"
                        name="abstractTitle"
                        value={formData.abstractTitle}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your abstract title"
                      />
                    </div>
                    <div>
                      <label htmlFor="abstractSummary" className="block text-sm font-semibold text-navy mb-2">
                        Abstract Summary (max 500 characters)
                      </label>
                      <textarea
                        id="abstractSummary"
                        name="abstractSummary"
                        value={formData.abstractSummary}
                        onChange={handleInputChange}
                        maxLength={500}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                        placeholder="Provide a brief summary of your proposed presentation"
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-2">
                        {formData.abstractSummary.length}/500 characters
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Special Requirements */}
              <div className="mb-10">
                <h2 className="font-serif text-2xl font-bold text-navy mb-6 flex items-center">
                  <i className="ri-service-line text-primary mr-3"></i>
                  Special Requirements
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="dietaryRequirements" className="block text-sm font-semibold text-navy mb-2">
                      Dietary Requirements
                    </label>
                    <input
                      type="text"
                      id="dietaryRequirements"
                      name="dietaryRequirements"
                      value={formData.dietaryRequirements}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="e.g., Vegetarian, Vegan, Gluten-free, Halal"
                    />
                  </div>
                  <div>
                    <label htmlFor="accessibilityNeeds" className="block text-sm font-semibold text-navy mb-2">
                      Accessibility Needs
                    </label>
                    <textarea
                      id="accessibilityNeeds"
                      name="accessibilityNeeds"
                      value={formData.accessibilityNeeds}
                      onChange={handleInputChange}
                      maxLength={500}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                      placeholder="Please describe any accessibility requirements"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Newsletter */}
              <div className="mb-10">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary cursor-pointer"
                  />
                  <span className="text-gray-700">
                    I would like to receive updates about CROP Conference 2026 and related events
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-gradient-to-r from-primary to-primary-dark hover:from-primary-dark hover:to-primary text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Submitting...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <i className="ri-send-plane-fill mr-2"></i>
                      Submit Registration
                    </span>
                  )}
                </button>
              </div>

              <p className="text-sm text-gray-500 mt-6 text-center">
                By submitting this form, you agree to our privacy policy and terms of use.
              </p>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <i className="ri-calendar-line text-4xl text-primary mb-4"></i>
              <h3 className="font-semibold text-navy mb-2">Early Bird Rates</h3>
              <p className="text-sm text-gray-600">Register early for discounted rates</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <i className="ri-group-line text-4xl text-primary mb-4"></i>
              <h3 className="font-semibold text-navy mb-2">Group Discounts</h3>
              <p className="text-sm text-gray-600">Special rates for group registrations</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
              <i className="ri-customer-service-line text-4xl text-primary mb-4"></i>
              <h3 className="font-semibold text-navy mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600">Contact our registration team</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
