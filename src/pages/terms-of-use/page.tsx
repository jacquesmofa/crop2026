import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function TermsOfUse() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-navy-dark to-primary py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Terms of Use
            </h1>
            <p className="text-lg text-gray-200">
              Last Updated: January 2025
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Welcome to the CROP 2026 Conference website. These Terms of Use ("Terms") govern your access to and use of the website cropconference2026.org (the "Site") operated by KWETU CONNECT PTY LTD (ABN 87684798570) and Livelihood Development International Initiatives (LDII) (collectively, "we," "our," or "us").
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By accessing or using the Site, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must not access or use the Site.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Your continued use of the Site following any changes constitutes acceptance of those changes.
                </p>
              </div>

              {/* Use of the Site */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Use of the Site</h2>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Permitted Use</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may use the Site for lawful purposes only, including:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Accessing information about the CROP 2026 Conference</li>
                  <li>Registering for the conference</li>
                  <li>Submitting abstracts and papers</li>
                  <li>Exploring partnership and sponsorship opportunities</li>
                  <li>Subscribing to newsletters and updates</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Prohibited Activities</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Use the Site in any way that violates applicable laws or regulations</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Transmit any viruses, malware, or harmful code</li>
                  <li>Attempt to gain unauthorized access to the Site or its systems</li>
                  <li>Interfere with or disrupt the Site's operation or servers</li>
                  <li>Collect or harvest information from the Site using automated means</li>
                  <li>Use the Site for any commercial purpose without our express permission</li>
                  <li>Post or transmit any defamatory, offensive, or inappropriate content</li>
                  <li>Infringe upon intellectual property rights of others</li>
                </ul>
              </div>

              {/* Registration and Accounts */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Registration and User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To access certain features of the Site, including conference registration, you may be required to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Provide accurate, current, and complete information during registration</li>
                  <li>Maintain and promptly update your account information</li>
                  <li>Maintain the security and confidentiality of your login credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Accept responsibility for all activities that occur under your account</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these Terms or engage in fraudulent or inappropriate behavior.
                </p>
              </div>

              {/* Conference Registration */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Conference Registration and Payment</h2>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Registration</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conference registration is subject to availability and acceptance by the organizers. We reserve the right to refuse registration to any individual or organization at our discretion.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Payment Terms</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>All fees are quoted in Australian Dollars (AUD) unless otherwise stated</li>
                  <li>Payment must be received in full before registration is confirmed</li>
                  <li>We accept payment via credit card, bank transfer, or other approved methods</li>
                  <li>All fees are non-refundable except as specified in our Cancellation Policy</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Cancellation and Refund Policy</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>More than 60 days before the conference:</strong> 80% refund of registration fee</li>
                  <li><strong>30-60 days before the conference:</strong> 50% refund of registration fee</li>
                  <li><strong>Less than 30 days before the conference:</strong> No refund</li>
                  <li>Substitutions are permitted at no additional charge with written notice</li>
                  <li>If the conference is cancelled by the organizers, full refunds will be provided</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Intellectual Property Rights</h2>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Our Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  All content on the Site, including text, graphics, logos, images, videos, software, and other materials (collectively, "Content"), is the property of KWETU CONNECT PTY LTD, LDII, or our licensors and is protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any Content without our express written permission.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">User-Submitted Content</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By submitting abstracts, papers, or other content to the Site, you grant us a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, publish, and distribute your content for conference-related purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Publication in conference proceedings and materials</li>
                  <li>Presentation at the conference</li>
                  <li>Promotion and marketing of the conference</li>
                  <li>Archival and educational purposes</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  You represent and warrant that you own or have the necessary rights to submit the content and that it does not infringe upon any third-party rights.
                </p>
              </div>

              {/* Disclaimers */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Disclaimers and Limitations of Liability</h2>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Site Availability</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Site is provided on an "as is" and "as available" basis. We do not warrant that the Site will be uninterrupted, error-free, or free from viruses or other harmful components. We reserve the right to modify, suspend, or discontinue the Site at any time without notice.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Content Accuracy</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  While we strive to provide accurate and up-to-date information, we make no representations or warranties regarding the accuracy, completeness, or reliability of any Content on the Site. Conference details, including dates, venues, speakers, and programs, are subject to change.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Limitation of Liability</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by law, KWETU CONNECT PTY LTD and LDII shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Your use of or inability to use the Site</li>
                  <li>Any errors or omissions in the Site's content</li>
                  <li>Unauthorized access to your personal information</li>
                  <li>Conference cancellation, postponement, or changes</li>
                  <li>Any other matter relating to the Site or conference</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Our total liability shall not exceed the amount you paid for conference registration.
                </p>
              </div>

              {/* Indemnification */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless KWETU CONNECT PTY LTD, LDII, and their respective officers, directors, employees, and agents from any claims, liabilities, damages, losses, costs, or expenses (including legal fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Third-Party Links and Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  The Site may contain links to third-party websites or services that are not owned or controlled by us. We are not responsible for the content, privacy policies, or practices of any third-party sites. Your use of third-party sites is at your own risk.
                </p>
              </div>

              {/* Governing Law */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Governing Law and Jurisdiction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These Terms shall be governed by and construed in accordance with the laws of New South Wales, Australia, without regard to its conflict of law provisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts of New South Wales, Australia. However, we encourage you to first attempt to resolve disputes through our Dispute Resolution process.
                </p>
              </div>

              {/* Severability */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Severability</h2>
                <p className="text-gray-700 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </div>

              {/* Entire Agreement */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms, together with our Privacy Policy and any other legal notices published on the Site, constitute the entire agreement between you and us regarding your use of the Site.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions or concerns about these Terms of Use, please contact us:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>KWETU CONNECT PTY LTD</strong></p>
                  <p className="text-gray-700 mb-2">ABN: 87684798570</p>
                  <p className="text-gray-700 mb-2">Email: info@cropconference2026.org</p>
                  <p className="text-gray-700 mb-2">Phone: +61 2 4627 9742 | +61 469 739 330</p>
                  <p className="text-gray-700">Address: Sydney Olympic Park, NSW, Australia</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
