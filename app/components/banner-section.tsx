'use client';

import { usePathname, useSearchParams } from 'next/navigation';

interface BannerSectionProps {
  imageUrl?: string;
  altText?: string;
}

const bannerImageMap: { [key: string]: { image: string; alt: string } } = {
  enquiry: {
    image: '/image/banner/revreg.png',
    alt: 'Enquiry Banner',
  },
  delegate: {
    image: '/image/banner/revreg.jpg',
    alt: 'Delegate Banner',
  },
  exhibitor: {
    image: '/image/banner/exhibitor.png',
    alt: 'Exhibition Banner',
  },
  sponsor: {
    image: '/image/banner/revreg.jpg',
    alt: 'Sponsorship Banner',
  },
  brochure: {
    image: '/image/banner/brochure.png',
    alt: 'Brochure Banner',
  },
};

export default function BannerSection({ imageUrl, altText }: BannerSectionProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = pathname?.toLowerCase().split('/').filter(Boolean);
  const queryType = searchParams.get('t'); // <-- this is what you need for "exhibitor"

  const currentKey =
    queryType && bannerImageMap.hasOwnProperty(queryType)
      ? queryType
      : segments?.find((segment) => bannerImageMap.hasOwnProperty(segment));

  const fallback = currentKey ? bannerImageMap[currentKey] : null;

  const finalImage = imageUrl || fallback?.image || 'image/banner/revreg.jpg'; // make sure this fallback exists
  const finalAlt = altText || fallback?.alt || 'Registration Banner';

  return (
    <div className="relative overflow-hidden text-white bg-gradient-to-b from-[#1e6b87] to-[#2a9d8f]">
      <div className="relative z-10 p-8 flex flex-col justify-center items-center h-[500px] md:h-[600px] lg:h-[700px]">
        {/* Optional overlay text */}
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={finalImage}
          alt={finalAlt}
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
