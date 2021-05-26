import './Nav.css'

export const Nav = ({start, handleNew}) => {
    return (
        <nav>
            <a className="nava" id="homeID" onClick={handleNew} href="/#">Home</a>
            <a className="nava" id="memoriesID" onClick={handleNew} href="/#">Memories</a>
            <div className={start}></div>
        </nav>
    )
}