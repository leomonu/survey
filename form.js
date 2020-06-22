class Form {
    constructor(){

        this.submit = createButton("submit");
        this.title = createElement("h2")
        this.name = createInput("NAME");
        this.q1 = createElement("h4");
        this.q2 = createElement("h4");
        this.q3 = createElement("h4");
        this.radio = createRadio('h3');
        this.radio.option("yes");
        this.radio.option("no");
        this.radio1 = createRadio('h3');
        this.radio1.option("yes");
        this.radio1.option("no");

        this.radio2 = createRadio('h3');
        this.radio2.option("100");
        this.radio2.option("500");
        this.radio2.option("1000")
        this.radio2.option("More")

        

    }

    


 
    display(){
        this.submit.position(320,452);
        this.title.position(330,39);
        this.title.html("Survey");
        
        this.name.position(290,112);
        this.q1.html(" Do you think we need to have free lunch meals in our school canteen for the kids who are very poor? ");
        this.q1.position(30,155)
        this.radio.position(30,200)
        this.q2.html(" Would you be willing to contribute a small amount every month for such a program? ");
        this.q2.position(30,220)
        this.radio1.position(30,260)

        this.q3.html(" How much money you will be willing to contribute a small amount every month for such a program? ");
        this.q3.position(30,280)
        this.radio2.position(30,320)

        

          
    
        
    }
 
}