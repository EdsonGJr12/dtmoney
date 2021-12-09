import { Dashboard } from "./components/DashBoard";
import { Header } from "./components/Header";
import { GlobalStyled } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
  );
}
