import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'best-world';
  items = ['swimming', 'breakfast', 'office', 'workout', 'dinner'];
  completed:string[] = [];
  isClicked = false;

  itemValues = [
   {
    name: 'swimming',
    list: ['marena', 'sundar']
   },
   {
    name: 'breakfast',
    list: ['mess', 'zomato']
   } 

  ]

  

  updateCompleted(event:any){

    if(event.target.checked == true){
      this.completed.push(event.target.value)   
      console.log(this.completed)
    }
    else{
      var x = this.completed.findIndex(event.target.value)
      
      this.completed = this.completed.splice(x, 1)
      console.log(x);
    }
    
    return event.target.checked
  }

}
