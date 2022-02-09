import '../CSS/AnimePost.css';

function AnimePost(props) {
    const {anime, onBgClick} = props;
    return (
        <div className='anime-post'>
            <div className ='anime-post-bg' onClick={onBgClick}/>
            <div className ='anime-post-content'>
                <img src={anime.thumbnailUrl} ></img>
                <h4>{anime.title}</h4>
            </div>
        </div>
    );
}

export default AnimePost;