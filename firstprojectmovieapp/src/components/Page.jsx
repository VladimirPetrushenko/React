import { useContext } from 'react';
import { MainContext } from '../context/MainContext';
import { Link } from "react-router-dom";
export const Page =(props) => {
    const { count } = props;
    const { changePages } = useContext(MainContext);
    return (
        <li
            id={count}
            className="waves-effect pagination"
            onClick={() => changePages(count)}
        >
            <Link to="">{count}</Link>
        </li>
    );
}
