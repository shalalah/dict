// 알림, 로그아웃
// 수정, 추가하기
// 게시판 형태
import '../App.css';
import React from "react";
// import styled from 'styled-components';
// import { useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { signOut } from "firebase/auth";
// import { auth } from "../shared/firebase";

const Main = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const til_list = useSelector(store => store.til.til_list);

    return (
        <div class Name="ContentBox">
            <h2>메인 화면</h2>
            <div className="title-area">
                {/* <button onClick={() => {
                    navigate("/signup");
                }}>회원가입</button>
                <button onClick={() => {
                    navigate("/login");
                }}>로그인</button> */}
                {/* <button onClick={() => {signOut(auth)}}>로그아웃</button>                              */}
                {/* <AddBtn onClick={() => {
                    navigate("/write/:name");
                }}>작성페이지로 이동</AddBtn> */}
            </div>
            <div className="til-list">
            {til_list.map((til, idx) => {
                return (
                <div
                style={{
                border: "1px solid #888",
                marginBottom: "2rem",
                padding: ".5rem",}}>
                    <h3>{til.title}</h3>
                    <p>{til.content}</p>
                    <p>{til.time}</p>
                </div> 
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