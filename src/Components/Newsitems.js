import React from "react";
export function Newsitems(props){
 
        let {description,title,imageUrl,newsUrl,author,date ,source}=props;
        return(
            <div className="my-3">


<div className="card" >
 <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:'0'}}>
  <span className="badge rounded-pill bg-danger" >{source}</span>
 </div>
  <img src={!imageUrl?"https://cdn.theathletic.com/app/uploads/2023/05/04220529/GettyImages-1244065929-scaled-e1683252376551.jpg":imageUrl} className="card-img-top" width={350} height={250} alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}...</h5>
    <p className="card-text">{description}...</p>
    <a  rel="noreferrer" href={newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
  </div>
</div>


</div>
        )
    }
export default Newsitems