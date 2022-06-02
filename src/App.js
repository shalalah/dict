import "./App.css";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";

import MyDictionary from "./MyDictionary";
import AddWord from "./AddWord";
import NotFound from "./NotFound";


function App() {

  return (
    <div className="App">
      <Container>
      <Title>MY DICTIONARY</Title>
        <Wrapper>
          <Switch>
            <Route exact path="/" component={MyDictionary}></Route>
            <Route path="/word/:index" component={AddWord}></Route>
            <Route path="/NotFound" component={NotFound}></Route>
          </Switch>
        </Wrapper>
      </Container>
    </div>
  );
}

const Title = styled.h4`
padding: 50px 10px 20px;
`;

const Container = styled.div`
  background-color: #f3e7ee;
  max-width: 50vw;
  margin: auto;
  font-family: 'Source Sans Pro', sans-serif;
`;

const Wrapper = styled.div`
  padding: 5px 10px;
  position: relative;
`;

export default App;