'use client';

import { useEffect, useState } from 'react';

interface MediaPartner {
  id: string;
  name: string;
  image: string;
  website?: string;
  description?: string; // Optional if you want to add in the future
}

const fallbackImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2vCOGbSxOES4ol-sz6p9uWrkInrPtguzTJQ&s';

export default function MediaPartnersPage() {
  const [mediaPartners, setMediaPartners] = useState<MediaPartner[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMediaPartners() {
      try {
        const res = await fetch('/api/media-partners');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch media partners');
        setMediaPartners(data);
      } catch (err) {
        setError('Failed to load media partners.');
        console.error(err);
      }
    }

    fetchMediaPartners();
  }, []);

  return (
    <main className="bg-[#111] min-h-screen py-10 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-gray-400 text-xl">2025</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Media Partners</h1>
      </div>

      <h2 className="text-white text-xl mb-4 border-b border-gray-700 pb-2">MEDIA PARTNERS</h2>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {mediaPartners.map((mediaPartner) => (
          <li key={mediaPartner.id} className="flex bg-[#181818] rounded shadow border border-gray-700 overflow-hidden">
            <div className="w-[180px] min-w-[180px] bg-white flex items-center justify-center p-4">
              <img
                src={mediaPartner.image || fallbackImage}
                alt={mediaPartner.name}
                className="object-contain h-32 w-auto"
              />
            </div>
            <div className="flex-1 p-4 text-white">
              <h2 className="text-lg md:text-xl font-semibold mb-1">{mediaPartner.name}</h2>
              <p className="text-gray-300 text-sm line-clamp-4">
                {mediaPartner.description || 'No description available.'}
              </p>
              {mediaPartner.website && (
                <a
                  href={mediaPartner.website}
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
