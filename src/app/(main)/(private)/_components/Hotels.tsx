 import HotelCardItem from "./HotelCardItem";

interface Hotel {
  Price: string;
  Rating: string;
  imageUrl: string;
  HotelName: string;
  geoCoordinates: string;
  Address: string;
  Description: string;
}

interface HotelsProps {
  hotels: Hotel[];
}

export default function Hotels({ hotels }: HotelsProps) {
  return (
    <section className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Hotel Recommendations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {hotels.map((hotel, index) => (
          <HotelCardItem hotel={hotel} key={index} />
        ))}
      </div>
    </section>
  );
}