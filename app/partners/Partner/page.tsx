'use client';

import { useEffect, useState } from 'react';

interface Partner {
  id: string;
  name: string;
  type?: string;
  description?: string;
  website?: string;
  logoUrl?: string;
}

const fallbackImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vCOGbSxOES4ol-sz6p9uWrkInrPtguzTJQ&s";

export default function PartnersPage() {
  const [partners, setPartners] = useState<Partner[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchPartners() {
      try {
        const res = await fetch('/api/partners');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch partners');
        setPartners(data);
      } catch (err) {
        setError('Failed to load partners.');
        console.error(err);
      }
    }

    fetchPartners();
  }, []);

  return (
    <main className="bg-[#111] min-h-screen py-10 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-gray-400 text-xl">2025</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Media Partners</h1>
      </div>

      <h2 className="text-white text-xl mb-4 border-b border-gray-700 pb-2">PARTNERS</h2>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {partners.map((partner) => (
          <li key={partner.id} className="flex bg-[#181818] rounded shadow border border-gray-700 overflow-hidden">
            {/* Image */}
            <div className="w-[180px] min-w-[180px] bg-white flex items-center justify-center p-4">
              <img
                src={partner.logoUrl || fallbackImage}
                alt={partner.name}
                className="object-contain h-32 w-auto"
              />
            </div>

            {/* Text */}
            <div className="flex-1 p-4 text-white">
              <h2 className="text-lg md:text-xl font-semibold mb-1">{partner.name}</h2>
              <p className="text-gray-300 text-sm line-clamp-4">
                {partner.description || 'No description available.'}
              </p>
              {partner.website && (
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 text-sm mt-2 inline-block hover:underline"
                >
                  Visit Website
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
