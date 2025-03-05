export interface iUserSearchContextType {
    userSearch: string;
    setUserSearch: React.Dispatch<React.SetStateAction<string>>;
    dataUserSearched: iArtist[];
    setDataUserSearched: React.Dispatch<React.SetStateAction<iArtist[]>>;
    userSearchCarregando: boolean;
    setUserSearchCarregando: React.Dispatch<React.SetStateAction<boolean>>;
    userSearchErro: string;
    setUserSearchErro: React.Dispatch<React.SetStateAction<string>>;
}