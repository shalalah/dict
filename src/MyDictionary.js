import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonGroup } from "@material-ui/core";
import { loadDictionaryFB, deleteDictionaryFB, updateDictionaryFB } from "./redux/modules/dictionary";
// import { useHistory, useParams } from "react-router-dom";


const MyDictionary = (props) => {
  
  // const history = useHistory();
  const dispatch = useDispatch();
  const dic_list = useSelector((state) => state.dictionary.list);

  // const params = useParams();
  // const dict_index = params.index;
  
  React.useEffect(() => {
    dispatch(loadDictionaryFB()) ;
  }, []);


  // const updateWord = (selected_id) => {
  //   const selected_word = dic_list.find(({ id }) => {
  //     return id === selected_id;
  //   });
  //   history.push({
  //     pathname: "/word/update",
  //     state: {
  //       selected_word: selected_word,
  //     },
  //   });
  // };

  return (
    <>    
      {dic_list.map((list, index) => {
      return (
            <ContentBox key={index}>
              <Content>
                <ContentTitle>단어</ContentTitle>
                <ContentWord>{list.word}</ContentWord>
              </Content>
              <Content>
                <ContentTitle>설명</ContentTitle>
                <ContentWord>{list.desc}</ContentWord>
              </Content>
              <Content>
                <ContentTitle>예시</ContentTitle>
                <ContentWord color={"blue"}>{list.example}</ContentWord>
                <ButtonGroup
                  color="primary"
                  aria-label="outlined primary button group"
                  style={{ position: "absolute", right: "20px", top: "20px" }}
                >
                  
                  <Button 
                    onClick={() => {
                      dispatch(updateDictionaryFB(list.id));
                      
                    }}
                  >
                    수정
                  </Button>
                  <Button
                    onClick={() => {
                      dispatch(deleteDictionaryFB(list.id));
                    }}
                  >
                    삭제
                  </Button>
                </ButtonGroup>
              </Content>
            </ContentBox>
          );

      })}
        
      <Link to="/word/add">
        <PlusBtn>+</PlusBtn>
      </Link>
    </>
  );
};


const ContentBox = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin: 15px 0;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:nth-child(odd) {
    margin: 20px 0;
  }
`;

const ContentTitle = styled.div`
  font-size: 0.8rem;
  text-decoration: underline;
`;

const ContentWord = styled.div`
  font-size: 1.1rem;
  color: ${(props) => (props.color ? "blue" : "black")};
`;

const PlusBtn = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e39494;
  border-radius: 50%;
  color: #fff;
  position: absolute;
  right: 10px;
  bottom: 10px;
  line-height: 52px;
  text-align: center;
  font-size: 50px;
  cursor: pointer;
`;
export default MyDictionary;