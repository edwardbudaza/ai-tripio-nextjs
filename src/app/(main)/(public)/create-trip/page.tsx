import CreateTripForm from "../_components/CreateTripForm";

export default function CreateTripPage() {
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="font-bod text-3xl">Tell us your travel preferences 🏕️🌴</h2>
        <p className="mt-3 text-gray-500 text-xl">Simply provide some basic details, and our trip planner will create a personalized itinerary tailored to your preferences.</p>
        <CreateTripForm />
    </div>
  )
}