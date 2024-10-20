// import { useUser } from "@clerk/nextjs";

// export const getUserData = () => {
//     const { user, isLoaded } = useUser();
    
//     if (!isLoaded || !user) return null;
    
//     return {
//         email: user.primaryEmailAddress?.emailAddress || "",
//         id: user.id,
//     };
// };

import { getAuth } from "@clerk/nextjs/server";

export const getUserData = async (req) => {
  const { userId } = getAuth(req); // Use `getAuth` to retrieve user data

  if (!userId) {
    return null;
  }

  // Fetch the full user data based on the userId
  const user = await clerkClient.users.getUser(userId);
  return {
    email: user.primaryEmailAddress?.emailAddress || "",
    id: user.id,
  };
};
