import { Component, OnInit } from '@angular/core';
import { ExerciseDataService } from '../exercise-data.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {

  exercises: Exercise[];

  constructor(private exerciseDataService : ExerciseDataService) { 
     exerciseDataService.getExercise().subscribe(e => (this.exercises = e));
  }

  ngOnInit() {
  }

}
