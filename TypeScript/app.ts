interface IPerson
{
    name : string;
    age : number;
}

class Student implements IPerson
{
    name : string;
    age : number;
    standard : number;
    favSubject : string;
}

class School extends Student
{
    students: string[] = ["none"];
    schoolName: string;// = ["none"];

display(name: string, age: number, standard: number, favSubject: string, schoolName : string) : void
    {
      this.name= name;
      this.age= age;
      this.standard= standard;
      this.favSubject= favSubject; 
      this.schoolName=schoolName;
     console.log(`Name is ${this.name}, Age is ${this.age}, Class ${this.standard},Favorite Subject is ${this.favSubject} and is in ${this.schoolName} school.`);
    
    //console.log(`Student array: ${this.students}`)
    }
}

var school :string[]= ["none"];

//function for storing student info
function CreateStudent(){

    var stuName : string = (<HTMLInputElement>document.getElementById("name")).value;
    
    var stuAge : number = parseInt((<HTMLInputElement>document.getElementById("age")).value);

    var stuStandard : number = parseInt((<HTMLInputElement>document.getElementById("standard")).value);
    
    var stuFavSubject : string = (<HTMLInputElement>document.getElementById("subject")).value;
    
    var stuSchool : string = (<HTMLInputElement>document.getElementById("school")).value;
    
    school.push(stuSchool);
    var student = new School;
    for(var i=0; i< school.length; i++)
    {
        if(stuSchool === school[i])
        {
            
            student.students.push(stuName);
        }
        else
        {

        }
    }    
    
    //console.log(student);

    student.display(stuName, stuAge, stuStandard, stuFavSubject,stuSchool);

    }
   //search function
    function Search() : void{

        var search : string = (<HTMLInputElement>document.getElementById("btn")).value;

        for(var i=0; i<school.length; i++)
            {
                if(search === school[i])
                {
                    var studnt = new School;
                   console.log(school[i]);
                   console.log(studnt.name);
                }
            }
        }



