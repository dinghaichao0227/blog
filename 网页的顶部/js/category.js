
window.onload = function () {
    document.querySelector('.hm_cateLeft').addEventListener('touchmove',function(e){ 

        e.preventDefault();
    
    });
    document.querySelector('.hm_cateRight').addEventListener('touchmove',function(e){ 
    
        e.preventDefault();
    
    });

    /*区域滚动效果*/
    /*条件：一个容器装着一个容器html结构*/
    /*找到大容器*/
    /*子容器一定要大于父容器 */
    new IScroll(document.querySelector('.hm_cateLeft'),{
        scrollX:false,
        scrollY:true
    });
    new IScroll(document.querySelector('.hm_cateRight'),{
        scrollX:true,
        scrollY:false
    });
}