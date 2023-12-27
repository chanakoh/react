import React, { useEffect, useState } from "react";

function Board() {
//만약에 로컬 스토리지에 저장된 게시글이 있으면 로컬 스토리지에서 게시글 데이터를 불러온다.
    //만약 저장된 게시글이 없으면 [] 빈 배열을 가지고 옴
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    

    // 게시글 목록 관리
const [posts, setPosts] = useState(savedPosts);

//새로운 게시글 입력받기
const [newPost, setNewPost] = useState('');

//페이지가 실행될 때나 게시글이 업데이트 될 때 로컬 스토리지에 저장
//JSON.stringify:자바 스크립트객체나 배열을 JSOM문자열로 변환하는 함수
//[posts] 게시글 목록에 어떤 변화가 생길때마다 갱신된 최신 데이터가 저장
useEffect(()=>{
    localStorage.setItem('posts',JSON.stringify(posts));
},[posts]);

//게시글 추가 함수
const addPost = () => {
       
    setPosts([...posts, newPost]);
    setNewPost('');

//입력된 게시글을 로컬 스토리지에 저장
//localStorage밑에 item과, setitem존재함
//'posts'키에현재게시글목록과 새로운 게시글을 추가한 배열을 JSON문자열로 변환해서 저장
localStorage.setItem('posts',JSON.stringify(...posts, newPost));
}
const deletePost=(index) => {
    const removePost = [...posts];
    removePost.splice(index,1);
    setPosts(removePost);
    localStorage.setItem('posts',JSON.stringify(removePost));
};



    return (
        <div>
            <h1>게시판</h1>
            <div>
                <textarea
                rows="4"
                cols="50"
                    placeholder="게시글을 입력하세요."
                    value={newPost}
                    onChange={(e) => setNewPost(e.target.value)}
                >
                </textarea>
                <br />
                <button onClick={addPost}>게시글 추가</button>

            </div>
            <h2>게시글 목록</h2>
            <ul>
                {posts.map((post,index)=>
                <li key={index}>
                    {post}
                    <button onClick={()=> deletePost(index)}>삭제</button>
                    </li>
                )}
                
            </ul>
        </div>
    )

}
export default Board;