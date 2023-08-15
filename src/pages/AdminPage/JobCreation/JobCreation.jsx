import axios from "axios";
import { useForm } from "react-hook-form";
const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const JobCreation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageResponse) => {
        if (imageResponse.success) {
          const imageURL = imageResponse.data.display_url;
          // destructuring from submitted value
          const {
            name,
            address,
            companyName,
            position
          } = data;
          // create new object to input mongodb
          const newItems = {
            name,
            address,
            companyName,
            position,
            image: imageURL,
            
          };
          // accessing mongodb to input
          axios
            .post("https://job-hunter-server-eight.vercel.app/jobs", newItems)
            .then((data) => {
              if (data.data.insertedId) {
                reset();
                alert("Data uploaded successfully");
              }
            });
        }
      });
  };

  return (
    <div className="w-full">
      <h3 className="text-center font-bold mb-4 mt-5">Create Job Post</h3>
      <form
        className="w-full max-w-md mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-3">
          <label className="block mb-1">Job Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-danger">Name field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register("address", { required: true })}
          />
          {errors.address && (
            <span className="text-danger">Address field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Company Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register("companyName", { required: true })}
          />
          {errors.companyName && (
            <span className="text-danger">Company Name field is required</span>
          )}
        </div>
        <div className="mb-3">
          <label className="block mb-1">Image</label>
          <input
            type="file"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <span className="text-danger">Image is required</span>
          )}
        </div>
        <select
          className="select select-info w-full"
          {...register("position", { required: true })}
        >
          <option disabled selected>
            Select Position
          </option>
          <option value="fresher">Fresher</option>
          <option value="experienced">Experienced</option>
        </select>

        <button type="submit" className="btn btn-primary w-full py-2 mt-4">
          Add Job
        </button>
      </form>
    </div>
  );
};

export default JobCreation;
