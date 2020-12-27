import React, { useState, Component } from 'react';
import './App.css';

function App() {

    let [clicker, funcClicker] = useState(0);

    function counter() {
        let a = clicker;
        a++;
        funcClicker(a);
    }

    let titleList = ['제목1', '제목2', '제목3'];

    return (<div className="App" >
        <div onClick={counter} > 왜그래 < /div>  <
        div > {clicker} < /div>  <
        ListNode lists={titleList} >
                <
        /ListNode> < /
        div >
    );
}

function ListNode() {
    return (
        <>
                    <div className="listnode" > {this.props.lists[0]}
                    </div>
                </>
    )
}

export default App;