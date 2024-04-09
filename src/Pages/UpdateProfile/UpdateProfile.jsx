import { useContext, useRef } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updatingProfile } = useContext(AuthContext);
  const nameRef = useRef(null);
  const photoURLRef = useRef(null);

  const handleUpdateInfo = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const photoURL = photoURLRef.current.value;
    updatingProfile(name, photoURL)
      .then(() => {
        swal({
          title: "Good job!",
          text: "You are successfully Updated information!",
          icon: "success",
        });
        <Navigate to="/updateProfile"></Navigate>;
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="my-8">
      <div className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-lg shadow-lg ">
        <h2 className="text-2xl font-semibold mb-4">User Information</h2>
        <form onSubmit={handleUpdateInfo}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameRef}
              className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={user?.displayName}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={user?.email}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              name="photoURL"
              ref={photoURLRef}
              className="border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              defaultValue={user?.photoURL}
            />
          </div>
          <div className="text-center">
            <img
              src={user?.photoURL}
              alt="User"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
          </div>
          <button
            type="submit"
            className="btn hover:bg-red-400 bg-orange-400 text-white font-bold flex justify-center w-full"
          >
            Update Information
          </button>
        </form>
      </div>
      <Toaster></Toaster>
    </div>
  );
};

UpdateProfile.propTypes = {};

export default UpdateProfile;
