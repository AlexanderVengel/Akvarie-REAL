class Shark{
    #pos; #vel; #sizeX; #sizeY
    constructor(pos,vel){
        this.#pos = pos;
        this.#vel = vel;
        this.#sizeX = 125;
        this.#sizeY = 40;
    }

    update(){
        this.#pos=this.#pos.add(this.#vel)
        this.boundaryCheck()
    }

    show(col){
        fill(col)
        triangle(this.#pos.x, this.#pos.y, 
                this.#pos.x-this.#sizeX+20, this.#pos.y-this.#sizeY/2, 
                this.#pos.x-this.#sizeX+20, this.#pos.y+this.#sizeY/2);
        ellipse(this.#pos.x,this.#pos.y,this.#sizeX,this.#sizeY)
        fill("white")
        line(this.#pos.x+35,this.#pos.y,this.#pos.x+this.#sizeX/2,this.#pos.y)
        circle(this.#pos.x+this.#sizeX/4,this.#pos.y-this.#sizeY/4,3)
    }

    boundaryCheck(){
        // check that the fish is inside the canvas
        if ((this.#pos.x > width) || (this.#pos.x < 0)) {
            this.#vel.x = this.#vel.x * -1;
        }
        if ((this.#pos.y > height) || (this.#pos.y < 0)) {
            this.#vel.y = this.#vel.y * -1;
        }
    }
}
