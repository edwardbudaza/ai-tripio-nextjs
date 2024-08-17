"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import { cn } from "@/lib/utils";
import { SignInButton, useUser } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { saveTripToFirestore } from "@/services/firestoreService";
import { getUserData } from "@/lib/userUtils";


const GooglePlacesAutocomplete = dynamic(() => import('react-google-places-autocomplete'), { ssr: false });

export default function CreateTripForm() {
  const [formData, setFormData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const userData = getUserData();

  useEffect(() => {
    // On component mount, try to restore the form data from local storage
    const savedFormData = localStorage.getItem("createTripFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  const handleInputChange = (name: string, value: any) => {
    setFormData((prev: any) => {
      const newData = { ...prev, [name]: value };
      localStorage.setItem("createTripFormData", JSON.stringify(newData)); // Save to local storage
      return newData;
    });
  };

  const onGenerateTrip = async () => {
    if (!userData) {
      toast("Please sign in to generate a trip");
      return;
    }

    if (
      !(
        formData?.noOfDays >= 1 &&
        formData?.noOfDays <= 6 &&
        formData?.location &&
        formData?.budget &&
        formData?.traveler
      )
    ) {
      toast("Please fill all the details correctly");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/generate-trip', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to generate trip");

      const data = await response.json();
      localStorage.removeItem("createTripFormData"); // Clear the form data from local storage on success
      console.log("response",data);
      
      const tripId = await saveTripToFirestore(
        data, 
        userData, 
        formData
      );
      
      router.push(`/view-trip/${tripId}`);

      
    } catch (error) {
      console.error(error);
      toast("Failed to generate trip. Please try again");      
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col mt-20 gap-10">
      {/* Place selection */}
      <div>
        <h2 className="text-xl my-3 font-medium">What is your destination of choice?</h2>
        <GooglePlacesAutocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_API_KEY}
          selectProps={{
            value: formData.location,
            onChange: (v) => handleInputChange("location", v),
          }}
        />
      </div>

      {/* Number of days */}
      <div>
        <h2 className="text-xl my-3 font-medium">How many days are you planning for your trip?</h2>
        <Input 
          placeholder="Enter days from 1 to 6 only"
          type="number"
          value={formData.noOfDays || ""}
          onChange={(e) => handleInputChange("noOfDays", e.target.value)}
        />
      </div>

      {/* Budget selection */}
      <div>
        <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
          {SelectBudgetOptions.map((item, index) => (
            <div
              key={index}
              onClick={() => handleInputChange("budget", item.title)}
              className={cn("p-4 border cursor-pointer duration-200 rounded-lg hover:shadow-lg",
                formData?.budget == item.title ? "shadow-lg border-[#8759F2]" : ""
              )}
            >
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg mt-2">{item.title}</h2>
              <h2 className="text-sm text-gray-500 mt-2">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Traveler selection  */}
      <div>
        <h2 className="text-xl my-3 font-medium">Who do you plan to travelling on your next adventure?</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-5 mt-5">
          {SelectTravelesList.map((item, index) => (
            <div 
              key={index} 
              onClick={() => handleInputChange("traveler", item.people)}
              className={cn("p-4 border cursor-pointer duration-200 rounded-lg hover:shadow-lg",
              formData?.traveler === item.people ? "shadow-lg border-[#8759F2]" : ""
            )}>
              <h2 className="text-4xl">{item.icon}</h2>
              <h2 className="font-bold text-lg mt-2">{item.title}</h2>
              <h2 className="text-sm text-gray-500 mt-2">{item.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex my-10 justify-end">
        {isLoaded && !user ? (
          <SignInButton
            mode="modal"
            forceRedirectUrl={"/create-trip"} // Ensures the user is redirected to /create-trip after signing in
          >
            <Button>
              Sign In to Generate Trip
            </Button>
          </SignInButton>
        ) : (
          <Button onClick={onGenerateTrip} disabled={loading}>
            {loading ? <>Generating <Loader2 className="h-4 w-4 animate-spin ml-2" /></> : "Generate Trip"}
          </Button>
        )}
      </div>
    </div>
  );
}
