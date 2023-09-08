import { CardProps } from "../../types";

function Card ({img, projectName, description, techStack, livePreviewLink, viewCodeLInk }: CardProps) {
    return (
        <div className="card">
            <img src={ img } alt={ projectName } />
            <h2>{ projectName }</h2>
            <p>{ description }</p>
            <p><strong>Tech stack:</strong>{ techStack }</p>
            <div>
                <a href={ livePreviewLink }>Live Preview</a>
                <a href={ viewCodeLInk }>View Code</a>
            </div>
        </div>
    )
}

export default Card;