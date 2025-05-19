export default function BannerSection() {
  return (
    <div className="relative overflow-hidden text-white bg-gradient-to-b from-[#1e6b87] to-[#2a9d8f]">
      <div className="relative z-10 p-8 flex flex-col justify-center items-center h-[500px] md:h-[600px] lg:h-[700px]">
        {/* You can add your text here */}
        {/* <h1 className="text-4xl font-bold mb-4">Welcome to Malaysia's Mobility Ecosystem</h1> */}
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/image/evreg.jpg"
          alt="Malaysia Mobility Ecosystem"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}