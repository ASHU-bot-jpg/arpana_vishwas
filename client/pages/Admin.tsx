import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, Users, Calendar } from 'lucide-react';

export default function Admin() {
  const [isExporting, setIsExporting] = useState(false);

  const handleExportRegistrations = async () => {
    setIsExporting(true);
    try {
      const response = await fetch('/api/export-registrations');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `registrations-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } else {
        throw new Error('Export failed');
      }
    } catch (error) {
      console.error('Error exporting registrations:', error);
      alert('Failed to export registrations. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleExportToExcel = async () => {
    // For Excel export, you can use a library like 'xlsx'
    // npm install xlsx
    // import * as XLSX from 'xlsx';
    
    alert('Excel export feature coming soon! For now, use CSV export and open in Excel.');
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="py-16 px-6 lg:px-20">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-icreative-purple font-roboto text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
              Admin Dashboard
            </h1>
            <p className="text-icreative-grey font-roboto text-lg">
              Manage registrations and export data
            </p>
          </div>

          {/* Admin Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Export Registrations */}
            <div className="bg-icreative-pink-light p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-icreative-purple rounded-full flex items-center justify-center">
                  <Download className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-icreative-purple font-roboto text-xl font-bold">
                  Export Registrations
                </h2>
              </div>
              
              <p className="text-icreative-grey font-roboto text-base mb-6">
                Download all registration data as CSV or Excel file for analysis and record keeping.
              </p>
              
              <div className="space-y-3">
                <button
                  onClick={handleExportRegistrations}
                  disabled={isExporting}
                  className="w-full bg-icreative-green text-black px-6 py-3 rounded-lg font-inter text-base font-bold hover:bg-green-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isExporting ? 'Exporting...' : 'Download CSV'}
                </button>
                
                <button
                  onClick={handleExportToExcel}
                  className="w-full bg-icreative-magenta text-white px-6 py-3 rounded-lg font-inter text-base font-bold hover:bg-icreative-magenta-dark transition-colors"
                >
                  Download Excel
                </button>
              </div>
            </div>

            {/* Registration Stats */}
            <div className="bg-icreative-pink-light p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-icreative-purple rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-icreative-purple font-roboto text-xl font-bold">
                  Registration Stats
                </h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-icreative-grey font-roboto text-base">
                    Total Registrations:
                  </span>
                  <span className="text-icreative-purple font-roboto text-lg font-bold">
                    -
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-icreative-grey font-roboto text-base">
                    This Month:
                  </span>
                  <span className="text-icreative-purple font-roboto text-lg font-bold">
                    -
                  </span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-icreative-grey font-roboto text-base">
                    Most Popular Program:
                  </span>
                  <span className="text-icreative-purple font-roboto text-lg font-bold">
                    -
                  </span>
                </div>
              </div>
              
              <p className="text-icreative-text-secondary font-roboto text-sm mt-4">
                Stats will be available once registrations start coming in.
              </p>
            </div>

            {/* Email Settings */}
            <div className="bg-icreative-pink-light p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-icreative-purple rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-icreative-purple font-roboto text-xl font-bold">
                  Email Notifications
                </h2>
              </div>
              
              <p className="text-icreative-grey font-roboto text-base mb-4">
                All registration notifications are being sent to:
              </p>
              
              <div className="bg-white p-4 rounded-lg">
                <code className="text-icreative-purple font-mono text-base">
                  info@icreativelearning.com
                </code>
              </div>
              
              <p className="text-icreative-text-secondary font-roboto text-sm mt-4">
                To change this email address, update the server configuration.
              </p>
            </div>

            {/* WooCommerce Integration */}
            <div className="bg-icreative-pink-light p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-icreative-purple rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">WC</span>
                </div>
                <h2 className="text-icreative-purple font-roboto text-xl font-bold">
                  WooCommerce Setup
                </h2>
              </div>
              
              <p className="text-icreative-grey font-roboto text-base mb-4">
                Payment processing is ready to be configured with WooCommerce.
              </p>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-icreative-grey">WooCommerce setup pending</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-icreative-grey">Product catalog setup needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-icreative-grey">Payment methods configuration needed</span>
                </div>
              </div>
              
              <p className="text-icreative-text-secondary font-roboto text-sm mt-4">
                See WOOCOMMERCE_INTEGRATION.md for setup instructions.
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-12 bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h3 className="text-blue-800 font-roboto text-lg font-bold mb-3">
              📋 Next Steps for Full Setup
            </h3>
            <ol className="text-blue-700 space-y-2 text-sm">
              <li>1. Set up email service (SMTP) for registration notifications</li>
              <li>2. Configure WooCommerce for payment processing</li>
              <li>3. Create products in WooCommerce for each program</li>
              <li>4. Test the complete registration → payment flow</li>
              <li>5. Set up automated email confirmations for parents</li>
            </ol>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
