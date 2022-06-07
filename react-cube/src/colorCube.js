export default class colorCube{

    constructor(){
      this.corners = 0;
      this.center = 0;
      this.edges = 0;
    }
  
    reset(){
      this.corners = 0;
      this.center = 0;
      this.edges = 0;
    }
  
    doIncreaseCorner(){
      this.corners += 1;
    }
  
    doIncreaseCenter(){
      this.center += 1;
    }
  
    doIncreaseEdge(){
      this.edges += 1;
    }
  
    increaseCorner(){
      if(this.corners < 4){
        return true;
      }
      console.log("Increase Corner: FALSE");
      return false;
    }
  
    increaseCenter(){
      if(this.center < 1){
        return true;
      }
      console.log("Increase Center: FALSE");
      return false;
    }
  
    increaseEdge(){
      if(this.edges < 4){
        return true;
      }
      console.log("Increase Edge: FALSE");
      return false;
    }
  
    decreaseCenter(){
      this.center -= 1;
    }
  
    decreaseEdge(){
      this.edges -= 1;
    }
  
    decreaseCorner(){
      this.corners -= 1;
    }
  
  }