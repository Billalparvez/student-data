const Bannar = () => {
  return (
    <div className="bg-[radial-gradient(50%_50%_at_50%_50%,#17956D_0%,#0F684C_100%)] pt-30 pb-20 -mt-[92px] md:-mt-[118px]">
      <div className="container">
        <div className="grid md:grid-cols-2 items-center w-10/12 mx-auto">
          <img
            className="md:order-2 object-cover ml-auto animate-updown"
            src="https://i.postimg.cc/pX3FCx3J/8202587-removebg-preview.png"
            width="500px"
            height="500px"
            alt="Banner"
          />
          <div>
            <h1 className="text-4xl text-white lg:text-[56px] font-bold leading-[1.1] mb-8">
              The Future of Learning starts with students at the center
            </h1>
            <button className="btn  text-white font-bold rounded-full hover:bg-[#186149]  border-b-4 border-t-0 border-l-0 border-r-0 border-white bg-[#186149]">
              Lear More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
