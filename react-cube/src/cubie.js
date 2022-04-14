import { p } from './Sketch'

export default class cubie{
    
  constructor(x, y, color, type, order){
      this.x = x;
      this.y = y;
      this.color = color;
      this.type = type;
      this.order = order;
  }

  show(){
      p.fill(this.color)
      p.rect(this.x, this.y, 25);
  }
}