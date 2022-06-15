const Film = ({name, url}) => {
    return (
        <div className="film">
            <li>
                <a href={url}><p className="film">{name}</p></a>
            </li>
        </div>
    );
};

export default Film