

export const Picture = ({ imageURL, date }) => {
    return (
        <a class="card" href="#">
            <div class="card__background" style={{ backgroundImage: `url(${imageURL})` }}></div>
            <div class="card__content">
                <p class="card__category">{date}</p>
            </div>
        </a>
    )
}