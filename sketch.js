var database;

var form;

var cnv;





function setup() {
 cnv =  createCanvas(800,600);
 background("yellow"); 
 database = firebase.database(); 
 console.log(database);


  form = new Form();
  form.display();
form.submit.mousePressed(mousePressed);

 
    
   }


function draw() {
  
  drawSprites();
  // text(mouseX+":"+mouseY,mouseX,mouseY);

  
  
}
function mousePressed() {
  console.log(form.radio.value());
  
 form.q1.hide();
 form.q2.hide();
 form.q3.hide();
 form.radio.hide();
 form.radio1.hide();
 form.radio2.hide();
 form.submit.hide();
textSize(20);
 text("THANK YOU "+form.name.elt.value +"  FOR YOUR SUPPORT",200,200)

 database.ref('/').update({
   name:form.name.elt.value,
   q1Answer:form.radio.value(),
   q2Answer:form.radio1.value(),
   q3Answer:form.radio2.value()
   


   
   
 });
 


 
}