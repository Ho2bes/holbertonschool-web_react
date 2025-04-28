// Interfaces DirectorInterface et TeacherInterface
export interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
  }

  export interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
  }

  // Classes Director et Teacher
  export class Director implements DirectorInterface {
	workFromHome(): string {
	  return 'Working from home';
	}

	getCoffeeBreak(): string {
	  return 'Getting a coffee break';
	}

	workDirectorTasks(): string {
	  return 'Getting to director tasks';
	}
  }

  export class Teacher implements TeacherInterface {
	workFromHome(): string {
	  return 'Cannot work from home';
	}

	getCoffeeBreak(): string {
	  return 'Cannot have a break';
	}

	workTeacherTasks(): string {
	  return 'Getting to work';
	}
  }

  // Fonction createEmployee
  export function createEmployee(salary: number | string): Teacher | Director {
	if (typeof salary === 'number' && salary < 500) {
	  return new Teacher();
	} else {
	  return new Director();
	}
  }

  // Type littéral pour Subjects
  export type Subjects = 'Math' | 'History';

  // Fonction teachClass
  export function teachClass(todayClass: Subjects): string {
	if (todayClass === 'Math') {
	  return 'Teaching Math';
	} else {
	  return 'Teaching History';
	}
  }

  // Fonction isDirector (type prédicat)
  export function isDirector(employee: Teacher | Director): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
  }

  // Fonction executeWork
  export function executeWork(employee: Teacher | Director): string {
	if (isDirector(employee)) {
	  return employee.workDirectorTasks();
	} else {
	  return employee.workTeacherTasks();
	}
  }
