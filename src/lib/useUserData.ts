import { useUser } from "@clerk/nextjs";

export const useUserData = () => {
    const { user, isLoaded } = useUser();
    
    if (!isLoaded || !user) return null;
    
    return {
        email: user.primaryEmailAddress?.emailAddress || "",
        id: user.id,
    };
};