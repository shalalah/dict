// 게시글 작성
// 알림, 로그아웃
// 게시글 작성 - 이미지 업로드, 게시글 내용 input
import '../App.css';
import React from "react";
import styled from 'styled-components';
import { createBoardFB } from "../redux/modules/board";
// 액션 호출
import { useDispatch } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
// img 파일 업로드를 위해 , 다운로드 위해
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../shared/firebase";


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
    //파일url을 보관하기 위해
    const file_link_ref = React.useRef(null);
    

     // img업로드 - 파이어스토어랑 소통해야하니까 비동기처리
    const uploadFB = async(e) => {
        console.log(e.target.files);
        //업로드
        const uploaded_file = await uploadBytes(
            ref(storage, 
                `images/${e.target.files[0].name}`),
                e.target.files[0]
        );
        console.log(uploaded_file);
        // 파일 다운로드
        const file_url = await getDownloadURL(
                uploaded_file.ref);
        console.log(file_url);
        file_link_ref.current = { url:file_url };
    };
    // 추가하기
    const addBoard = async() => {
        // 리덕스
        dispatch(createBoardFB( { 
            title : title_ref.current.value,
            content : content_ref.current.value,
            img : img_ref.current.value,
            image_url : file_link_ref.current?.url,}
            ));  
        // 뒤로가기
        navigate(-1);
    }; console.log(addBoard);
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
            <ContentInput 
                type = "file" 
                onChange={uploadFB}
                ref={img_ref} />
            {/* <button>이미지 선택</button> */}
            </div>
            {/* <h4>레이아웃</h4>
            <Box>
                <p>텍스트</p>
                <img src={image} />
            </Box>              */}
            {/* 비로그인시 게시글 작성 막도록 하는거 고민 필요! */}
            <button onClick={addBoard}>게시글 작성 완료</button>   
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
// const Box = styled.div`
//   display:flex;
//   justify-content: space-between;
//   flex-direction:column;
            
// `;


export default Write;