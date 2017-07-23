$(document).ready(function(){
            $('#btn-light-box').click(function(){   
                    $('.lightbox').show();                                           
                    $('.btn-text').hide();    
            });     
            $('.btn-close').click(function(){
                $('.lightbox').hide();
                $('.btn-text').show();    
            });
            
            $('#btn-xs-box').click(function(){   
                    $('.lightbox').show();                                                               
            });                 
        });

