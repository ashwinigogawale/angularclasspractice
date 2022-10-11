function mobile(name,model,color){
    this.name=name;
    this.model=model;
    this.color=color;
    this.display=function(){
        console.log(this.name,this.model,this.color);
    }
}
var mob2=new mobile("sam","m10","black");
mob2.display();

