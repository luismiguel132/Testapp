import { User } from "@supabase/supabase-js";
import { Children, createContext, useContext, useState } from "react";

interface AuthContextProps{
    user: User | null;
    setAuth: (authUser: User | null) => void;
}

const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ Children }: { Children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null)

    function setAuth(authUser: User | null) {
        setUser(authUser);
    }

    return(
        <AuthContext.Provider value={{ user,setAuth }}>
            {Children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)