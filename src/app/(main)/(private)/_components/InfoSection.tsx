import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PlacePhoto from "./PlacePhoto";

interface InfoSectionProps {
    trip: {
        userSelection: {
            location: { label: string };
            noOfDays: number;
            budget: string;
            traveler: number;
        }
    };
};

export default function InfoSection({ trip }: InfoSectionProps) {
  return (
    <div>
        <PlacePhoto 
            query={trip.userSelection.location.label}
            alt={trip.userSelection.location.label}
            className="h-96 w-full object-cover rounded-xl"
        />
        <div className="flex justify-between items-center">
            <div className="my-5 flex flex-col gap-2">
                <h2 className="font-bold text-2xl">{trip.userSelection.location.label}</h2>
                <div className="flex flex-wrap gap-2">
                    <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
                        🗓️ {trip.userSelection.noOfDays} Days
                    </h2>
                    <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
                        💰 {trip.userSelection.budget} Budget
                    </h2>
                    <h2 className="p-1 px-3 bg-gray-200 rounded-full text-gray-500 text-xs md:text-sm">
                        🥂 No Of Travelers: {trip.userSelection.traveler}
                    </h2>
                </div>
            </div>
            <Button variant="outline"><Share2 className="w-5 h-5 md:w-7 md:h-7"/></Button>
        </div>
    </div>
  )
}
