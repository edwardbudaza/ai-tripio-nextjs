import React from 'react';
import PlaceCardItem from './PlaceCardItem';

interface GeoCoordinates {
  lat: number;
  lng: number;
}

interface Hotel {
  HotelName: string;
  Address: string;
  Price: string;
  ImageUrl: string;
  GeoCoordinates: GeoCoordinates;
  Rating: string;
  Description: string;
}

interface Plan {
  PlaceName: string;
  PlaceDetails: string;
  ImageUrl: string;
  GeoCoordinates: GeoCoordinates;
  TicketPrice: string;
  Rating: string;
  TravelTime: string;
  Time: string;
}

interface ItineraryItem {
  Day: string;
  Description: string;
  Title: string;
  Plan: Plan[];
}

interface TripData {
  hotels: Hotel[];
  itinerary: ItineraryItem[];
}

interface PlacesToVisitProps {
  itinerary: ItineraryItem[];
}



const PlacesToVisit: React.FC<PlacesToVisitProps> = ({ itinerary }) => {
  return (
    <div>
      <h2 className="font-bold text-lg">Places to Visit</h2>
      <div>
        {itinerary.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="font-medium text-lg">{item.Day}</h2>
            <div className="grid md:grid-cols-2 gap-5">
              {item.Plan.map((plan, index) => (
                <div key={index}>
                    <h2 className="font-medium text-sm text-orange-600">{plan.Time}</h2>
                    <PlaceCardItem place={plan} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlacesToVisit;
