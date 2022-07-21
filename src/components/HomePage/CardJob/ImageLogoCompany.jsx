/*import React, {useState, useEffect} from "react";

function InfoLogoCompany ({isbn}){
    const [imgBook, setImgBook] = useState([]);
    useEffect (()=>{
        fetch({companyLogo})
        .then (response=>response.json())
        .then (data=>setImgBook(data))
    },[])

    if (typeof imgBook === 'object'){
        if (imgBook.covers === undefined || imgBook.covers === null){
            return(
                <img className="cardImgBook card-img-top" 
                src={"https://www.forewordreviews.com/books/covers/bunk-9s-guide-to-growing-up.jpg"} 
                alt ="imagen de libro"/> 
            )
        } else {
            return(
                <img className="cardImgBook card-img-top" 
                src={`https://covers.openlibrary.org/b/id/${imgBook.covers}.jpg`} 
                alt ="imagen de libro"/> 
            )
        }

    } else {
        return(
            <img className="cardImgBook card-img-top" 
            src={"https://www.forewordreviews.com/books/covers/bunk-9s-guide-to-growing-up.jpg"} 
            alt ="imagen de libro"/> 
        )
    }
}

export default ImageBook;*/