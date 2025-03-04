export interface iUserSearchContextType {
    userSearch: string;
    setUserSearch: React.Dispatch<React.SetStateAction<string>>;
    dataUserSearched: Artist[];
    setDataUserSearched: React.Dispatch<React.SetStateAction<Artist[]>>;
    userSearchCarregando: boolean;
    setUserSearchCarregando: React.Dispatch<React.SetStateAction<boolean>>;
    userSearchErro: string;
    setUserSearchErro: React.Dispatch<React.SetStateAction<string>>;
}