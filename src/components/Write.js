// 게시글 작성
// 알림, 로그아웃
// 게시글 작성 - 이미지 업로드, 게시글 내용 input
import '../App.css';
import React from "react";
import styled from 'styled-components';
import { add } from "../store/til";
import { useDispatch } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
import image from "./img_sample.jpeg";
// useNavigate는 양식이 제출되거나 특정 event가 발생할 때,  url을 조작할 수 있는 interface를 제공
const Write = () => {
    const dispatch = useDispatch();
    // url파라미터
    const params = useParams();
    const navigate = useNavigate();
    console.log(params);

    const title_ref = React.useRef(null);
    const content_ref = React.useRef(null);
    const img_ref = React.useRef(null);

    // 추가하기
    const addTIL = () => {
    const til_data = {
        title: title_ref.current.value,
        content: content_ref.current.value,
        img: img_ref.current.value,
    };

    // 콘솔로 확인해요!
    console.log(til_data);

    // 인풋은 지워줍시다! :)
    title_ref.current.value = "";
    content_ref.current.value = "";
    img_ref.current.value = "";

    dispatch(add({ til_data: til_data }));
    // 뒤로가기
    navigate(-1);
    };
   

    return (
        <Wrap>
            <Title>게시글 작성</Title>
            <div className = "ContentBox">
            <div className = "Content">
            <ContentTitle>제목</ContentTitle>
            <ContentInput ref={title_ref} />
            </div>
            <div className = "Content">
            <ContentTitle>게시글 내용</ContentTitle>
            <ContentInput ref={content_ref} />
            </div>            
            </div>
            <div className='Content'>
            <ContentTitle>이미지 업로드</ContentTitle>
            <ContentInput ref={img_ref} />
            <button>이미지 선택</button>
            </div>
            <h4>레이아웃</h4>
            <Box>
                <p>텍스트</p>
                <img src={image} />
            </Box>             
            <button onClick={addTIL}>게시글 작성 완료</button>   
        </Wrap>
    )
};
const Wrap = styled.div`
  margin: 20px auto 0;
  `;

const Title = styled.div`
  margin: auto;
  font-size: 35px;
  font-family: 'Nanum Pen Script', cursive;
  `;

// const ContentBox = styled.div`
//   background-color: #fff;
//   width: 100%;
//   padding: 5px;
//   box-sizing: border-box;
//   margin: 15px 0; 
// `;

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   &:nth-child(odd) {
//     margin: 20px 0;
//   }
 
// `;

const ContentTitle = styled.div`
  font-size: 30px;
  font-family: 'Nanum Pen Script', cursive;
 `;

const ContentInput = styled.input`
  height: 50px;
  margin-top: 10px;
`;
const Box = styled.div`
  display:flex;
  justify-content: space-between;
  flex-direction:column;
            
`;


export default Write;