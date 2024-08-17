"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { getUserTrips } from "@/services/firestoreService";
import UserTripCardItem from "../_components/UserTripCardItem";
import { TripData } from "@/services/firestoreService";

const MyTripsPage = () => {
  const [userTrips, setUserTrips] = useState<TripData[]>([]);
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    const fetchTrips = async () => {
      if (isLoaded && user) {
        try {
          const trips = await getUserTrips(user.emailAddresses[0].emailAddress);
          setUserTrips(trips);
        } catch (error) {
          console.error("Failed to fetch user trips:", error);
          // Handle error, e.g., show a toast notification
        }
      } else if (isLoaded && !user) {
        router.push("/"); // Redirect to home if user is not authenticated
      }
    };

    fetchTrips();
  }, [isLoaded, user, router]);

  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
      <h2 className="font-bold text-3xl">My Trips</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-10">
        {userTrips.length > 0 ? (
          userTrips.map((trip) => (
            <UserTripCardItem key={trip.id} trip={trip} />
          ))
        ) : (
          Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-[220px] w-full bg-slate-200 animate-pulse rounded-xl"
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MyTripsPage;
