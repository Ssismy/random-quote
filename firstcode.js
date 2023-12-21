function APP(){
    const [quotes,setQuotes]=React.useState([]);
    const [randomQuote,setRandomQuote]=React.useState('');

    React.useEffect(()=>{
        async function fetchData(){
            const response=await fetch('./data.json');
            const data=await response.json();

            setQuotes(data);
            let randIndex=Math.floor(Math.random()*data.length);
            setRandomQuote(data[randIndex]);
        }
        fetchData();
    },[])
    
    const getNewQuote=()=>{
             let randIndex=Math.floor(Math.random()*quotes.length);
             setRandomQuote(quotes[randIndex]);
    }
    return(
        <div style={{backgroundColor:"#031",minHeight:"100vh"}}>
        <div className="container" style={{hight:"30vh",width:"40vw",paddingTop:200}}>
            <div className="jumbotron">
                <div className="card" id="quote-box">
                    <div className="card-title" style={{fontSize:25,fontWeight:"bold",paddingLeft:10}}>Quote</div>
                    <div className="card-body">
                     <p className="quote-text" id="text">&quot;{randomQuote.text}&quot;</p> 
                     <h5 className="quote-author float-right" id="author">-{randomQuote.author||"no author"}</h5>
                    <div className="column">
                        <a className="btn" style={{backgroundColor:"lightBlue"}} id="tweet-quote" title="Tweet this quote!" href="https://twitter.com/intent/tweet" target="_blank">
                            <i className="fa fa-twitter"></i>
                        </a>
                        <a className="btn" style={{backgroundColor:"lightYellow"}} href="https://twitter.com/tumblr" target="_blank">
                            <i className="fa fa-tumblr"></i>
                        </a>
                        <button className="btn" style={{backgroundColor:"#031",color:"white"}} id="new-quote" onClick={getNewQuote}>New Quote</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                <p style={{color:"white",textAlign:"center",marginTop:10}}>by Shasha</p>
            </div>
        </div>
    )
}
ReactDOM.render(<APP/>,document.getElementById("app"))