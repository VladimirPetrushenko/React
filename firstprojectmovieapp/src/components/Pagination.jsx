import { Page } from './Page';
function Pagination(props) {
    const { count } = props;
    return (
        <ul className="pagination pagination_bottom">
            {count.map((item) => (
                <Page key={item} count={item} />
            ))}
        </ul>
    );
}

export { Pagination };
