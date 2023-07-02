import { Link } from "react-router-dom";

interface Header {
    pageName: string;
    btnHeader: string;
    btnLink: string;
}

export default function Header({ pageName, btnHeader, btnLink }: Header) {
    return (
        <div>
            <div>
                <h2>Random Grimoire / {pageName}</h2>
            </div>
            <div>
                <span>
                    <Link to={btnLink}>
                        <button type="button">{btnHeader}</button>
                    </Link>
                </span>
            </div>
        </div>
    );
}
