import { useState } from "react";
import HText from "../../../shared/HText";
import { motion } from "framer-motion";
import company1 from "../../../assets/comapnyImage/c1.png"
import company2 from "../../../assets/comapnyImage/c2.png"
import company3 from "../../../assets/comapnyImage/c3.png"
import company4 from "../../../assets/comapnyImage/c4.png"
import company5 from "../../../assets/comapnyImage/c5.jpeg"
import company6 from "../../../assets/comapnyImage/c6.png"

const Company = () => {
  const companies = [
    {
      id: 1,
      image: company1,
      companyName: "Rokomari",
      description: "Rokomari is an internet marketplace. They says that they neither promotes or deliberately holds any product back by artificial means such as arbitrary ...",
    },
    {
      id: 2,
      image: company2,
      companyName: "Pandamart",
      description: "pandamart is our one-stop-shop that features your favourite brands. Pick from shampoo and cosmetics to snacks and fresh produce and we'll deliver in just 30 ...",
    },
    {
      id: 3,
      image: company3,
      companyName: "Unimart",
      description: "Unimart is the super shop, which is not just for Pick-&-Buy, it offers Browse-&-Shop Experience to the consumers. Thanks to the large number of Suppliers we",
    },
    {
      id: 4,
      image: company4,
      companyName: "Daraz",
      description: "Bangladesh's best online shopping store with 17+ million products at resounding discounts in dhaka, ctg & All across Bangladesh with cash on delivery (COD)",
    },
    {
      id: 5,
      image: company5,
      companyName: "Nogod",
      description: "Nagad is a Bangladeshi Digital Financial Service, operating under the authority of Bangladesh Post Office",
    },
    {
      id: 6,
      image: company6,
      companyName: "Unilever",
      description: "Unilever is a British multinational consumer packaged goods company founded on 2 September 1929",
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
