import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Exercise } from './exercise';
@Injectable({
  providedIn: 'root'
})
export class ExerciseDataService {
//array of exercises
  exercises : Exercise[] = [{ activity: "Running", minutes: 30, completed: true }];

//get exercises
getExercise(): Observable<Exercise[]> {
  return of(this.exercises);
}

// add exercise
addExercise(exercise : Exercise){
  this.exercises.push(exercise);
}
  constructor() { }
}
