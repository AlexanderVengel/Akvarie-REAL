class Klovnefisk extends fisk{
    constructer(pos, vel, sizeX, sizeY){
    update()
    boundaryCheck()}
    show(col){
        fill(col)
        triangle(this.pos.x, this.pos.y, 
                this.pos.x-this.sizeX, this.pos.y-this.sizeY/2, 
                this.pos.x-this.sizeX, this.pos.y+this.sizeY/2);
        ellipse(this.pos.x,this.pos.y,this.sizeX,this.sizeY)
        fill("white")
        rect(this.pos.x-this.sizeX/8, this.pos.y-this.sizeY/2,this.sizeX/8, this.sizeY)
        line(this.pos.x,this.pos.y,this.pos.x+this.sizeX/2,this.pos.y)
        circle(this.pos.x+this.sizeX/4,this.pos.y-this.sizeY/4,3)
    }

}