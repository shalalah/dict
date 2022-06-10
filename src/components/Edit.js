// 수정 과 삭제
import '../App.css';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import styled from 'styled-components';
// import { deleteBoardFB, loadBoardFB, updateBoardFB } from "../redux/modules/board";
// import {db} from "../shared/firebase";
// fb에서 가져오기 
// import { addDoc, collection, getDocs } from 'firebase/firestore';

const Edit = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch(); 
    
    const edit_list =  useSelector((state) => state.board.list);
    console.log(edit_list);
    // url파라미터
  // write의 index와 id 가져오기
    const index  = useParams().index;
    const board_id = useParams().id;
    console.log(index, board_id);
    // const title_ref = React.useRef(null);
    // const content_ref = React.useRef(null);
    // const img_ref = React.useRef(null);
    //파일url을 보관하기 위해
    // const file_link_ref = React.useRef(null);
    

    // user 닉네임 가져오기
    // const edit_name = useSelector((state) => state.user.name);
  

    // const delete_list = () => {
    //     dispatch(deleteBoardFB(board_id)
    //     ); navigate('/');
    // }
    
    // 수정하기
    // const editBoard = async() => {
    //     // 리덕스
    //     dispatch(updateBoardFB( {
    //         // id
    //         title : title_ref.current.value,
    //         content : content_ref.current.value,
    //         img : img_ref.current.value,
    //         image_url : file_link_ref.current?.url,}
    //         ));  
    //     // 뒤로가기
    //     navigate(-1);
    // }; console.log(editBoard);

    return (
        <Wrap>
            <Title>수정하기</Title>
            {/* <div className = "ContentBox">
            <div className = "Content">
            <div className = "ContentTitle">제목</div>
            <div className = "ContentInput" ref={title_ref} />
            </div>
            <div className = "Content">
            <div className = "ContentTitle">게시글 내용</div>
            <div className = "ContentInput"  ref={content_ref} />
            </div>            
            </div>
            <div className='Content'>
            <div className = "ContentTitle">이미지 업로드</div>
            <div className = "ContentInput"  
                type = "file" 
                onChange={uploadFB}
                ref={img_ref} /> */}
            {/* <button>이미지 선택</button> */}
            {/* </div> */}
            {/* <h4>레이아웃</h4>
            <Box>
                <p>텍스트</p>
                <img src={image} />
            </Box>              */}
            {/* 비로그인시 게시글 작성 막도록 하는거 고민 필요! */}
            {/* <button onClick={addBoard}>게시글 작성 완료</button> */}
            {/* <div>
            <p>{edit_list[index].comment}</p>
            <img src = {edit_list.image_url} alt=""/>
        </div> */}
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


export default Edit;