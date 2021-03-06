// PANDA BOOTSTRAP V2
    function PID(id){
      return document.getElementById(id)
    }
    function Pclassname(classname){
      return document.querySelectorAll("."+classname)
    }
    function PQuery(type,query){
      if(type === "all"){
        return document.querySelectorAll(query)
      }
      if(type === "single"){
        return document.querySelector(query)
      }
    }
    function PClickEvent(element,funcname){
      element.addEventListener("click",funcname)
    }
    function PRandom(decimal,min,max){
      if(decimal === "float"){
        return Math.random() * (max - min) + min; 
      }
      if(decimal === "integer"){
        return Math.round(Math.random() * (max - min) + min)
      }
    }
    function PCreateImg(src,classname = "none",id = "none"){
      var tmp = document.createElement("img")
      tmp.src = src;
      if(classname === "none"){}else{
        tmp.classList.add(classname)
      }
      if(id === "none"){}else{
        tmp.id = "none"
      }
      return tmp;
    }
    function PEventListener(type,element,funcname){
      element.addEventListener(type,funcname)
    }
    function PAnimate(func){
      // you can only run one at a time
      window.requestAnimationFrame(function animatefuncpanimate(){
        func()
        window.requestAnimationFrame(animatefuncpanimate)
      })
    }
    
