import React, { useState } from "react";

const CertificateForm = ({ ids }) => {
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    dateOfCert: "",
    pdfURL: null,
  });
  // name: String,
  //     domain: String,
  //     file: {
  //       type: String,
  //     },
  //     dateOfCert: Date,
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      pdfURL: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("domain", formData.domain);
    data.append("dateOfCert", formData.dateOfCert); // Corrected variable name
    data.append("pdf", formData.pdfURL); // Corrected variable name

    try {
      const response = await fetch(
        `http://localhost:5000/api/addCertificate/${ids}`,
        {
          method: "POST",
          body: data,
        }
      );
      if (response.ok) {
        console.log("Certificate uploaded successfully");
        alert("Certificate uploaded successfully");
      } else {
        console.error("Failed to upload certificate");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div
    className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Upload Certificate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Certificate Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 border border-blue-500 border-opacity-15  block w-full shadow-sm sm:text-sm outline-none focus:border-blue-500 focus:border-opacity-100 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="domain"
            className="block text-sm font-medium text-gray-700"
          >
            Domain
          </label>
          <input
            type="text"
            name="domain"
            id="domain"
            value={formData.domain}
            onChange={handleChange}
            required
            className="mt-1 border border-blue-500 border-opacity-15  block w-full shadow-sm sm:text-sm outline-none focus:border-blue-500 focus:border-opacity-100 rounded-md p-2"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="dateOfCert"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Issue
          </label>
          <input
            type="date"
            name="dateOfCert"
            id="dateOfCert"
            value={formData.dateOfCert}
            onChange={handleChange}
            required
            className="mt-1 border border-blue-500  focus:border-blue-500  border-opacity-15 block w-full shadow-sm sm:text-sm  rounded-md p-2 outline-none"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="pdfURL"
            className="block text-sm font-medium text-gray-700"
          >
            Upload PDF File
          </label>
          <input
            type="file"
            name="pdfURL"
            id="pdfURL"
            onChange={handleFileChange}
            required
            accept=".pdf"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2"
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            style={{backgroundColor:'#6e47b8',padding:'10px 30px',color:'white',fontWeight:'1000',fontSize:'20px',marginTop:'20px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
          }}
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default CertificateForm;
