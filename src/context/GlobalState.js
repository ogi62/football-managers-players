import { FootballContext } from "./context"
import { football } from "./context"

//provider component
export const GlobalProvider = ({children}) => {

    return (
        <FootballContext.Provider value={football}>
                {children}
        </FootballContext.Provider>
        )
}
