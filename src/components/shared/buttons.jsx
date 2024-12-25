

export const MovieCardBtn = ({btnTitle, icon}) => {
    return(
        <>
        <button className="pd-btn">{icon}{btnTitle}</button>
        </>
    )
}

export const SaveListBtn = ({saveBtnT, sbIcon}) => {
    return(
        <>
        <button className="pd-btn">{sbIcon}{saveBtnT}</button>
        </>
    )
}