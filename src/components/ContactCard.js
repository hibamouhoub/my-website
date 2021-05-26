import './ContactCard.css'


export const ContactCard = ({ faceId, aId , fab , href}) => {
    return (
        <div class="card">
            <div id={faceId} class="face face1">
                <div class="content">
                    {(faceId == 'cv')?
                    <h5><i className={fab}></i></h5>
                    :<h3>&nbsp;&nbsp;&nbsp;<i className={fab}></i></h3>}
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <a id={aId} href={href}>GO</a>
                </div>
            </div>
        </div>
    )
}