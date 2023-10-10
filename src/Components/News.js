import React, { useState } from "react";
import { Newsitems } from "./Newsitems";
import { Spinner } from "./Spinner";
import PropTypes from "prop-types";
import { useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component'
export function News(props) {
    const [articles,setArticles]=useState([]);
    const [loading,setLoading]=useState(true);
    const [page,setPage]=useState(1)
    const [totalResults,setTotalResults]=useState(0)
    //     document.title = `${capitalizeFirstLetter(props.category)}- NewsTiger`

    const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
}

    // constructor(props) {  // jab jab news ko run karenge tab tab construtor call hoga
    //     super(props);
    //     state = {
    //         articles: [],
    //         loading: true,
    //         page:1,
    //         totalResults:0
    //     }
    //     document.title = `${capitalizeFirstLetter(props.category)}- NewsTiger`
    // }
  const Update=  async ()=>{
        props.setProgress(0);
  const     url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        // setState({loading:true})
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
       let parseData = await data.json()
       props.setProgress(70);
setArticles(parseData.articles)
setTotalResults(parseData.totalResults)
setLoading(false)

    //    setState({
    //     articles:parseData.articles,
    //     totalResults:parseData.totalResults,
    //     loading:false

    // })
    props.setProgress(100);
}

useEffect(()=>{

        document.title = `${capitalizeFirstLetter(props.category)}- NewsTiger`
    Update();

},[]);

//  async componentDidMount(){
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=1&pageSize=${props.pageSize}`;
    //     setState({loading:true})
    //     let data = await fetch(url);
    //    let parseData = await data.json()
    //    setState({articles:parseData.articles,
    //     totalResults:parseData.totalResults,
    //     loading:false

//})

//    Update();

//      }
    //const handlepreClick =async ()=>{
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${state.page -  1}&pageSize=${props.pageSize}`;
    //     setState({loading:true})
    //     let data = await fetch(url);
    //    let parseData = await data.json()
   
        
    //     setState({
    //         articles:parseData.articles,
    //         page:state.page-1,
    //         loading:false
    //     })
    // setState({page: state.page-1})
//    setPage(page-1)
//     Update();
// }
   // const handlenexClick =async ()=>{
    //     if(!(state.page +1>Math.ceil(state.totalResults/props.pageSize))){
    //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${state.page + 1}&pageSize=${props.pageSize}`;
    //     setState({loading:true})
    //     let data = await fetch(url);
    //    let parseData = await data.json()
   
        
    //     setState({
    //         articles:parseData.articles,
    //         page:state.page+1,
    //         loading:false
    //     })
    // }
    // setState({page: state.page+1})
//    setPage(page+1)
//     Update();
// }
const fetchMoreData = async ()=>{
// setState({page:state.page+1});

const   url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
setPage(page+1)
let data = await fetch(url);
let parseData = await data.json()
setArticles(articles.concat(parseData.articles))
setTotalResults(parseData.totalResults)
// setState({
// articles:state.articles.concat(parseData.articles),
// totalResults:parseData.totalResults,

// })
};
        return (
            <div className="container my-3 ">
                <h1 className= "text-center" style={{margin:'34px 0px',marginTop:'60px'}}>NewsTiger - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                {loading && <Spinner/>}
                <InfiniteScroll

     dataLength={articles.length}
    next={fetchMoreData}
    hasMore={articles.length!==totalResults}
    loader={<Spinner/>}>
        <div className="container">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitems title={element.title?element.title.slice(0,84):""} description={element.description?element.description.slice(0,80):""} newsUrl={element.url} imageUrl={element.urlToImage} />
                        </div>
                    })}
 </div>  
 </div>
</InfiniteScroll>
             {/* <div className="continer d-flex justify-content-between my-3" >
             <button disabled={state.page<=1} type="button" className="btn btn-dark" onClick={handlepreClick}>&larr; Previous</button>
             <button disabled={state.page+1 > Math.ceil(state.totalResults/props.pageSize)} type="button" className="btn btn-dark" onClick={handlenexClick}>Next &rarr;</button>  */}
              {/* ////class ke andar hai iss liye  karke call karna hai */}
{/* 
             </div> */}
 </div>
        )}
    

News.defaultProps = {
    country: 'in',
    pageSize:8,
    category:'general'
  }
  
   News.propTypes = {
  country:PropTypes.string,
  pageSize:PropTypes.number
  }