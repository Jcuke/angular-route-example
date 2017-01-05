app.filter('tc',function(){
    return function(element){
        return element*2;
    }
})



    .filter("four",function(){
        return function(ele){
            return ele.toFixed(4);    //过滤保留四位小数
        }
    })