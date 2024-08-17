import Link from "next/link";
import PlacePhoto from "./PlacePhoto";

interface HotelCardItemProps {
    hotel: {
        HotelName: string;
        Address: string;
        Price: string;
        Rating: string;
    };
};

export default function HotelCardItem({ hotel }: HotelCardItemProps) {
  return (
    <Link href={`https://google.com/maps/search/?api=1&query=${encodeURIComponent(hotel.HotelName + ", " + hotel.Address)}`} target="_blank">
        <div className="hover:scale-105 transition-all cursor-pointer">
            <PlacePhoto
                query={hotel.HotelName}
                alt={hotel.HotelName}
                className="rounded-xl h-[180px] w-full object-cover"
            />
            <div className="flex flex-col my-2 gap-2">
                <h2 className="font-medium">{hotel.HotelName}</h2>
                <h2 className="text-xs text-gray-500">📍 {hotel.Address}</h2>
                <h2 className="text-sm">💰 {hotel.Price}</h2>
                <h2 className="text-sm">⭐ {hotel.Rating}</h2>
            </div>
        </div>
    </Link>
  )
}
