import { Component, OnInit } from '@angular/core';
import { ExerciseDataService } from '../exercise-data.service';
import { Exercise } from '../exercise';

@Component({
  selector: 'app-exercise-form',
  templateUrl: './exercise-form.component.html',
  styleUrls: ['./exercise-form.component.css']
})
export class ExerciseFormComponent implements OnInit {

  currentExercise: Exercise = new Exercise();

  addExercise() : void {
    this.exerciseDataService.addExercise(this.currentExercise);
    this.currentExercise = new Exercise();
  }

  constructor(private exerciseDataService : ExerciseDataService) { }

  ngOnInit() {
  }

}
