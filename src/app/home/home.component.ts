import { Component, OnInit } from "../../../node_modules/@angular/core";

@Component({
    selector:'app-home',
    templateUrl:'./home.component.html',
    styleUrls:['./home.component.css']
})
export class HomeComponent implements OnInit {
   
    imageUrlArray: Array<string> =[];

    ngOnInit(): void {
        this.imageUrlArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYrh4ebuBauv2I6_EVHIpre0oC4f0gabxJkCJ_VZeMC80OJcMuw');
        this.imageUrlArray.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJVsJJQHEQW_ZcL3XSd1XjvFh0MdVzZiZba1VvaRYMtEB7TMzlFQ');
    }
}