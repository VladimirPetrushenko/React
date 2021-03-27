function Page(props){
  const {count,  nextPage} = props;
  return <li id={count} className="waves-effect" onClick={()=>nextPage(count)}><a href="#!">{count}</a></li>
}

export {Page}