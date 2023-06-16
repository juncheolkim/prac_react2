import { useState } from "react";
import "./App.css";

function App() {
    let post = ["강남 우동 맛집", "남자 코트 추천", "리액트 독학"];

    // Destructuring
    let [titles, b] = useState(post);

    return (
        <div className="App">
            <div className="black-nav">
                <h4>Blog</h4>
            </div>
            {titles.map((title, idx) => (
                <div className="list" key={idx}>
                    <h4>{title}</h4>
                    <p>2월 17일 발행</p>
                </div>
            ))}
        </div>
    );
}

export default App;
