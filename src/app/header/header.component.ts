import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise';
import { ExerciseDataService } from '../exercise-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  exercises: Exercise[];

  constructor(private exerciseDataService : ExerciseDataService) { 
     exerciseDataService.getExercise().subscribe(e => (this.exercises = e));
  }

  ngOnInit() {
  }

}
