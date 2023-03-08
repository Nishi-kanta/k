
//  function n()
//  {
//     let name;
//     name=prompt("what is your name enter except nishi....!?");
//     if(name!=="nishi"){
        
//          alert(" Well come"+" "+ name+" "+ "To nishi dashboard");
//     }
//     else{
//         n();
//     }
   
//  }
//  n();
                 //getelementbyclassname use index
 var li=document.getElementsByClassName("lisst");
  for(let i=0;i<li.length;i++)
  {
    if(i%2==0){
     li[i].style.color="lightblack";
     li[i].style.backgroundColor="gray"
    }
    else{
        li[i].style.color="black";
        li[i].style.backgroundColor="lightgray"
    }
  }
   let hh33=document.getElementsByClassName("hh3");
     hh33[0].style.border="3px solid red";


     
              //queryselector
   var ull=document.querySelector('ul');
      ull.style.backgroundColor="orange"
    

          // getelementbyid
     let loaa=document.getElementById("loa");
            
         loaa.style.border="10px solid green";
         loaa.style.borderRadius="30px";

         //new element creation 

         var newh1= document.createElement("h3");
         var texth1=document.createTextNode("thank god all are set ");
        let final= newh1.appendChild(texth1);
         document.write(final.textContent);
         console.log(final);