let  posVec, velVec, nemo, haj, sharkposvec, Akvarium, bassposVec, bassvelVec
function preload(){
    Akvarium = loadImage('/Akvarie/Assets/Aquarium.png')
}


function setup() 
{
	createCanvas(1520, 770);
    imageMode(CORNERS)
    
    posVec = new Vector(4,1)
    velVec = new Vector(2,2.5)
    sharkposvec = new Vector(2,1)
    sharkvelvec = new Vector(3,4)
<<<<<<< HEAD
    dariusvelvec= new Vector(1,2)
    bassposvec = new Vector(1,4)
    bassvelvec = new Vector(3,2)
    nemo = new Klovnefisk(posVec,velVec)
    haj = new Shark(sharkposvec,sharkvelvec)
    darius = new Klovnefisk(posVec,dariusvelvec)
    bass = new Bass (bassposVec,bassvelVec)
=======
    nemo = new Klovnefisk(posVec,velVec)
    haj = new Shark(sharkposvec,sharkvelvec)
   
>>>>>>> daf7abbd65957961ed583e616849c33bc09d6e8e
}

function draw()
{
    image(Akvarium,0,0,1520,770)
    nemo.show("red")
    nemo.update()
    haj.show("Darkblue")
    haj.update()
    
}
