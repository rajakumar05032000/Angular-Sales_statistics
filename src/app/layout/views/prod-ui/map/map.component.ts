import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-mapz',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {



  lat5 = 11.678418;
  lng5 = 76.809007;

   mylocations = [
  
];


mylocations2 = [

];

  alldata: any;
  ic = "https://maps.google.com/mapfiles/ms/micons/green.png";
  ic2 = "https://maps.google.com/mapfiles/ms/micons/red.png";

  markerOptions = {
    color: '#000000',
    }
  
  constructor(private http: HttpClient) { 
    
  }
  ngOnInit(){
    this.http.get<any>('http://localhost:3000/data').subscribe(data => {
      this.alldata = data;
      console.log(data);
      for(let x in data)
      {
        var st = data[x]["Status2"];
        if(st == "ON")
        {
          var lat1 = data[x]["Latitude"];
          var lon1 = data[x]["Longitude"];
          var addr = data[x]['Location']
          var date = data[x]['Date'];
          this.mylocations.push({"lat":lat1,"lng":lon1,"addr":addr,"date":date});
        }
        else{
          var lat1 = data[x]["Latitude"];
          var lon1 = data[x]["Longitude"];
          var addr = data[x]['Location']
          var date = data[x]['Date'];
          this.mylocations2.push({"lat":lat1,"lng":lon1,"addr":addr,"date":date});
        }
        console.log("From xx:",data[x]["Status2"]);
      }
  })
  }
 

}




