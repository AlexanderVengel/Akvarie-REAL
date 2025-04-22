class Bass{
    #pos; #vel; #sizeX; #sizeY
    constructor(pos,vel){
        this.#pos = pos;
        this.#vel = vel;
        this.#sizeX = 60;
        this.#sizeY = 30;
    }

    update(){
        this.#pos=this.#pos.add(this.#vel)
        this.boundaryCheck()
    }

    show(col){
        fill(col)
        triangle(this.#pos.x, this.#pos.y, 
                this.#pos.x-this.#sizeX, this.#pos.y-this.#sizeY/4, 
                this.#pos.x-this.#sizeX, this.#pos.y+this.#sizeY/4);
        ellipse(this.#pos.x,this.#pos.y,this.#sizeX,this.#sizeY)
        fill("grey")
        rect(this.#pos.x-this.#sizeX/12, this.#pos.y-this.#sizeY/4,this.#sizeX/12, this.#sizeY)
        line(this.#pos.x,this.#pos.y,this.#pos.x+this.#sizeX/4,this.#pos.y)
        circle(this.#pos.x+this.#sizeX/6,this.#pos.y-this.#sizeY/6,5)
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