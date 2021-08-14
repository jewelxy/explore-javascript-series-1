var tit1 = document.getElementById('title');

    tit1.style.color="green";
    tit1.style.fontFamily ="arial";
    tit1.style.fontSize = "25px";
    tit1.style.marginBottom = "0";

              //Exploring title 2

    var tit2 = document.getElementById('title2');

    tit2.style.color="green";
    tit2.style.fontFamily ="cursive";
    tit2.style.textAlign ="center";
    tit2.style.fontSize = "45px";
    tit2.style.marginBottom = "0";

                //Exploring Authors 

var authors = document.getElementsByClassName('author');
// console.log(authors); //get data by HTML Collection

    for (var i = 0; i < authors.length; i++) {
        var element = authors[i];
        // console.log(element); //get HTML singel Data

        element.style.backgroundColor = "lightblue";
        element.style.margin = "10px";

        //Show inner HTML
        // console.log(element.innerHTML);

        //change inner HTML
        element.innerHTML = "Writter - "+ (i+1);   
    }


            //Exploring Article by query Selector || query selectorAll
    var articles = document.querySelectorAll('.special h3'); // Returns all element descendants of node that match selectors.
    // console.log(articles); 

    var article = document.querySelector('.special h3'); //Returns the first element that is a descendant of node that matches selectors.
    // console.log(article); 

        for (var i = 0; i < articles.length; i++) {
            var elementArticle = articles[i];
            // elementArticle.style.backgroundColor = "tomato";
            elementArticle.style.margin = "10px";  
            elementArticle.style.padding = "10px"; 
            elementArticle.setAttribute("title","Best Seller");
            elementArticle.innerHTML = "Book Seller - "+ (i+2);
            
        }


