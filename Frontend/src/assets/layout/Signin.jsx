const Signup = () => {
  return (
    <div id="signin" className="bg-black min-h-screen flex items-center justify-center px-4">
      {/* OUTER GLOW BORDER */}
      <div
        className="
        group relative
        w-full max-w-95
        p-0.5
        rounded-2xl
        bg-linear-to-r
        from-cyan-600
        via-cyan-500
        to-cyan-700
        hover:scale-105
        transition duration-500
        "
      >
        {/* CARD */}
        <div
          className="
          bg-black
          rounded-2xl
          p-8
          text-white
          shadow-2xl
          group-hover:bg-linear-to-br
          group-hover:from-black
          group-hover:to-cyan-950
          transition duration-500
          "
        >
          {/* HEADING */}
          <h1 className="text-3xl font-bold text-center mb-2">
            Create Your Account
          </h1>

          <p className="text-gray-400 text-center mb-6">Join us today!</p>

          {/* INPUTS */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full
              p-3
              rounded-lg
              bg-black
              border border-cyan-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
              hover:border-cyan-400
              transition
              "
            />

            <input
              type="email"
              placeholder="Email Address"
              className="
              w-full
              p-3
              rounded-lg
              bg-black
              border border-cyan-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
              hover:border-cyan-400
              transition
              "
            />

            <input
              type="password"
              placeholder="Password"
              className="
              w-full
              p-3
              rounded-lg
              bg-black
              border border-cyan-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
              hover:border-cyan-400
              transition
              "
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="
              w-full
              p-3
              rounded-lg
              bg-black
              border border-cyan-600
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-500
              hover:border-cyan-400
              transition
              "
            />
          </div>

          {/* BUTTON */}
          <button
            className="
            mt-6
            w-full
            py-3
            rounded-lg
            font-bold
            bg-cyan-600
            hover:bg-cyan-500
            shadow-lg
            shadow-cyan-600/50
            hover:shadow-cyan-500/80
            hover:scale-105
            transition duration-300
            "
          >
            Sign Up
          </button>

          {/* LOGIN */}
          <p className="text-gray-400 text-sm text-center mt-4">
            Already have an account?{" "}
            <a
              href="/login"
              className="
              text-cyan-500
              hover:text-cyan-300
              transition
              "
            >
              Login here →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
