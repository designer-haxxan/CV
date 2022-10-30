$(document).ready(function(){

    $('#pofile_ripple').ripples({
        resolution:512,
        dropradius:10
    });

    var bars=document.querySelectorAll('.progress-bar');
    bars.forEach(function(bar) {
        
    let percetage = bar.dataset.percent;
    let tooltip = bar.children[0];

        tooltip.innerText=percetage+" %";
        bar.style.width=percetage+"%";



    });



     const counters =document.querySelectorAll('.counter');


      function runcounter(){
        counters.forEach(counter=>{
            counter.innerText=0;
            
             let target = +counter.dataset.count;
                let step = target/100;
             let countit=function(){
                let displayvalue=+counter.innerText;
                if(displayvalue<target){
                    counter.innerText=Math.ceil(displayvalue+step);
                    setTimeout(countit,1);
                }else{
                   counter.innerText=target;
                }
             };
             countit();

    });
      };


      

      let countersection = document.querySelector('.award');
      let options = {
        rootMargin:'0px 0px -200px 0px'
      }
      let done=0;
      const sectionobserver = new IntersectionObserver(function(entries){
            if(entries[0].isIntersecting && done!=1){
                done=1;
                runcounter();
            }

      },options);

      sectionobserver.observe(countersection);


});