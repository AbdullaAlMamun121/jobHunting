import header from "../assets/job.jpg";

const Header = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
    
        <div className="hero-content flex-col lg:flex-row">
          <img src={header} className="max-w-lg rounded-lg shadow-2xl" />
          <div className="ml-10">
            <h2 className="text-6xl font-bold">Job Hunting!</h2>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Find job</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
