class Kep {
    constructor(elem, adat, id){
        
        this.elem=elem;
        this.adat=adat;
        this.id=id;
        this.adat.id=id;
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        
       this.setAdat(this.adat);
        
        
        if(this.id>=0){
            this.elem.on("click", ()=>{
            this.setAllapot();
            //console.log(this);
        });
            
        }
        
        

    }
    
    setAdat(ertek){
        this.cim.html(ertek.cim);
        this.kep.attr("src",ertek.eleresiUt);
        this.leiras.html(ertek.leiras);
        
        
        
        
    }
    
setAllapot(){
    let esemeny = new CustomEvent("kepKattintas", {detail:this.adat});
    window.dispatchEvent(esemeny);
    //console.log(event.detail.id);
    
}
getId(){
    return this.id;
}

}
//    
//setAllapot(){
//
//  
//}