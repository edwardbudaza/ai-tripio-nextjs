"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/services/GlobalApi';
import { cn } from '@/lib/utils';

interface PlacePhotoProps {
  query: string;
  alt: string;
  className?: string;
}

export default function PlacePhoto({ query, alt, className }: PlacePhotoProps) {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const data = { textQuery: query };
        const result = await GetPlaceDetails(data);
        const photoName = result.data.places[0].photos[3].name;
        const url = PHOTO_REF_URL.replace("{NAME}", photoName);
        setPhotoUrl(url);
      } catch (error) {
        console.error('Error fetching photo:', error);
        setPhotoUrl(null);
      }
    };

    fetchPhoto();
  }, [query]);

  return (
    <div className={cn("relative", className)}>
        <Image
            src={photoUrl || "/placeholder.jpg"}
            alt={alt}
            className="rounded-lg"
            layout="fill"
        />
    </div>
  );
}