import Link from "next/link";
import PlacePhoto from "./PlacePhoto";

interface GeoCoordinates {
  lat: number;
  lng: number;
}

interface ItineraryItem {
  PlaceName: string;
  PlaceDetails: string;
  ImageUrl: string;
  GeoCoordinates: GeoCoordinates;
  TicketPrice: string;
  Rating: string;
  TravelTime: string;
  Time: string; 
}

interface PlaceCardItemProps {
  place: ItineraryItem;
}

export default function PlaceCardItem({ place }: PlaceCardItemProps) {
  return (
    <Link
      href={`https://google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.PlaceName
      )}&center=${place.GeoCoordinates.lat},${place.GeoCoordinates.lng}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex border rounded-xl p-3 mt-2 gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer">
        <PlacePhoto
          query={place.PlaceName}
          alt={place.PlaceName}
          className="w-full h-[100px] rounded-xl object-cover"
        />
        <div>
          <h2 className="font-bold text-lg">{place.PlaceName}</h2>
          <p className="text-xs text-gray-400">{place.PlaceDetails}</p>
          <p className="text-sm text-gray-500">⭐ {place.Rating}</p>
          <p className="text-sm text-gray-500">💰 {place.TicketPrice}</p>
          <p className="text-sm text-gray-500">⏱️ {place.TravelTime}</p>
        </div>
      </div>
    </Link>
  );
}
