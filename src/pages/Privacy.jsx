// pages/Privacy.jsx
export const Privacy = () => {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Page Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 dark:from-amber-400 dark:via-orange-500 dark:to-red-500 bg-clip-text text-transparent mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-slate-500 dark:text-slate-500 mt-4">
              Last updated: January 1, 2025
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
          <div className="p-8 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">1. Information We Collect</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  At Cineverse, we collect minimal information to provide you with the best movie discovery experience:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Usage Data:</strong> Pages visited, search queries, and browsing patterns</li>
                  <li><strong>Device Information:</strong> Browser type, operating system, and screen resolution</li>
                  <li><strong>Preferences:</strong> Theme settings (dark/light mode) stored locally</li>
                </ul>
              </div>
            </section>


            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">2. Data Sharing and Disclosure</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>With your explicit consent</li>
                  <li>To comply with legal requirements or protect our rights</li>
                  <li>With service providers who help us operate our platform (under strict confidentiality agreements)</li>
                  <li>In case of a business merger or acquisition (users will be notified)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">3. Data Security</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  We implement appropriate security measures to protect your information:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>HTTPS encryption for all data transmission</li>
                  <li>Regular security audits and updates</li>
                  <li>Limited access to personal data by authorized personnel only</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">4. Your Rights</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access and review your personal data</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal data</li>
                  <li>Export your data in a portable format</li>
                </ul>
                <p>
                  To exercise these rights, please contact us at nameisjoseph@gmail.com
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">7. Updates to This Policy</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will notify users of any material changes by updating the "Last updated" date at the top of this policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">8. Contact Us</h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-slate-50 dark:bg-slate-700 rounded-lg p-4">
                  <p><strong>Email:</strong> nameisjoseph@gmail.com</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};
