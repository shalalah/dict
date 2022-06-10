// 알림, 로그아웃
// 수정, 추가하기
// 게시판 형태
import '../App.css';
import React from "react";
// import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadBoardFB, updateBoardFB } from "../redux/modules/board";
// import {db} from "../shared/firebase";
// fb에서 가져오기 
// import { addDoc, collection, getDocs } from 'firebase/firestore';
//docs 가져오기
// import { collection, query, where, getDocs } from "firebase/firestore";
// import { signOut } from "firebase/auth";
// import { auth } from "../shared/firebase";

const Main = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [board_list, setBoardList] = React.useState([]);
    const board_list = useSelector((state) => state.board.list);
    // console.log(board_list);
     //잘 가져왔는지 확인
    React.useEffect(() => {
        dispatch(loadBoardFB());
    // //     // const query = await getDocs(collection(db, 'board'));
	// // 	// console.log(query);
    // //     // query.forEach((doc) => {
    // //     // console.log(doc.id, doc.data());
    // //     // });
    }, []);
    // const board_list_id =  useParams().id;
    //     const UpdateFB = () => {
    //         dispatch(updateBoardFB({
    //             comment,
    //             image_url : file_link_ref.current.url,
    //         }, board_list_id))
    //         navigate("/");
    //     }
    return (
        <div class Name="ContentBox">
            
            <h2>메인 화면</h2>
            
            <div className="board_list">
            {board_list.map((list, idx) => {
                return (     
                <>      
                <div className= "Content"
                style={{
                border: "1px solid #888",
                marginBottom: "2rem",
                padding: ".5rem",}}>
                    <h3>{list.title}</h3>
                    <p>{list.content}</p>
                    {/* <p>{til.img}</p> */}
                    <img src = {list.image_url} alt=""/>
                    <div className="buttons">
                        <button onClick={ () => {
                            navigate('/edit' + idx + '/' + `${list.id}`);
                        }}>수정</button>
                        <button>삭제</button>
                    </div>
                </div>
                {/* <div className="title-area">
                    <button onClick={() => {
                    // dispatch(createBoardFB);
                    navigate("/write/" + idx + "/" + `${list.id}`);
                    }}>작성페이지로 이동
                    </button>
                </div>  */}
                </>     
                );
            })}
            </div>
        </div>    
    );
};

// const ContentBox = styled.div`
//   background-color: #fff;
//   width: 70%;
//   padding: 5px;
//   box-sizing: border-box;
//   margin: 15px auto;
//   position: relative; 
// `;



export default Main;