import anime from '../../data/animes.js';
import '../CSS/AnimeItem.css'

function AnimeItem(props) {
    const {anime, onAnimeClick} = props
    return (
        <div className='anime-item'>
            <img src={anime.thumbnailUrl} onClick={()=> {onAnimeClick(anime)}}/>
            <h4>{anime.title}</h4>
        </div>
    );
}

export default AnimeItem;