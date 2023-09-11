import { CardProps } from "../../types";
import styles from "./card.module.css"
import link from '/svg/link.svg'
import gitHubIconLInk from '/svg/gitHubIconLInk.svg'

function Card ({img, projectName, description, technologies, livePreviewLink, viewCodeLInk }: CardProps) {
    return (
        <div className={ styles.card }>
            <img src={ img } alt={ projectName } className={ styles.imageProject }/>

            <div className={ styles.infos }>
                <h2>{ projectName }</h2>
                <p>{ description }</p>
                <p><strong>Technologies: </strong>{ technologies }</p>
            </div>
            
            <div className={ styles.cardLinks }>
                <div>
                    <img src={link} alt="linkIcon" />
                    <a href={ livePreviewLink } target="_blank">Live Preview</a>
                </div>
                <div>
                    <img src={ gitHubIconLInk } alt="gitHubIcon" />
                    <a href={ viewCodeLInk } target="_blank">View Code</a>
                </div>
            </div>
        </div>
    )
}

export default Card;