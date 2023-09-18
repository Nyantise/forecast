import { Dispatch, SetStateAction, createContext, useState } from "react";

interface IColorContext {
  color: string;
  setColor: Dispatch<SetStateAction<string>>;
}
interface Props {
  children: React.ReactNode;
}

export const ColorContext = createContext<IColorContext>({
  color: "",
  setColor: () => {},
});

const GlobalProvider: React.FC<Props> = ({children}) => {
  const [color, setColor] = useState("#f8c621")
  
  return (
      <ColorContext.Provider value={{color, setColor}}>
          {children}
      </ColorContext.Provider>
  )
}
export default GlobalProvider