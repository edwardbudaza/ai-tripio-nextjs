export const SelectTravelesList = [
  {
    id: 1,
    title: "Solo Travel",
    desc: "A journey for the lone explorer",
    icon: "✈️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "A romantic trip for two",
    icon: "🥂",
    people: "2 people",
  },
  {
    id: 3,
    title: "Family",
    desc: "Fun for families",
    icon: "🏡",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekes",
    icon: "⛵",
    people: "5 or more",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Travel wisely, save money",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Enjoy comfort, spend moderately",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Live lavishly, no budget limits",
    icon: "💸",
  },
];

export const AI_PROMPT = `Generate a travel plan for location: {location}, 
for {totalDays} days for a {traveler} with a {budget} budget. 
Provide the following in JSON format:
{
  "trip": {
    "hotels": [
      {
        "HotelName": "string",
        "Address": "string",
        "Price": "string",
        "ImageUrl": "string",
        "GeoCoordinates": { "lat": "number", "lng": "number" },
        "Rating": "string",
        "Description": "string"
      }
    ],
    "itinerary": [
      {
        "Day":"string", 
        "Descrition": "string",
        "Title": "string",
        "Plan": [{
          "PlaceName": "string",
          "PlaceDetails": "string",
          "ImageUrl": "string",
          "GeoCoordinates": { "lat": "number", "lng": "number" },
          "TicketPrice": "string",
          "Rating": "string",
          "TravelTime": "string",
          "Time": "string"
        }]
      }
    ]
  }
}`;
