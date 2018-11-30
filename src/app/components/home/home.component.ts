import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../service/team-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public name = 'Danielle';
  public lsHome = 'https://www.legitscript.com';
  public teamName = 'Barracuda';
  public team; 


  
  constructor(private teamService: TeamService) {}

  ngOnInit() {
    this.team = this.teamService.getTeam();
  }
  
  public changeName() {
   this.name = 'New Name!';
  }

  public updateName(name) {
    this.teamName = name;
  }

}
