const Button = ({ children }) => {
      return (
            <button
                  className="relative rounded px-5 py-2.5 overflow-hidden group bg-yellow-400 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-yellow-400 transition-all ease-out duration-300">
                  <span
                        className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                  <span className="relative text-base font-semibold">{children}</span>
            </button>
      );
};

export default Button;