const ContactUs = () => {
  return (
    <div className="my-5 max-w-6xl mx-auto px-4 md:px-2 lg:px-2">
      <div className="max-w-md mx-auto mt-8 p-6 px-4 md:px-2 lg:px-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg border-2 border-yellow-200">
        <h2 className="text-2xl font-semibold mb-4 text-white">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-white font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              
              className="w-full px-4 py-2 rounded-lg border border-white focus:outline-none focus:border-blue-400 bg-transparent"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              
              className="w-full px-4 py-2 rounded-lg border border-white focus:outline-none focus:border-blue-400 bg-transparent"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              
              className="w-full px-4 py-2 rounded-lg border border-white focus:outline-none focus:border-blue-400 bg-transparent"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-purple-500 font-semibold px-4 py-2 rounded-lg hover:bg-opacity-75 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
