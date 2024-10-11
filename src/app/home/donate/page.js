import Image from 'next/image';
import { FaUniversity, FaMoneyCheckAlt, FaBarcode } from 'react-icons/fa';

const Page = () => {
  return (
    <div className="flex flex-col mt-[120px] mb-[30px] max-w-[1200px] mx-auto lg:flex-row justify-between items-start bg-white p-8 rounded-xl shadow-2xl border border-gray-200">
      {/* Bank Details Section */}
      <div className="w-full lg:w-1/2 p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Bank Account Details</h2>
        <div className="mb-6 flex items-center">
          <FaMoneyCheckAlt className="text-2xl text-green-700 mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-600">Account No.</p>
            <p className="text-xl text-gray-800">803200010052901</p>
          </div>
        </div>
        <div className="mb-6 flex items-center">
          <FaUniversity className="text-2xl text-blue-700 mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-600">Bank Name</p>
            <p className="text-xl text-gray-800">Karnataka Bank, Kunjibettu Udupi</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaBarcode className="text-2xl text-red-700 mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-600">IFSC Code</p>
            <p className="text-xl text-gray-800">KARB0000803</p>
          </div>
        </div>
      </div>

      {/* UPI QR Code and Icons Section */}
      <div className="w-full lg:w-1/2 mt-6 lg:mt-0 flex flex-col items-center">
        <Image
          src="/images/home/qr-code.png" // Replace with the correct path of your combined image
          alt="QR Code and UPI Icons"
          width={300}
          height={400} // Adjust the height as per your image dimensions
          className="rounded-lg"
        />
        <p className="mt-6 text-2xl font-semibold text-gray-800">BHIM UPI Payments Accepted</p>
        <p className="mt-2 text-gray-600 text-center">Account No: 803200010052901, IFSC Code: KARB0000803</p>
        <p className="mt-2 text-gray-600 text-center">Scan and Pay using any UPI supported apps</p>
      </div>
    </div>
  );
};

export default Page;
