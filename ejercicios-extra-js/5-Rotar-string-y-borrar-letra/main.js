// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.
// Escriba un programa de JavaScript para girar la cadena 'w3resource' en la dirección correcta quitando periódicamente una letra del final de la cadena y poniéndola delante.
'use strict'

function animated_string(id){
    const element = document.getElementById(id);
    const textNode=element.childNodes[0];
    let text= textNode.data;
    setInterval(()=>{
        text=text[text.length - 1]+ text.substring(0, text.length - 1);
        textNode.data =text;
    }, 100);
}