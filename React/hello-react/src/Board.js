import React,{ useState } from 'react';

const Board = () => {
    const [list,setlist] = useState(
        {
            title: '',
            content: ''
        });
    const { id, title, content } = list;
    const handleChange = (e) => {
        const nextList = {
            ...list,
            [e.target.name]: e.target.value
        };
        setlist(nextList);
    };


    return(
        <>
            <input 
                type='text' 
                name='title' 
                value={title}
                placeholder='글 제목' 
                onChange={handleChange}></input><br />
            <textarea 
                name='content' 
                value={content}
                placeholder='내용'
                onChange={handleChange}></textarea>
            <button name='submit'>작성하기</button>
            <div>
                글 제목: {title} <br />
                글 내용: {content}
            </div>
        </>
    );

}
export default Board;