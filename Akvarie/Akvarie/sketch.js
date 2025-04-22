let  posVec, velVec, nemo, haj, sharkposvec
function preload(){
    Akvarium = loadImage('/Assets/Aquarium.png')
}


function setup() 
{
	createCanvas(1520, 770);
    imageMode(CORNERS)
    
    posVec = new Vector(4,1)
    velVec = new Vector(2,2.5)
    sharkposvec = new Vector(2,1)
    sharkvelvec = new Vector(3,4)
    dariusvelvec= new Vector(1,2)
    nemo = new Klovnefisk(posVec,velVec)
    haj = new Shark(sharkposvec,sharkvelvec)
    darius = new Klovnefisk(posVec,dariusvelvec)
}

function draw()
{
    image(Akvarium,0,0,1520,770)
    nemo.show("red")
    nemo.update()
    haj.show("Darkblue")
    haj.update()
    darius.show("red")
    darius.update()
}
//test fn igen