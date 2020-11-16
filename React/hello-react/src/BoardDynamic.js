import React,{ useState } from 'react';

const BoardDynamic = () => {
    const [posts,setPosts] = useState([
        // {
        //     id: 1,
        //     title: '첫번째 글이다',
        //     content: 'DSC 덕성 화이팅!!!!'
        // },
        // {
        //     id: 2,
        //     title: '두번째다~~',
        //     content: '떡볶이 좋아'
        // }
    ]);
    const [nextId,setNextId] = useState(3);
    const [inputT,setInputT] = useState('');
    const [inputC,setinputC] = useState('');
    const onChangeT = (e) => setInputT(e.target.value);
    const onChangeC = (e) => setinputC(e.target.value);

    //새 글 등록 - concat으로 posts에 새로운 배열 생성
    const onSubmit = () => {
        const nextPosts = posts.concat({
            id: nextId,
            title: inputT,
            content: inputC
        });
        setNextId(nextId+1);
        setPosts(nextPosts);//새로운 배열을 생성한 객체 nextposts를 setposts로 상태 업데이트
        setInputT('');
        setinputC('');
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onSubmit();
        }
    }

    //더블클릭한 글은 삭제됨
    const onRemove = (id) => {
        const nextPosts = posts.filter(post => post.id != id);
        setPosts(nextPosts);
    }

    //css
    const style = {
        background: 'aliceblue',
        textAlign: 'center',
        margin: '20px',
        padding: '50px',
        font: 'bold 15px Dotum, sans-serif'
    }
    const divstyle = {
        border: '1px solid navy',
        textAlign: 'center',
        margin: '20px 200px',
        padding: '20px'
    }

    //map으로 글 리스트 만듦
    const postsList = posts.map(post => 
        <div 
            style={divstyle} 
            id={post.id} 
            onDoubleClick={() => onRemove(post.id)}> 
        글 제목: {post.title} <br /> 
        내용: {post.content}
        </div>
        );


    return(
        <>
        <div style={style}>
            <input 
                type='text' 
                name='title' 
                value={inputT}
                placeholder='글 제목' 
                onChange={onChangeT}>
            </input><br />
            <textarea 
                name='content' 
                value={inputC}
                placeholder='내용'
                onChange={onChangeC}
                onKeyPress={handleKeyPress}>
            </textarea><br />
            <button name='submit' onClick={onSubmit}>작성하기</button>
            <div>
                {postsList}
            </div>
        </div>
        </>
    );

}
export default BoardDynamic;