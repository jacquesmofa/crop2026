import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-navy-dark to-primary py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Privacy Policy
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
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KWETU CONNECT PTY LTD and Livelihood Development International Initiatives (LDII) ("we," "our," or "us") are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website cropconference2026.org and register for the CROP 2026 Conference.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our website and services, you agree to the terms of this Privacy Policy. If you do not agree with the terms, please do not access the site.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Register for the CROP 2026 Conference</li>
                  <li>Submit an abstract or paper</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us via email or contact forms</li>
                  <li>Apply for partnership or sponsorship opportunities</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This information may include: name, email address, phone number, organization/affiliation, job title, mailing address, payment information, and any other information you choose to provide.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you visit our website, we may automatically collect certain information about your device and browsing actions, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>IP address and browser type</li>
                  <li>Operating system and device information</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>To process conference registrations and manage attendee information</li>
                  <li>To communicate with you about the conference, including updates, schedules, and important announcements</li>
                  <li>To process abstract submissions and coordinate speaker participation</li>
                  <li>To facilitate sponsorship and partnership arrangements</li>
                  <li>To send newsletters and promotional materials (with your consent)</li>
                  <li>To improve our website and user experience</li>
                  <li>To analyze website traffic and usage patterns</li>
                  <li>To comply with legal obligations and protect our rights</li>
                  <li>To prevent fraud and ensure security</li>
                </ul>
              </div>

              {/* Information Sharing */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Information Sharing and Disclosure</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Service Providers:</strong> With third-party vendors who perform services on our behalf (e.g., payment processing, email delivery, website hosting)</li>
                  <li><strong>Conference Partners:</strong> With co-organizers, sponsors, and partners involved in the CROP 2026 Conference</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights, property, or safety</li>
                  <li><strong>Business Transfers:</strong> In connection with any merger, sale, or transfer of our organization</li>
                  <li><strong>With Your Consent:</strong> When you have given explicit permission to share your information</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell your personal information to third parties.
                </p>
              </div>

              {/* Data Security */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Data Security</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Secure Socket Layer (SSL) encryption for data transmission</li>
                  <li>Regular security assessments and updates</li>
                  <li>Restricted access to personal information</li>
                  <li>Secure data storage systems</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Your Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Objection:</strong> Object to the processing of your personal information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another organization</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  To exercise these rights, please contact us at info@cropconference2026.org.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences. However, disabling cookies may limit your ability to use certain features of our website.
                </p>
              </div>

              {/* Third-Party Links */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Third-Party Links</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                </p>
              </div>

              {/* Children's Privacy */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </div>

              {/* International Transfers */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. By using our services, you consent to such transfers.
                </p>
              </div>

              {/* Changes to Policy */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. We encourage you to review this Privacy Policy periodically.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Contact Us</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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
