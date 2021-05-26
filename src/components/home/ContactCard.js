import './ContactCard.css'


export const ContactCard = ({ faceId, aId , fab , href}) => {
    return (
        <div className="card">
            <div id={faceId} className="face face1">
                <div className="content">
                    <h3><i className={fab}></i></h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <a id={aId} style={{display: "table-cell"}} target="_blank" rel="noopener noreferrer" href={href}>GO</a>
                </div>
            </div>
        </div>
    )
}