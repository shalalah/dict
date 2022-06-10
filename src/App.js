// import One from './MyComponent';
import React from "react";
import './App.css';
// 라우팅
import { Routes, Route } from "react-router-dom";

import Main from "./components/Main";
import Write from "./components/Write";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Edit from "./components/Edit";
import RecipeReviewCard from "./Card";
//로그인 데이터
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./shared/firebase";
import { signOut } from "firebase/auth";
import { useNavigate} from "react-router-dom";

function App() {
  const navigate = useNavigate();  
  // 로그인 체크
  const [is_login, setIsLogin] = React.useState(false);

  const loginCheck = async (user) => {
        if (user) {
          setIsLogin(true);
        } else {
          setIsLogin(false);
        }
  };
  console.log(auth.currentUser);

  React.useEffect(() => {
    onAuthStateChanged(auth, 
      loginCheck);
  }, []);
  
  // const [til_list, setTilList] = React.useState([]);
  const Inbar = () => {
    return (
        <div className="Bar">
            <button onClick={() => {signOut(auth)}}>로그아웃</button>
            <button onClick={() => {navigate("/write/:index/:id");}}>작성페이지로 이동</button>
        </div>
                );
  };
  const Outbar = () => {
    return (
        <div className="Bar">
            <button onClick={() => { navigate("/signup");}}>회원가입</button>
            <button onClick={() => { navigate("/login");}}>로그인하기</button>            
        </div>
                );
  };

  return (    
    <div className="App" style={{ display: "flex", gap: 10 }}>
      {is_login ?  (<Inbar />) :(<Outbar />)}                
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/write/:index/:id" element={<Write />}></Route>
        {/* <Route exact path="/write/:index" element={<Write setTilList={setTilList} til_list={til_list}/>}></Route> */}
        <Route exact path="/signup" element={<Signup />} />
        {/* <Route exact path="/" element={<Main til_list={til_list}/>} /> */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/card" element={<RecipeReviewCard />}></Route>
        <Route exact path="/edit/:index/:id" element={<Edit />} />
      </Routes>
    </div>
    // <div className="App"
    //   style={{
    //     display: "flex", 
    //     gap: "5rem",
    //     justifyContent:"space-around",
        
    //     margin: "2rem"
    //   }}>
    //   <One />      
    // </div>
  );
}



export default App;
