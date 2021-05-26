

export const Picture = ({ imageURL, date }) => {
    return (
        <div className="card" >
            <div className="card__background" style={{ backgroundImage: `url(${imageURL})` }}></div>
            <div className="card__content">
                <p className="card__category"></p>
            </div>
        </div>
    )
}