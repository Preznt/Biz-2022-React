import { UserContextProvider } from "./UserContextProvider";
import { BookContextProvider } from "./BookContextProvider";
import { MyBookContextProvider } from "./MyBookContextProvider";

const ProviderMain = ({ children }) => {
  return (
    <UserContextProvider>
      <MyBookContextProvider>
        <BookContextProvider>{children}</BookContextProvider>
      </MyBookContextProvider>
    </UserContextProvider>
  );
};

export default ProviderMain;
