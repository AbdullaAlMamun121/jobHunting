import { useState } from "react";
import HText from "../../../shared/HText";
import { motion } from "framer-motion";

const Company = () => {
  const companies = [
    {
      id: 1,
      image: "image-url-1",
      companyName: "Bangladeshi Company 1",
      description: "Bangladeshi IT Company 1 description.",
    },
    {
      id: 2,
      image: "image-url-2",
      companyName: "Bangladeshi Company 2",
      description: "Bangladeshi IT Company 2 description.",
    },
    {
      id: 3,
      image: "image-url-3",
      companyName: "Bangladeshi Company 3",
      description: "Bangladeshi IT Company 3 description.",
    },
    {
      id: 4,
      image: "image-url-4",
      companyName: "Worldwide Company 1",
      description: "Worldwide IT Company 1 description.",
    },
    {
      id: 5,
      image: "image-url-5",
      companyName: "Worldwide Company 2",
      description: "Worldwide IT Company 2 description.",
    },
    {
      id: 6,
      image: "image-url-6",
      companyName: "Worldwide Company 3",
      description: "Worldwide IT Company 3 description.",
    },
  ];
  const [selectedCompany, setSelectedCompany] = useState(null);

  const openDetails = (company) => {
    setSelectedCompany(company);
  };

  const closeDetails = () => {
    setSelectedCompany(null);
  };

  return (
    <>
      <div id="itCompany" className="mx-auto min-h-full w-5/6 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            TOP 6 <span className="text-blue-400">COMPANY</span>
          </HText>
        </motion.div>
      </div>
      <div className="mx-auto min-h-full w-5/6 py-20 flex flex-wrap gap-10 justify-center">
        {companies.map((company) => (
          <div
            key={company.id}
            className="card w-96 bg-base-100 shadow-xl flex flex-col items-center"
          >
            <figure className="px-10 pt-10">
              <img src={company.image} alt="company" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{company.companyName}!</h2>
              <div className="card-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => openDetails(company)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCompany && (
        <div className="fixed inset-0 flex items-center justify-center z-50 shadow-lg">
          <div className="bg-white p-8 w-96 max-w-full mx-auto rounded-lg shadow-lg">
            <h3 className="font-bold text-lg mb-4">
              {selectedCompany.companyName}
            </h3>
            <p className="mb-4">{selectedCompany.description}</p>
            <div className="flex justify-end">
              <button
                className="btn btn-secondary"
                onClick={closeDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Company;
