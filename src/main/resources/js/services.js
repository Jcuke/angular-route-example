app.value('defaultValue',"html5");


app.factory('testFactory',function(){

    function a(){
        return 100;
    }

    return {
        add:function(x,y){
            return x+y+a();
        }
    }
});


app.service('testService',function(){

    function a(){
        return 100;
    }


    this.add = function(x,y){
        return x+y+a();
    }


})


app.factory('swiper',function(){


    return {
        init:function(selector){
//new Swiper(selector)
        }
    }
})