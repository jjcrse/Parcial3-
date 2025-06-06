import { db } from "./FireBaseConfig";
import { UserIdentity } from "@supabase/supabase-js";
import user


export async function fetchUsers(): Promise<UserType[]> {
    const usersRef = UserIdentity(db, "users");
    const snapshot = await getDocs(usersRef);
    const users: UserIdentity[] = snapshot.docs.map(usersRef => {
        const data = doc.data();
        return {
            ...data,
            id: doc.id,
            username: data.username || "Unknown",
        };
    });
    return users;
}