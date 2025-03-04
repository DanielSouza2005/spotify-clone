import { useContext } from "react"
import { UserSearchContext } from "../../context/UserSearch";

export const usePesquisa = () => {

    const { userSearch, setUserSearch,
        dataUserSearched, setDataUserSearched,
        userSearchCarregando, setUserSearchCarregando,
        userSearchErro, setUserSearchErro } = useContext(UserSearchContext)!;

    return {
        userSearch, dataUserSearched,
        setUserSearch, setDataUserSearched,
        userSearchCarregando, setUserSearchCarregando,
        userSearchErro, setUserSearchErro
    }
}