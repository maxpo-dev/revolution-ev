export default function InnovationHero() {
  return (
    <section className="bg-white px-6 md:px-16 py-10 ml-40">
      <div className="max-w-7xl mx-auto">
        {/* Line 1: Get + Description */}
        <div className="flex flex-wrap items-baseline gap-x-2 text-[14px] font-normal text-black">
          <span className="text-[40px] font-black leading-none text-black mr-2">Get</span>
          <span className="ml-5" >
            Walk Away Energized And Inspired By The{' '} br
            <span className="text-[#00BCD4]">World's Most Innovative Ideas</span>, Prototypes, And Strategies That Are Reshaping{' '}
            <span className="text-[#00BCD4]">The Future Of <br /> Transportation</span>
          </span>
        </div>

        {/* Line 2: Inspired by Innovation */}
        <div className="mt-2 text-[40px] font-black leading-tight text-black">
          Inspired <span className="text-[#00BCD4]">by Innovation</span>
        </div>
      </div>
    </section>
  );
}
