import { motion } from "framer-motion";
import project1 from "../../assets/projecsImage/project1.png";
import project2 from "../../assets/projecsImage/project2.png";
import project3 from "../../assets/projecsImage/project3.png";
import HText from "../../shared/HText";

const Profile = () => {
  const projects = [
    {
      id: 1,
      image:  project1 ,
      name: "Thread Sharing",
      description: `Developed a Thread Sharing website with Clerk for authentication, Shadcn for component management, and Uploadthnig for file uploading.
          Implemented key features, including user profiles, community creation, thread posting, commenting, and replying to comments.
          Utilize MongoDB with Mongoose for efficient data management, ensuring a seamless user experience with optimized performance and security`,
    },
    {
      id: 2,
      image:  project2 ,
      name: "Toy World",
      description: `The Toy Home Page will show lots of information about car toys. 
          The home page contains a gallery section and also contains three sub-category lists that are filtered by category name.
          You can also update or delete your created toy after logging in.`,
    },
    {
      id: 3,
      image:  project3 ,
      name: "Gym Instruction",
      description: `Gym instruction website, here we can learn how to actual way to do gym`,
    },
  ];
  return (
    <>
      <div className="mx-auto min-h-full w-5/6 py-20">
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
            MY TOP 3 <span className="text-blue-400">PROJECT</span>
          </HText>
        </motion.div>
      </div>
      <div className="mx-auto min-h-full w-5/6 py-20 flex flex-wrap gap-10 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            className="card w-96 bg-base-100 shadow-xl flex flex-col items-center"
          >
            <figure className="px-10 pt-10">
              <img src={project.image} alt="company" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{project.name}!</h2>
              <p className="card-title">{project.description}!</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Profile;
