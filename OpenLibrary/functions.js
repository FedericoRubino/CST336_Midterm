// 0451526538
$(document).ready(function(){

    $("#searchForm").submit(function(e){
        e.preventDefault();

        var ISBN = $("#keyword").val();
        if(ISBN <= 0){ return;}
        $.ajax({
            method: "GET",
            url: "https://openlibrary.org/api/books",  // ?bibkeys=ISBN:" + ISBN + "&callback=ISBN
            dataType: "json",
            data:{
                "bibkeys" : "ISBN:" + ISBN,
                "format" : "json",
                "jscmd" : "data"
            },
           
            success: function(result, status){
                let index = "ISBN:"+ ISBN;
                console.log(result[index].title);
                console.log(result[index].authors["0"].name);
                console.log(result[index].publish_date);
                console.log(result[index].publishers["0"].name);
                console.log(result[index].number_of_pages);
                console.log(result[index].cover.large);

                $("#bookImage").attr("src", result[index].cover.large);
                $("#bookImage").attr("class", "flex-item cover");

                $("#bookInfo").append("<div>Title: " + result[index].title + "</div>");
                $("#bookInfo").append("<div>Author: " + result[index].authors["0"].name  + "</div>");
                $("#bookInfo").append("<div>Publish: " + result[index].publish_date  + "</div>");
                $("#bookInfo").append("<div>Publisher: " + result[index].publishers["0"].name  + "</div>");
                $("#bookInfo").append("<div>ISBN: " + ISBN  + "</div>");
                $("#bookInfo").append("<div>Pages: " + result[index].number_of_pages  + "</div>");
            }
        });  
    });
});
