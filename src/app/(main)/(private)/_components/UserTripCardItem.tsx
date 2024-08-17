import { FC } from "react";
import Link from "next/link";
import PlacePhoto from "./PlacePhoto"; // Ensure the correct path to PlacePhoto
import { TripData } from "@/services/firestoreService"; // Adjust the import path based on your project structure

interface UserTripCardItemProps {
  trip: TripData;
}

const UserTripCardItem: FC<UserTripCardItemProps> = ({ trip }) => {
  return (
    <Link href={`/view-trip/${trip.id}`} passHref>
      <div className="cursor-pointer hover:scale-105 transition-all">
        <PlacePhoto
          query={trip?.userSelection?.location?.label || ""}
          alt={trip?.userSelection?.location?.label || "Trip photo"}
          className="object-cover rounded-xl h-[180px] w-full"
        />
        <div>
          <h2 className="font-bold text-lg">
            {trip?.userSelection?.location?.label}
          </h2>
          <h2 className="text-sm text-gray-500">
            {trip?.userSelection?.noOfDays} Day(s) trip with {trip?.userSelection?.budget} Budget
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default UserTripCardItem;
