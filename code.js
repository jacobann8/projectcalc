function btnclick(val){
    document.getElementById("screen").value+=val 
    /*if u have doubt givr value=val and see the difference*/

}
function clearVal(){
    document.getElementById("screen").value=""
}
function answer(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
   /* if btnclick()
        document.getElementById("screen").value=""*/

}
