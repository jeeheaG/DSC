import React,{ useState } from 'react';

const BoardDynamic = () => {
    const [posts,setPosts] = useState([
        {
            id: 1,
            title: '첫번째',
            content: '내용1111111'
        },
        {
            id: 2,
            title: '두번째',
            content: '내용2222222'
        }
    ]);
    const [nextId,setNextId] = useState(3);
    const [inputT,setInputT] = useState('');
    const [inputC,setinputC] = useState('');
    const onChangeT = (e) => setInputT(e.target.value);
    const onChangeC = (e) => setinputC(e.target.value);

    //새 글 등록 - concat으로 posts에 새로운 배열 생성
    const onSubmit = (e) => {
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
    //map으로 글 리스트 만듦
    const postsList = posts.map(post => <div>글 제목: {post.title} \n 내용: {post.content}</div>);
    

    return(
        <>
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
                onChange={onChangeC}>
            </textarea><br />
            <button name='submit' onClick={onSubmit}>작성하기</button>
            <div>
                {postsList}
            </div>
        </>
    );

}
export default BoardDynamic;