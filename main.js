(function(){
    'use strict';

    const start =document.getElementById('start');
    const stop =document.getElementById('stop');
    const result =document.getElementById('result');

    let startTime;
    let isStarted = false;

    start.addEventListener('click',function(){
        if(isStarted === true){
            return;
        }

        isStarted = true;

        startTime = Date.now();
        this.className = "pushed";
        stop.className ="";
        result.className = "standby";

        result.textContent = "0.000";
    });
    stop.addEventListener('click',function(){
        if(isStarted === false){
            return;
        }

        isStarted = false ;

        let elaspedTime;
        let diff;
        elaspedTime = (Date.now() - startTime)/1000;
        result.textContent=elaspedTime.toFixed(3);
        this.className = "pushed"
        start.className ="";
        result.className = "";

        
        diff = elaspedTime - 5.0;
        if(Math.abs(diff) < 1.0){
            result.className = "perfect";
            console.log('test');
        }
    });


})();
