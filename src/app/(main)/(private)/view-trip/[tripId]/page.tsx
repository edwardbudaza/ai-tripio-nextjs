
import { Suspense } from 'react';
import { notFound } from 'next/navigation';

import { getTripData } from '@/services/firestoreService';
import LoadingSpinner from '@/components/custom/LoadingSpinner';
import InfoSection from '../../_components/InfoSection';
import Hotels from '../../_components/Hotels';
import PlacesToVisit from '../../_components/PlacesToVisit';

export default async function ViewTripPage({params}: {params: { tripId: string}}) {
  const tripData = await getTripData(params.tripId); 
  if(!tripData) {
    notFound();
  }
  const cleanTripData = (tripData: any) => {
    if (tripData?.tripData?.tripData) {
      return tripData.tripData.tripData;
    }
    return tripData;
  };

  const cleanedData = cleanTripData(tripData);

  return (
    <div className='p-4 md:p-8 lg:p-12 xl:p-16 max-w-7xl mx-auto'>
      {/* Information Section */}
      <Suspense fallback={<LoadingSpinner />}>
        <InfoSection trip={tripData}/>    
      </Suspense>


      {/* Recommended Hotels */}
      <Suspense fallback={<LoadingSpinner />}>
        <Hotels hotels={cleanedData.trip.hotels} />
      </Suspense>

      {/* Places to Visit */}
      
      <Suspense fallback={<LoadingSpinner />}>
        <PlacesToVisit itinerary={cleanedData.trip.itinerary} />
      </Suspense>

    </div>
  )
}