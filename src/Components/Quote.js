import React,  {useState, useEffect} from 'react'

function Quote() {
    const [quotes, SetQuotes] = useState('');

  const getQuotes = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      let randomNum = Math.floor(Math.random() * data.length);
      SetQuotes(data[randomNum]);
    })
  }

  useEffect(() => {
    getQuotes();
  }, [])

  return (
    <div className="card text-center border-primary text-bg-primary m-2 mt-5 ">
  
  <div className="card-body">
    <p className='fw-medium' > "{quotes.text}" </p>
    <p className='fw-bold'> Author: {quotes.author} </p>
    <button onClick={getQuotes} className="btn btn-light btn-sm" > Get Quote  </button>
  </div>
</div>
  )
}

export default Quote
