export class WorkoutPlan {
  constructor(
    public name: string,
    public title: string,
    public restBetweenExercise: number,
    public exercises: ExercisePlan[],
    public description?: string) {
  }

  totalWorkoutDuration() {
    if (!this.exercises) return 0;

    let total = this.exercises.map((e) => e.duration).reduce((previous, current) => previous + current);

    return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) + total;
  }
}

export class ExercisePlan {
  constructor(public exercise: Exercise, public duration: number) {
  }
}

export class Exercise {

  constructor(
    public name: string,
    public title: string,
    public description: string,
    public image: string,
    public nameSound?: string,
    public procedure?: string,
    public related?: ExerciseRelated) {
    // Without this the bindings fail for video player and rendering breaks.
    this.related = this.related || new ExerciseRelated([]);
  }
}

export class ExerciseRelated {
  constructor(public videos: string[]) {
  }
}