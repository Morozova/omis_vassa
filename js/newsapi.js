
class Newsapi{
    url = "http://newsapi.org/v2/everything?q=tesla&from=2021-02-08&sortBy=publishedAt&apiKey=5276d87af504489e9339985ab691991a"

    getData(){

        fetch(this.url)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    generateNewsCard(){
        let card = `
        <div class="card" style="width: 18rem;">
        ${this.url}
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
        `

        return card
    }

    getNewsImage(){}
    getNewsTitle(){}
    getNewsBody(){}

    parseNewsObject(newsAllData){

        if (typeof newsAllData == "object"){
        newsAllData.forEach(element => {
            this.newsItem(element)
        });
    }
    }

    newsItem(newsItem){
        if(typeof newsItem == "object")
        {
            this._NewsTitle = newsItem.title
            this._NewsBody = newsItem.content
            this._NewImage = newsItem.urlToImage
        }
    }


}

let news = new Newsapi()
news.getData()