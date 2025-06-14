'use client';

import { useEffect, useState } from 'react';

interface Exhibitor {
  id: string;
  name: string;
  boothNumber?: string;
  category?: string;
  description?: string;
  image?: string;
  status?: string;
}

export default function ExhibitorsPage() {
  const [exhibitors, setExhibitors] = useState<Exhibitor[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchExhibitors() {
      try {
        const res = await fetch('/api/exhibitors');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Failed to fetch exhibitors');
        setExhibitors(data);
      } catch (err) {
        setError('Failed to load exhibitors.');
        console.error(err);
      }
    }

    fetchExhibitors();
  }, []);

  return (
    <main className="bg-[#111] min-h-screen py-10 px-6 md:px-20">
      <div className="text-center mb-12">
        <h2 className="text-gray-400 text-xl">2025</h2>
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400">Exhibitors.</h1>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <ul className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {exhibitors.map((ex) => (
          <li key={ex.id} className="flex bg-[#181818] rounded shadow border border-gray-700 overflow-hidden">
            {/* Image box */}
            <div className="w-[180px] min-w-[180px] bg-white flex items-center justify-center p-4">
              {ex.image ? (
                <img src={ex.image} alt={ex.name} className="object-contain h-32 w-auto" />
              ) : (
                <div className="text-gray-500 text-sm">No Image</div>
              )}
            </div>

            {/* Text box */}
            <div className="flex-1 p-4 text-white">
              <h2 className="text-lg md:text-xl font-semibold mb-2">{ex.name}</h2>
              <p className="text-gray-300 text-sm line-clamp-4">
                {ex.description || 'No description available.'}
              </p>
              {ex.boothNumber && (
                <p className="text-gray-400 text-xs mt-2">Booth: {ex.boothNumber}</p>
              )}
              {ex.category && (
                <p className="text-gray-400 text-xs">Category: {ex.category}</p>
              )}
              {ex.status && (
                <p className="text-gray-500 text-xs mt-1">{ex.status}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
