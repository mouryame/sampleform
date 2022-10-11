import ContainerStyled from "./components/ContainerStyled";
import PageStyled from "./components/PageStyled";
import FormScreen from "./screens/FormScreen";

function App() {
 
  return (
    <>
    <PageStyled>
      <ContainerStyled>
        <h1>Form</h1>
      <FormScreen />
      </ContainerStyled>
    </PageStyled>
    </>
  );
}

export default App;
