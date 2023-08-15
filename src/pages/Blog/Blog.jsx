const Blog = () => {
  return (
    <div className="mt-5 w-3/4 mx-auto">
      <div className="card">
        <div className="card-header bg-blue-500 text-white">
          What is the MERN stack, and how do its components interact with each
          other?
        </div>
        <div className="card-body">
          <p className="card-text">
            The MERN stack is a combination of technologies used to build modern
            web applications. It consists of: MongoDB: A NoSQL database that
            stores data in a flexible, JSON-like format. Express.js: A backend
            framework for building APIs and handling server-side logic. React: A
            JavaScript library for building user interfaces and managing the
            frontend. Node.js: A runtime environment that allows JavaScript to
            run on the server-side. In the MERN stack, the frontend built with
            React interacts with the backend built with Express.js and Node.js
            via API requests. MongoDB stores the data that is fetched and
            manipulated by the backend. This combination allows for building
            full-stack applications using JavaScript throughout the development
            process.
          </p>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header bg-blue-500 text-white">
          Explain the concept of Single Page Applications (SPAs) in the context
          of React and the MERN stack.
        </div>
        <div className="card-body">
          <p className="card-text">
            SPAs are web applications that load a single HTML page and
            dynamically update content as the user interacts with the app. In
            the MERN stack, React is commonly used to build SPAs. React
            components manage the UI and render changes efficiently by updating
            only the necessary parts of the page. This provides a seamless user
            experience and eliminates the need for full page reloads.
          </p>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header bg-blue-500 text-white">
          How does Express.js simplify the creation of APIs in the MERN stack?
        </div>
        <div className="card-body">
          <p className="card-text">
            Express.js is a minimal and flexible backend framework for building
            APIs in Node.js. It simplifies API creation by providing methods to
            handle routing, middleware, and request/response management. With
            Express.js, developers can easily define routes, handle different
            HTTP methods, validate data, and interact with databases like
            MongoDB. This streamlines the process of building RESTful APIs for
            the MERN stack applications.
          </p>
        </div>
      </div>
      <div className="card mt-5">
        <div className="card-header bg-blue-500 text-white">
          What is the role of Webpack in a MERN stack application?
        </div>
        <div className="card-body">
          <p className="card-text">
            Webpack is a module bundler that helps manage and optimize frontend
            assets like JavaScript, CSS, and images. In a MERN stack
            application, Webpack is commonly used to bundle and transpile React
            components and other frontend assets. It can also handle tasks like
            minification, code splitting, and hot module replacement. Webpack's
            configuration allows developers to bundle and organize assets
            efficiently, making the application performant and optimized for
            production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
