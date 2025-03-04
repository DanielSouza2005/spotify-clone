import { createContext, useState } from "react";
import { iChildren } from "../../shared/interfaces/iChildren";
import { iUserSearchContextType } from "../../shared/interfaces/iUserSearch";

export const UserSearchContext = createContext<iUserSearchContextType | undefined>(undefined);
UserSearchContext.displayName = "Pesquisa do Usuário";

export const UserSearchProvider = ({ children }: iChildren) => {

    const [userSearch, setUserSearch] = useState("");
    const [dataUserSearched, setDataUserSearched] = useState<Artist[]>([]);
    const [userSearchCarregando, setUserSearchCarregando] = useState(false);
    const [userSearchErro, setUserSearchErro] = useState("");

    return (
        <UserSearchContext.Provider value={{
            userSearch, setUserSearch, 
            dataUserSearched, setDataUserSearched,
            userSearchCarregando, setUserSearchCarregando,
            userSearchErro, setUserSearchErro
        }} >
            {children}
        </UserSearchContext.Provider>
    );
}