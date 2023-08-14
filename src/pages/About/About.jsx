import aboutImg from "../../assets/about.png";
import aboutImg2 from "../../assets/about2.png";
const About = () => {
  return (
    <div className="container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 ">
      <div className="w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5">
        <div className="w-full md:2/3 2xl:w-2/4">
          <h1 className="text-3xl text-blue-600 font-bold mb-5">About Us</h1>
          <p className="text-justify leading-7">
            About Us Welcome to Job Hunting, your trusted partner in the journey
            to find the perfect job. Our mission is to empower job seekers by
            providing a comprehensive platform that connects them with the best
            opportunities. At Job Hunting.
          </p>
        </div>
        <img src={aboutImg} alt="About" className="w-auto h-[300px]" />
        <img src={aboutImg2} alt="About" className="w-auto h-[300px]" />
      </div>

      <div className="leading-8 px-5 text-justify">
        <p>
          We understand the challenges of job hunting. Our team is dedicated to
          simplifying this process for you. We offer a vast range of job
          listings across various industries, all in one place. Whether you're a
          fresh graduate or a seasoned professional, we've got something for
          you. Our user-friendly interface allows you to search, filter, and
          apply for jobs that match your skills and aspirations. We believe in
          the potential of every individual and are committed to helping you
          take the next step in your career. Thank you for choosing [Your Job
          Hunting Website Name]. Together, let's shape your future and make your
          dream job a reality.
        </p>
      </div>
    </div>
  );
};

export default About;
