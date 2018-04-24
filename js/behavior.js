var $j = jQuery.noConflict();
$j(document).ready(function () {
    $j('#advert .adverts').click(function () {
            $j("#advert .adverts").addClass("active");
            $j("#advert h3").css("color","#701f1c");
        }, function () {
            $j("#advert .adverts").removeClass("active");
            $j("#advert h3").css("color","#fff");
        
            $j("#bc .bcm").removeClass("active");
            $j("#bc h3").css("color","#fff");
            
            $j("#pr .prm").removeClass("active");
            $j("#pr h3").css("color","#fff");
        });
    
    $j('#bc .bcm').toggle(function () {
            $j("#bc .bcm").addClass("active");
            $j("#bc h3").css("color","#701f1c");
        }, function () {
            $j("#bc .bcm").removeClass("active");
            $j("#bc h3").css("color","#fff");
        
            $j("#advert .adverts").removeClass("active");
            $j("#advert h3").css("color","#fff");
        
            $j("#pr .prm").removeClass("active");
            $j("#pr h3").css("color","#fff");
        
                
        }); 
    
    $j('#pr .prm').toggle(function () {
            $j("#pr .prm").addClass("active");
            $j("#pr h3").css("color","#701f1c");
        }, function () {
            $j("#pr .prm").removeClass("active");
            $j("#pr h3").css("color","#fff");
        });
    
    
    
        /*slider*/        
        $j(".bxslider, .alumni1, .alumni2, .alumni3").bxSlider();
        /*slider galeri*/    
        $j(".galeri-thumb").bxSlider({
            auto: false,            
            slideMargin: 15
        });
        $j(".galeri1").bxSlider({
            pagerCustom: '#galeri1-thumb',
            auto: false,
            controls:false
        });
        $j(".galeri2").bxSlider({
            pagerCustom: '#galeri2-thumb',
            auto: false,
            controls:false
        });
        
        $j(".bx-pager").on("click", "a", function (event) {
                debugger;
                $j(".bx-pager a img.active").removeClass("active");
                $j(".bx-pager a.active").removeClass("active");
                $j(this).addClass("active");
            });
        
        $j('.more-item.advert').css({'visibility':'hidden','display':'none'});                
        $j('.more-item.bc').css({'visibility':'hidden','display':'none'});                
        $j('.more-item.pr').css({'visibility':'hidden','display':'none'});
    
        $j('#advert .adverts').click(function () {
                $j('.more-item.advert').css({'visibility':'visible','display':'block'});
                $j('.mka').click(function () {
                        $j('.more-mk.advert').slideToggle("slow");
                });
                $j('.more-item.bc').css({'visibility':'hidden','display':'none'});                
                $j('.more-item.pr').css({'visibility':'hidden','display':'none'});
        });

        $j('.bcm').click(function() {
                $j('.more-item.bc').css({'visibility':'visible','display':'block'});
                $j('.mkb').click(function () {
                        $j('.more-mk.bc').slideToggle("slow");
                });
                $j('.more-item.advert').css({'visibility':'hidden','display':'none'});                                
                $j('.more-item.pr').css({'visibility':'hidden','display':'none'});
        });

        $j('.prm').click(function () {
                $j('.more-item.pr').css({'visibility':'visible','display':'block'});
                $j('.mkp').click(function () {
                        $j('.more-mk.pr').slideToggle("slow");
                });
                $j('.more-item.advert').css({'visibility':'hidden','display':'none'}); 
                $j('.more-item.bc').css({'visibility':'hidden','display':'none'});
        });
 
});