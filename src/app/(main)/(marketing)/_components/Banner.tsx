function Banner() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10">
      <div>
        <h1 className="text-7xl">AI Tripio's Travel Blog</h1>
        <h2 className="mt-5 md:mt-0">
          Welcome to {" "}
          <span className="underline decoration-4 decoration-[#8759F2]">
            Every Travelers
          </span>{" "}
           Favourite AI-Powered Travel Planner 🌍✈️
        </h2>

      </div>
      <p className="mt-5 md:mt-2 text-gray-400 max-w-sm">
        Discover Your Perfect Trip with AI Tripio | Tailored Itineraries | 
        Smart Recommendations & More
      </p>
    </div>
  )
}
export default Banner