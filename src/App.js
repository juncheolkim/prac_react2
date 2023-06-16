/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
    let post = ["강남 우동 맛집", "남자 코트 추천", "리액트 독학"];
    // Destructuring
    let [titles, setTitle] = useState(post);
    let [likes, setLike] = useState(Array(post.length).fill(0));
    let [modal, setModal] = useState(false);
    let [idx, setIdx] = useState("first");
    let [inputStr, setInput] = useState("");

    function increaseLike(idx) {
        setLike((prev) => {
            const newLikes = [...prev];
            newLikes[idx] += 1;
            return newLikes;
        });
    }

    function changeTitle(idx) {
        setTitle((prev) => {
            const newTitles = [...prev];
            newTitles[idx] = "여자코트추천";
            return newTitles;
        });
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>Blog</h4>
            </div>
            <input
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    if (inputStr) {
                        let newTitles = [...titles];
                        newTitles.unshift(inputStr);
                        setTitle(newTitles);
                        let newLikes = [...likes];
                        newLikes.unshift(0);
                        setLike(newLikes);
                    }
                }}
            >
                글 발행
            </button>
            {titles.map((title, idx) => (
                <div
                    className="list"
                    key={idx}
                    style={{ paddingBottom: "15px" }}
                >
                    <h4
                        onClick={() => {
                            setModal(!modal);
                            setIdx(idx);
                        }}
                    >
                        {title}
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                increaseLike(idx);
                            }}
                        >
                            👍
                        </span>
                        <span>{likes[idx]}</span>
                    </h4>
                    <button
                        onClick={() => {
                            changeTitle(idx);
                        }}
                    >
                        버튼
                    </button>
                    <p>2월 17일 발행</p>
                    <span
                        onClick={() => {
                            let newTitles = [...titles];
                            newTitles.splice(idx, 1);
                            setTitle(newTitles);
                            let newLikes = [...likes];
                            newLikes.splice(idx, 1);
                            setLike(newLikes);
                        }}
                    >
                        🗑️
                    </span>
                </div>
            ))}
            {modal == true && idx != "first" ? (
                <Modal
                    color={"skyblue"}
                    titles={titles}
                    idx={idx}
                    changeTitle={changeTitle}
                />
            ) : null}
        </div>
    );
}

const Modal = (props) => {
    return (
        <>
            <div className="modal" style={{ background: props.color }}>
                <h4>{props.titles[props.idx]}</h4>
                <p>날짜</p>
                <p>상세내용</p>
                <button
                    onClick={() => {
                        props.changeTitle(props.idx);
                    }}
                >
                    글수정
                </button>
            </div>
        </>
    );
};

export default App;
