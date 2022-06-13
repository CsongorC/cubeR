import { p } from './Sketch'

export default class colorChooser{
    
  constructor(x, y, color){
    this.x = x;
    this.y = y;
    this.color = color;
  }

  show(){
    p.fill(this.color)
    p.rect(this.x, this.y, 25);
  }
}