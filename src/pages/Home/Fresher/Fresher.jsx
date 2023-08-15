import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HText from "../../../shared/HText";

const Fresher = () => {
  const [jobList, setJobList] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setJobList(result);
      });
  }, []);
  const [showAllJob, setShowAllJob] = useState(false);
  const fresherJobs = jobList.filter((job) => job.position === "fresher");

  return (
    <>
      <div  id="fresherSection" className="mx-auto min-h-full w-5/6 py-20">
        <div>
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
              FRESHER JOB WILL <span className="text-blue-400">FIT</span>
            </HText>
          </motion.div>
        </div>
        {fresherJobs.slice(0, showAllJob ? undefined : 6).map((job) => (
          <div key={job._id} className="my-5 card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={job?.image} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <span className="font-semibold">Job Title:</span>
                {job?.name}
              </h2>
              <p>
                <span className="font-semibold">Address:</span>
                {job.address}
              </p>
              <p>
                <span className="font-semibold">Company Name:</span>
                {job?.companyName}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>
        ))}
        <div className="text-center mt-8">
          {fresherJobs.length > 0 && !showAllJob && (
            <button
              className="btn btn-secondary text-center"
              onClick={() => setShowAllJob(true)}
            >
              Show All Jobs
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Fresher;
