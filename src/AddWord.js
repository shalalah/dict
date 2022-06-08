import React from "react";
import styled from 'styled-components';
import { createDictionaryFB } from './redux/modules/dictionary';
import { useDispatch } from 'react-redux';
import { useHistory} from "react-router-dom";
// import { useParams } from "react-router-dom";

const AddWord = () => {
  const wordInput = React.useRef(null);
  const descInput = React.useRef(null);
  const exampleInput = React.useRef(null);  
  
  const history = useHistory();
  const dispatch = useDispatch();
  // const params = useParams();
  // const dict_index = params.index;

// Firebase에 저장함
  const addWord = () => {
    dispatch(createDictionaryFB( {
      
      word: wordInput.current.value,
      desc: descInput.current.value,
      example: exampleInput.current.value,
      completed : false,
      }
    ));
    console.log(addWord.id);
    history.goBack();
  };



  return (
    <>
      <Title>단어 추가하기</Title>
      <ContentBox>
        <Content>
          <ContentTitle>단어</ContentTitle>
          <ContentInput ref={wordInput} />
        </Content>
        <Content>
          <ContentTitle>설명</ContentTitle>
          <ContentInput ref={descInput} />
        </Content>
        <Content>
          <ContentTitle>예시</ContentTitle>
          <ContentInput ref={exampleInput} />
        </Content>
      </ContentBox>
      <AddBtn
        onClick={addWord}>
      추가하기
      </AddBtn>
    </>
  );
};

const Title = styled.div`
  margin: auto;
  font-size: 35px;
  font-family: 'Nanum Pen Script', cursive;
  `;

const ContentBox = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  margin: 15px 0; 
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
  font-size: 30px;
  font-family: 'Nanum Pen Script', cursive;
 `;

const ContentInput = styled.input`
  height: 50px;
  margin-top: 10px;
`;

const AddBtn = styled.div`
  width: 100%;
  box-sizing: border-box;
  height: 50px;
  background-color: #c9a4e1;
  color: #fff;
  text-align: center;
  font-size: 30px;
  cursor: pointer;
  line-height: 50px;
  margin-top: 40px;
  border-radius: 20px;
  font-family: 'Nanum Pen Script', cursive;
`;

export default AddWord;