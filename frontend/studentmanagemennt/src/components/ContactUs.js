// import React from "react";

// const ContactUs = () => {
//   return (
//     <div className="container mx-auto py-8 text-black" style={{height:'50rem'}}>
//       <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
//       <p className="text-lg mb-4">
//         Have any questions or feedback? We'd love to hear from you! Feel free to
//         reach out to our team using the contact information provided below:
//       </p>
//       <div className="flex items-center mb-4">
//         <svg
//           className="w-6 h-6 mr-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 13l4 4L19 7"
//           />
//         </svg>
//         <span className="text-lg">Email:uditagrawal212@gmail.com</span>
//       </div>
//       <div className="flex items-center">
//         <svg
//           className="w-6 h-6 mr-2"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//           />
//         </svg>
//         <span className="text-lg">Phone: +91 7987096523</span>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;


import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800">
      <div className="max-w-3xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700">
          Contact Us
        </h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          Have any questions or feedback? We'd love to hear from you! Feel free to
          reach out to our team using the contact information below:
        </p>

        <div className="space-y-6">
          <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:shadow-md transition duration-200">
            <svg
              className="w-6 h-6 text-blue-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12H8m0 0H6m2 0h8m0 0h2"
              />
            </svg>
            <span className="text-lg font-medium text-gray-700">
              Email: <a href="mailto:uditagrawal212@gmail.com" className="text-blue-600 hover:underline">uditagrawal212@gmail.com</a>
            </span>
          </div>

          <div className="flex items-center bg-blue-50 p-4 rounded-lg hover:shadow-md transition duration-200">
            <svg
              className="w-6 h-6 text-blue-600 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10l1.5 1.5a9 9 0 0012.75 0L19 10m-7 7v.01"
              />
            </svg>
            <span className="text-lg font-medium text-gray-700">
              Phone: <a href="tel:+917987096523" className="text-blue-600 hover:underline">+91 79870 96523</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
