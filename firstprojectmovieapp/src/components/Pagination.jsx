import {Page} from './Page'

function Pagination(props){
    const {count, nextPage} = props;
    return  <ul className="pagination pagination_bottom">
    <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
    {count.map(item =>(<Page key={item} count={item} nextPage={nextPage}/>))}
    <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
  </ul>
}

export {Pagination}