(function(){
        let counter =0;
      const decrement = () => {
          counter --;
             updatecounter();
    
     };
        const increment = () => {
         counter ++;
            updatecounter();
    
      };
     const updatecounter=() => {
             document.getElementById("counter").innerHTML= counter;}
 function refresh(){
     document.getElementById('counter').innerHTML = '0' }
     document.getElementById("refresh").addEventListener("click",refresh);
        document.getElementById("increment").addEventListener("click",increment);
     document.getElementById("decrement").addEventListener("click",decrement);
        
})(); 