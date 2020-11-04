window.onload=function() {
    var hmWin=document.querySelector(".hm_win");
    var hmwinBox=hmWin.querySelector(".hm_win_box");
    var deleteList=document.querySelectorAll(".deleteBox");
    var deleteBtn=null;
    for (var i =0; i<deleteList.length; i++) {
        deleteList[i].onclick=function() {
            hmWin.style.display="block";
            hmwinBox.classList.add("bounceInDown");
            console.log(this);
            deleteBtn=this;
            var up=deleteBtn.querySelector(".up");
            console.log(up);
            up.style.webkitTransition="all 1s";
            up.style.transition="all 1s";
            up.style.webkitTransformOrigin="0 5px";
            up.style.transformOrigin="0 5px";
            up.style.webkitTransform="rotate(-30deg) translateY(2px)";
            up.style.transform="rotate(-30deg) translateY(2px)";
        }
    }
    hmwinBox.querySelector(".cancel").onclick=function() {
        hmWin.style.display="none";
        hmwinBox.classList.remove("bounceInDown");
        if(deleteBtn) {
            var up=deleteBtn.querySelector(".up");
            up.style.webkitTransform="none";
            up.style.Transform="none"
        }
    }
}