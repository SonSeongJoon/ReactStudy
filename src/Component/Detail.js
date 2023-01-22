import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";


import Spinner from 'react-bootstrap/Spinner';
import { PostDiv, SpinnerDiv, Post, BtnDiv } from "../Style/PostDetailCSS";
function Detail() {
    let params = useParams();
    const [PostInfo, setPostInfo] = useState({});
    const [Flag, setFlag] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        let body = {
            postNum : params.postNum,
        };
        axios
            .post('/api/post/detail', body)
            .then((response) => {
                if(response.data.success) {
                    setPostInfo(response.data.post)
                    setFlag(true);
                }
        })
            .catch((err) => {
            console.log(err);
        });
    }, []);

    useEffect(() => {

    }, [PostInfo]);

    const DeleteHandler = () => {
        if(window.confirm("정말로 삭제하겠습니까?")) {
            let body = {
                postNum : params.postNum,
            };
            axios
                .post('/api/post/delete', body)
                .then((response) => {
                    if(response.data.success) {
                        alert("게시글이 삭제되었습니다.");
                        navigate("/");
                    }
                })
                .catch((err) => {
                    alert("게시글 삭제에 실패하였습니다.");
                });
            alert("확인");
        }
    };

    return (
        <PostDiv>
            {Flag ? (
                <>
                    <Post>
                        <h1>{PostInfo[0].title}</h1>
                        <p>{PostInfo[0].content}</p>
                    </Post>
                    <BtnDiv>
                        <Link to={`/edit/${PostInfo[0].id}`}>
                            <button className="edit">수정</button>
                        </Link>

                        <button className="delete" onClick={() => DeleteHandler()}>삭제</button>
                    </BtnDiv>
                </>
            ) : (
                <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            )}
        </PostDiv>
    );
}
export default Detail;
