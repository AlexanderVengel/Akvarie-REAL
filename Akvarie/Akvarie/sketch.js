let  posVec, velVec, nemo, haj, sharkposvec, Akvarium, bassposVec, bassvelVec
function preload(){
    Akvarium = loadImage('/Akvarie/Assets/Aquarium.png')
}

let fishes = [];
function setup() 
{
	createCanvas(1520, 770);
    imageMode(CORNERS)
   

    
        let antalFisk = 15; 
    
    for (let i = 0; i < antalFisk; i++) {
        let pos = new Vector(random(width), random(height));
        let vel = new Vector(random(-2, 2), random(-2, 2));
        let nyFisk;
    
        let type = int(random(4));
        if (type === 0) nyFisk = new Klovnefisk(pos, vel);
        else if (type === 1) nyFisk = new Shark(pos, vel);
        else if (type === 2) nyFisk = new Bass(pos, vel);
        else nyFisk = new Sild(pos, vel);
    
        fishes.push(nyFisk);
    }
    
    }
    
    

    function draw() {
        image(Akvarium, 0, 0, 1520, 770);
        for (let fish of fishes) {
            fish.update();
            fish.show();}
        
        }
