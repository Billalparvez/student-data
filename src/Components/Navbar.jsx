const Navbar = () => {
  return (
    <div>
      {/* <!-- Navbar Starts --> */}
      <nav className="py-6">
        <div className="container mx-auto flex items-center justify-between gap-x-6">
          {/* <!-- Logo --> */}
          <a href="/">
            <img
              className="h-[40px]"
              src="https://i.postimg.cc/hvqjkPb9/7809566-removebg-preview.png"
              alt="Lws"
            />
          </a>
          {/* <!-- Logo Ends --> */}
          <a
            className="px-5 py-2 rounded-[44px]  text-white font-bold  hover:bg-[#186149]  border-b-4 border-t-0 border-l-0 border-r-0 border-white bg-[#186149]"
            href="#"
          >
            Get Admission
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
