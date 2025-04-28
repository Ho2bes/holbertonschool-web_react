// Export de l'interface Teacher
export interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[propName: string]: any;
  }

  // Objet Teacher
  const teacher3: Teacher = {
	firstName: 'John',
	lastName: 'Doe',
	fullTimeEmployee: false,
	location: 'London',
	contract: false,
  };

  console.log(teacher3);

  // Interface Directors qui étend Teacher
  export interface Directors extends Teacher {
	numberOfReports: number; // Propriété supplémentaire pour Directors
  }

  // Créer un objet Director
  const director1: Directors = {
	firstName: 'Jane',
	lastName: 'Smith',
	fullTimeEmployee: true,
	location: 'New York',
	numberOfReports: 10, // Propriété spécifique à Directors
  };

  console.log(director1);

  // Interface printTeacherFunction
  export interface printTeacherFunction {
	(firstName: string, lastName: string): string;
  }

  // Fonction printTeacher
  export const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName.charAt(0)}. ${lastName}`;
  };

  console.log(printTeacher('John', 'Doe')); // Affichera "J. Doe"

  // Interface pour décrire le constructeur et la classe StudentClass
  export interface StudentClassInterface {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
  }

  // Classe StudentClass
  export class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	}

	workOnHomework(): string {
	  return 'Currently working';
	}

	displayName(): string {
	  return this.firstName;
	}
  }

  const student = new StudentClass('John', 'Doe');
  console.log(student.displayName()); // Affichera "John"
  console.log(student.workOnHomework()); // Affichera "Currently working"
  