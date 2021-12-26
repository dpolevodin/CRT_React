import { Wrapper } from "./components/common/Wrapper/Wrapper";
import { UserFormViaFunction } from "./components/UserFormViaFunction/UserFormViaFunction";
import { UserFormViaClass } from "./components/UserFormViaClass/UserFormViaClass";

export const App = () => {
  return (
    <>
      <Wrapper>
        <UserFormViaClass />
        <UserFormViaFunction />
      </Wrapper>
    </>
  );
};
