class fisk {
    constructor(pos, vel, sizeX, sizeY) {
        this.pos = pos;
        this.vel = vel;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    update() {
        this.pos = this.pos.add(this.vel);
        this.boundaryCheck();
    }

    boundaryCheck() {
        if ((this.pos.x > width) || (this.pos.x < 0)) {
            this.vel.x = this.vel.x * -1;
        }
        if ((this.pos.y > height) || (this.pos.y < 0)) {
            this.vel.y = this.vel.y * -1;
        }
    }
}