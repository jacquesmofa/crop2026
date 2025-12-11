import Navigation from '../../components/feature/Navigation';
import Footer from '../../components/feature/Footer';

export default function DisputeResolution() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-navy via-navy-dark to-primary py-16 md:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Dispute Resolution
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
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Our Commitment to Fair Resolution</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  KWETU CONNECT PTY LTD (ABN 87684798570) and Livelihood Development International Initiatives (LDII) are committed to maintaining positive relationships with all conference participants, partners, sponsors, and website users. We believe in resolving disputes fairly, efficiently, and amicably.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This Dispute Resolution Policy outlines the process for addressing and resolving any disagreements or concerns that may arise in connection with the CROP 2026 Conference or our website.
                </p>
              </div>

              {/* Scope */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Scope of This Policy</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  This Dispute Resolution Policy applies to disputes arising from:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Conference registration, attendance, or participation</li>
                  <li>Abstract submissions and speaker arrangements</li>
                  <li>Sponsorship and partnership agreements</li>
                  <li>Payment and refund matters</li>
                  <li>Use of our website and services</li>
                  <li>Intellectual property concerns</li>
                  <li>Privacy and data protection issues</li>
                  <li>Any other matters related to the CROP 2026 Conference</li>
                </ul>
              </div>

              {/* Step 1 */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Step 1: Direct Communication</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We encourage you to first attempt to resolve any concerns by contacting us directly. Many issues can be resolved quickly through open and honest communication.
                </p>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">How to Contact Us</h3>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-6">
                  <p className="text-gray-700 mb-2"><strong>Email:</strong> info@cropconference2026.org</p>
                  <p className="text-gray-700 mb-2"><strong>Phone:</strong> +61 2 4627 9742 | +61 469 739 330</p>
                  <p className="text-gray-700 mb-2"><strong>Address:</strong> Sydney Olympic Park, NSW, Australia</p>
                  <p className="text-gray-700"><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM AEDT</p>
                </div>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">What to Include</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When contacting us, please provide:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Your full name and contact information</li>
                  <li>Registration or reference number (if applicable)</li>
                  <li>A clear description of the issue or concern</li>
                  <li>Relevant dates, documents, or correspondence</li>
                  <li>Your desired outcome or resolution</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Response Time</h3>
                <p className="text-gray-700 leading-relaxed">
                  We aim to acknowledge your inquiry within 2 business days and provide a substantive response within 7 business days. Complex matters may require additional time, and we will keep you informed of our progress.
                </p>
              </div>

              {/* Step 2 */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Step 2: Formal Complaint</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If your concern is not resolved through direct communication, you may submit a formal written complaint.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Complaint Submission</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Submit your formal complaint via email to: <strong>disputes@cropconference2026.org</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your complaint should include:
                </p>
                <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
                  <li>Subject line: "Formal Complaint - [Your Name]"</li>
                  <li>Detailed description of the dispute</li>
                  <li>Summary of previous communication attempts</li>
                  <li>Supporting documentation or evidence</li>
                  <li>Specific resolution you are seeking</li>
                  <li>Your preferred method of communication</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Review Process</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Upon receiving your formal complaint:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>We will acknowledge receipt within 2 business days</li>
                  <li>A senior member of our team will review the matter</li>
                  <li>We may request additional information or clarification</li>
                  <li>We will investigate all relevant facts and circumstances</li>
                  <li>We will provide a written response within 14 business days</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Step 3: Mediation</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If the formal complaint process does not result in a satisfactory resolution, either party may request mediation.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Mediation Process</h3>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Both parties agree to participate in good faith mediation</li>
                  <li>A neutral, independent mediator will be appointed</li>
                  <li>The mediator will facilitate discussions between the parties</li>
                  <li>Mediation sessions will be conducted confidentially</li>
                  <li>The goal is to reach a mutually acceptable resolution</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Mediation Costs</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The costs of mediation will be shared equally between the parties unless otherwise agreed. We are committed to making mediation accessible and will work with you to find a cost-effective solution.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Mediation Organizations</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We recommend using accredited mediation services such as:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Australian Disputes Centre (ADC)</li>
                  <li>Resolution Institute</li>
                  <li>Community Justice Centres NSW</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Step 4: Arbitration or Legal Action</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If mediation does not resolve the dispute, the matter may proceed to arbitration or legal proceedings.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Arbitration</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  By agreement, disputes may be submitted to binding arbitration under the rules of the Australian Centre for International Commercial Arbitration (ACICA) or another mutually agreed arbitration body. The arbitrator's decision will be final and binding on both parties.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Legal Proceedings</h3>
                <p className="text-gray-700 leading-relaxed">
                  If arbitration is not pursued or is unsuccessful, either party may initiate legal proceedings in the courts of New South Wales, Australia, in accordance with our Terms of Use.
                </p>
              </div>

              {/* Special Circumstances */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Special Circumstances</h2>
                
                <h3 className="text-xl font-semibold text-navy-dark mb-3">Refund Disputes</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Refund requests are subject to our Cancellation and Refund Policy as outlined in our Terms of Use. If you believe you are entitled to a refund that has been denied, please follow the dispute resolution process outlined above.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Intellectual Property Disputes</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  If you believe your intellectual property rights have been infringed, please contact us immediately with detailed information about the alleged infringement. We will investigate promptly and take appropriate action.
                </p>

                <h3 className="text-xl font-semibold text-navy-dark mb-3">Privacy and Data Protection Concerns</h3>
                <p className="text-gray-700 leading-relaxed">
                  For disputes related to privacy or data protection, please refer to our Privacy Policy and contact our privacy officer at privacy@cropconference2026.org. You also have the right to lodge a complaint with the Office of the Australian Information Commissioner (OAIC).
                </p>
              </div>

              {/* Principles */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Our Guiding Principles</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Throughout the dispute resolution process, we are committed to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Fairness:</strong> Treating all parties with respect and impartiality</li>
                  <li><strong>Transparency:</strong> Communicating clearly about the process and timeline</li>
                  <li><strong>Confidentiality:</strong> Protecting sensitive information shared during the process</li>
                  <li><strong>Efficiency:</strong> Resolving disputes as quickly as reasonably possible</li>
                  <li><strong>Good Faith:</strong> Working collaboratively toward mutually beneficial solutions</li>
                  <li><strong>Cultural Sensitivity:</strong> Respecting diverse perspectives and cultural values</li>
                </ul>
              </div>

              {/* Time Limits */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Time Limits for Raising Disputes</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To ensure timely resolution, disputes should be raised within the following timeframes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Registration and payment issues:</strong> Within 30 days of the transaction</li>
                  <li><strong>Conference-related matters:</strong> Within 60 days of the conference date</li>
                  <li><strong>Website or service issues:</strong> Within 90 days of the incident</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Exceptions may be made in extraordinary circumstances. Please contact us to discuss your specific situation.
                </p>
              </div>

              {/* External Resources */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">External Dispute Resolution Resources</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are not satisfied with our internal dispute resolution process, you may seek assistance from external organizations:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-navy mb-2">NSW Fair Trading</h4>
                    <p className="text-gray-700 text-sm mb-1">Website: fairtrading.nsw.gov.au</p>
                    <p className="text-gray-700 text-sm">Phone: 13 32 20</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-navy mb-2">Australian Competition and Consumer Commission (ACCC)</h4>
                    <p className="text-gray-700 text-sm mb-1">Website: accc.gov.au</p>
                    <p className="text-gray-700 text-sm">Phone: 1300 302 502</p>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-navy mb-2">Office of the Australian Information Commissioner (OAIC)</h4>
                    <p className="text-gray-700 text-sm mb-1">Website: oaic.gov.au</p>
                    <p className="text-gray-700 text-sm">Phone: 1300 363 992</p>
                    <p className="text-gray-700 text-sm mt-2 italic">(For privacy-related complaints)</p>
                  </div>
                </div>
              </div>

              {/* Updates */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Updates to This Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Dispute Resolution Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-10">
                <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about this Dispute Resolution Policy or to initiate the dispute resolution process:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <p className="text-gray-700 mb-2"><strong>KWETU CONNECT PTY LTD</strong></p>
                  <p className="text-gray-700 mb-2">ABN: 87684798570</p>
                  <p className="text-gray-700 mb-2">General Inquiries: info@cropconference2026.org</p>
                  <p className="text-gray-700 mb-2">Formal Complaints: disputes@cropconference2026.org</p>
                  <p className="text-gray-700 mb-2">Privacy Matters: privacy@cropconference2026.org</p>
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
