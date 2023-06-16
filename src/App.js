/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
    let post = ["강남 우동 맛집", "남자 코트 추천", "리액트 독학"];
    // Destructuring
    let [titles, setTitle] = useState(post);
    let [like, setLike] = useState(Array(post.length).fill(0));

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
            <button
                onClick={() => {
                    let newTitles = [...titles];
                    newTitles.sort();
                    setTitle(newTitles);
                }}
            >
                가나다순 정렬
            </button>
            {titles.map((title, idx) => (
                <div className="list" key={idx}>
                    <h4>
                        {title}
                        <span
                            onClick={() => {
                                increaseLike(idx);
                            }}
                        >
                            👍
                        </span>
                        <button
                            onClick={() => {
                                changeTitle(idx);
                            }}
                        >
                            버튼
                        </button>
                        {like[idx]}
                    </h4>
                    <p>2월 17일 발행</p>
                </div>
            ))}
        </div>
    );
}

export default App;
