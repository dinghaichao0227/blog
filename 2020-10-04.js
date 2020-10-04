//轮播图的一小部分：
function banner() {
    var banner=document.querySelector(".hm_banner");
    var w=banner.offsetWidth;
    var imageBox=banner.querySelector("ul:first-child");
    var pointBox=banner.querySelector("ul:last-child");
    var points=pointBox.querySelectorAll("li");
    var addTransition=function() {
        imageBox.style.webkitTransition="all.2s";
        imageBox.style.transition="all.2s";
    }
    var removeTransition=function() {
        imageBox.style.webkitTransition="none";
        imageBox.style.transition="none";
    }
    var setTranslateX=function() {
        imageBox.style.webkitTransform="translateX("+translateX+"px)";
        imageBox.style.transform="translateX("+translateX+"px)";
    }
    var index=1;
    var timer=setlnterval(function(){
        index ++;
        addTransition();
        setTranslateX(-index*w);
    },4000);
    imageBox.addEventListener('transitionEnd',function(){
        if(index>=9){
            index=1
            removeTransition();
            setTranslateX(-index*w)
        }else if(index<=0){
            index=8;
            removeTransition();
            setTranslateX(-index*w);
        }
        setPoint();
    })
}