import Image from "next/image";
import Link from "next/link";
type SponsorCardProps = {
  title: string;
  subtitle: string;
  image: string;
  className?: string;
};
function SponsorCard({ title, subtitle, image, className = "" }:SponsorCardProps) {
  return (
    <div className={`bg-white overflow-hidden relative h-[848px] w-full p-3 pb-8 pl-8 ${className}`}>
      {/* Image wrapper with slight crop */}
      <div className="relative w-[calc(100%-24px)] h-[calc(100%-24px)]  overflow-hidden">
        <Image
          src={image}
          alt={`${title} ${subtitle}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Text content over image */}
      <div className="absolute top-2 left-2 right-2 bg-white pt-16 px-4 pb-14">
        <h3 className="text-4xl font-normal text-black">{title}</h3>
        <p className="text-4xl font-normal text-black">{subtitle}</p>
      </div>

      {/* Arrow on bottom right — inside white background */}
      <div className="absolute bottom-9 right-4 w- h-0 border-r-[70px] border-r-transparent border-t-[70px] border-t-teal-400"></div>
    </div>
  );
}

export default function SponsorshipBenefits() {
  return (
    <div className="bg-black text-white p-6 md:p-10 min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Why Sponsor?</h2>

      {/* Grid for first 6 cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SponsorCard title="Brand" subtitle="Positioning" image="/image/Sponsors/Vector 141.png" />
        <SponsorCard title="Direct access to" subtitle="decision-makers" image="/image/Sponsors/Vector 141.png" />
        <SponsorCard title="High-Quality" subtitle="Networking Opportunities" image="/image/Sponsors/Vector 141.png" />
        <SponsorCard title="Boost Visibility with" subtitle="Strategic Branding" image="/image/Sponsors/Vector 141.png" />
        <SponsorCard title="Email" subtitle="Branding" image="/image/Sponsors/Vector 141.png" />
        <SponsorCard title="Social Media" subtitle="Endorsement" image="/image/Sponsors/Vector 141.png" />
      </div>

      {/* Custom row for last 2 cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        <SponsorCard title="PR" subtitle="Support" image="/image/Sponsors/Vector 141.png" />
        <SponsorCard title="Speaking" subtitle="Opportunities" image="/image/Sponsors/Vector 141.png" />
      </div>

      {/* CTA buttons */}
      <div className="flex justify-center mt-8 gap-4">
        <Link href="/register?t=sponsor"><button className="w-60 bg-white text-black px-6 py-2 text-sm font-medium">Sponsor</button></Link>
        
        <button className="w-60 bg-transparent border border-white text-white px-6 py-2 text-sm font-medium">
          Request Tailored Package
        </button>
      </div>
    </div>
  );
}
