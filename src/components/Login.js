// 로그인 
// 아이디, 비밀번호, 로그인하기 버튼
import '../App.css';
import React from "react";
import { useNavigate} from "react-router-dom";
// import styled from 'styled-components';
// 비밀번호 인증
import { signInWithEmailAndPassword } from "firebase/auth"; 
import {auth, db} from "../shared/firebase";
//docs 가져오기
import { collection, query, where, getDocs } from "firebase/firestore";

const Login = () => {
    const navigate = useNavigate(); 
    
    const id_ref = React.useRef();
    const pw_ref = React.useRef();

    const loginFB = async() => {
        // console.log(id_ref.current.value, pw_ref.current.value);
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value);
            console.log(user);
            navigate(-1);

            const user_docs = await getDocs(
                query(collection(db,"users"),
                where ("user_id", "==", user.user.email) )
            );
            user_docs.forEach(u => {
                console.log(u.data());
            })
    };
    return (
    <div className = "ContentBox">
    <div className = "Content">
    <div className = "ContentTitle">로그인 화면</div>
      {/* <button onClick={() => { navigate(-1); }}>Home</button> */}
    </div>
        <div>
            아이디 : <input ref={id_ref} /> <br />
            비밀번호 : <input ref={pw_ref} type="password" /> <br />
            <button onClick={loginFB}>로그인</button>
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

// const Content = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   &:nth-child(odd) {
//     margin: 20px 0;
//   }
// `;
// const ContentTitle = styled.div`
//   font-size: 2rem;
//   text-decoration: underline;
// `;

export default Login;