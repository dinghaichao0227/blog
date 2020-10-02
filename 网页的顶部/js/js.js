window.onload=function() {
    search();
};
function search() {
    var searchBox=document.querySelector('.body1-header-box');
    var bannerBox=document.querySelector('.body1-banner');
    var h=bannerBox.offsetHeight;
    window.onscroll=function(){
        var top=document.body.scrollTop;
        var opacity=0;
        if (top<h) {
            opacity=top/h*0.85
        }else {
            opacity=0.85;
        }
        searchBox.style.background="rgba(201,21,35,"+opacity+")";
    }
}