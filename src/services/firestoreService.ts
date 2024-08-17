import { setDoc, doc, getDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";  
import { toast } from "sonner";

export interface Location {
  label: string;
}

export interface UserSelection {
  location: Location;
  noOfDays: number;
  budget: string;
  traveler: number;
}

export interface GeoCoordinates {
  lat: number;
  lng: number;
}

export interface Hotel {
  address: string;
  description: string;
  price: string;
  imageUrl: string;
  geoCoordinates: GeoCoordinates;
  rating: string;
}

export interface ItineraryItem {
  placeName: string;
  placeDetails: string;
  imageUrl: string;
  geoCoordinates: GeoCoordinates;
  ticketPrice: number;
  rating: number;
  travelTime: string;
}

export interface Trip {
  hotels: Hotel[];
  itinerary: ItineraryItem[];
}

export interface TripData {
  userSelection: UserSelection;
  tripData: Trip;  
  userEmail: string;
  id: string;
}

export const saveTripToFirestore = async (
  tripData: Trip,
  userData: { email: string },
  formData: UserSelection
): Promise<string> => {
  const docId = Date.now().toString();

  await setDoc(doc(db, "AITrips", docId), {
    userSelection: formData,
    tripData: tripData, 
    userEmail: userData.email,
    id: docId,
  });

  return docId;
};

export async function getTripData(tripId: string): Promise<TripData | null> {
  const docRef = doc(db, "AITrips", tripId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data() as TripData;
  } else {
    toast("No trip found!");
    return null;
  }
}

export async function getUserTrips(userEmail: string): Promise<TripData[]> {
  const tripsQuery = query(collection(db, "AITrips"), where("userEmail", "==", userEmail));
  const querySnapshot = await getDocs(tripsQuery);
  
  const trips: TripData[] = [];
  querySnapshot.forEach((doc) => {
    trips.push({ id: doc.id, ...doc.data() } as TripData);
  });

  return trips;
}
