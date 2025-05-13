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
    dariusvelvec= new Vector(1,2)
    bassposvec = new Vector(1,4)
    bassvelvec = new Vector(3,2)
    sildposvec = new Vector(2,3)
    sildvelvec = new Vector (2,3)
    nemo = new Klovnefisk(posVec,velVec)
    haj = new Shark(sharkposvec,sharkvelvec)
    darius = new Klovnefisk(posVec,dariusvelvec)
    bass = new Bass (bassposvec,bassvelvec)
    sild = new Sild (sildposvec, sildvelvec)
}

function draw()
{
    image(Akvarium,0,0,1520,770)
    nemo.show()
    nemo.update()
    haj.show("Darkblue")
    haj.update()
    bass.show()
    bass.update()
    sild.show()
    sild.update()
}
