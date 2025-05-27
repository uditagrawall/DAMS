// import React from "react";

// const AboutUs = () => {
//   return (
//     <div className="container mx-auto py-8 text-black" style={{height:'50rem'}}>
//       <h1 className="text-3xl font-bold mb-4">
//         Welcome to DAMS - Your Academic Companion
//       </h1>
//       <p className="text-lg mb-4">
//         DAMS is a comprehensive academic management system tailored
//         specifically for the students and faculty of Acropolis College.
//       </p>
//       <p className="text-lg mb-4">
//         Our platform provides students with easy access to essential academic
//         resources, including notes, study materials, and certificate management.
//       </p>
//       <p className="text-lg mb-4">
//         Teachers have a dedicated dashboard where they can manage student
//         information, track academic progress, and provide personalized guidance
//         and support.
//       </p>
//       <p className="text-lg mb-4">
//         At DAMS, we strive to create an environment that fosters academic
//         success, collaboration, and student empowerment.
//       </p>
//     </div>
//   );
// };

// export default AboutUs;


import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 py-16 px-6 sm:px-12 md:px-20 lg:px-32 text-gray-800 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-700 animate-fade-in-up">
          Welcome to <span className="text-blue-900">DAMS</span> - Your Academic Companion
        </h1>
        <div className="space-y-5 text-lg leading-relaxed text-gray-700 animate-fade-in-up">
          <p>
            <span className="font-semibold text-blue-700">DAMS</span> is a comprehensive academic management system
            tailored specifically for the students and faculty of Acropolis College.
          </p>
          <p>
            Our platform provides students with easy access to essential academic resources,
            including notes, study materials, and certificate management.
          </p>
          <p>
            Teachers have a dedicated dashboard where they can manage student information, track academic progress,
            and provide personalized guidance and support.
          </p>
          <p>
            At <span className="font-semibold text-blue-700">DAMS</span>, we strive to create an environment that fosters
            academic success, collaboration, and student empowerment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
