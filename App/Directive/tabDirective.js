/**
 * Created by SXDELL on 2017/10/19.
 */
app.directive('tab',function(){
    return {
        templateUrl:'App/temp/tab.html',
        link:function(){
            $(".btn-tit").on('click','span',function(){
                $(this).addClass('bg').siblings().removeClass('bg');
            })
            var swiper = new Swiper('.swiper-container',{
                autoplay:1000,
                loop:true,
                pagination:'.swiper-pagination',
                paginationType:"bullets"
            });
            var str = '';
            $('.add').on('click',function(){
                for(var i=0;i<4;i++){
                    str+="<dl><dt><img src='Content/img/car.gif'></dt><dd><h2>上汽大众-全新旅途L</h2><h3>上汽大众-全新旅途L享2年0利率</h3><p><span>1元</span><small>1.44元</small></p></dd></dl>";
                }
                $('.likes').append(str);
            })
        }
    }
})
app.directive('tab1',function(){
    return {
        templateUrl:'App/temp/tab1.html'
    }
})
