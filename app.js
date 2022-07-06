`use strict`;

const allEmp=[];


function employee(employeeID ,FullName,Department, Level,image,Salary){

  this.EmployeeID = employeeID;
  this.FullName   = FullName;
  this.Department = Department;
  this.Level      = Level;
  this.image      = image;
  this.Salary     = Salary;

  allEmp.push(this);


}



// identification employee//

  const emp1 = new employee(1000,"Ghazi Samer","Administration","Senior",false);
  const emp2 = new employee(1001,"Lana Ali","Finance","Senior",false,);
  const emp3 = new employee(1002,"Tamara Ayoub","Marketing ","Senior",false,);
  const emp4 = new employee(1003,"Safi Walid","Administration","Mid-Senior",false,);
  const emp5 = new employee(1004,"Omar Zaid","Development","Senior",false);
  const emp6 = new employee(1005,"Rana Saleh","Development","Junior",false);
  const emp7 = new employee(1006,"Hadi Ahmad","Finance","Mid-Senior",false);










// function for calculating the salary//
   this.Salary=function calSalary()
{ 
    let Salary1;
     if(this.Level=="Senior")
       {
       Salary1= Math.floor(Math.random()*(2000-1500+1)+1500);
       } ifelse(this.Level=="Mid-Senior")
        {
         Salary1= Math.floor(Math.random()*(1500-1000+1)+1500);

         }ifelse(this.Level=="Junior")
         {
          Salary1 = Math.floor(Math.random()*(1000-500+1)+1000);
         }
         return Salary1 - 7.5;
        

         
 

}

 
  

////  display empName &empSalary///
  
employee.prototype.print = function(){
    document.write(`<p>${this.FullName}: ${this.Salary}JD \n </p> `);
   }


  for(let i=0;i<allEmp.length;i++){
    allEmp[i].print(); 
   }
   
   
  //Creat a construstor

/*const employeeArray=[];
function EmployeeInfo(fullName,depatment,level,img){
    this.id = Math.floor(1000+Math.random()9000);
    this.fullName=fullName;
    this.depatment=depatment;
    this.level=level;
    this.img=img;
    employeeArray.push(this);
}
EmployeeInfo.prototype.calculateSalary = function(){
    switch (this.level){
        case "senior":
            let seniorSalary=Math.floor((Math.floor(1500+(Math.random()500)))0.925);
            return  seniorSalary;
           break;
        case "mid-senior":
            let midSeniorSalary=Math.floor((Math.floor(1000+(Math.random()500)))0.925);
            return  midSeniorSalary;
            break;
            case "junior":
               let juniorSalary= Math.floor((Math.floor(500+(Math.random()500)))*0.925);
                return juniorSalary;
                break;
    }
}
document.write("Employee"+"   :   "+"Salary");
EmployeeInfo.prototype.renderInfo = function(){
    document.write(<p>${this.fullName} : ${this.calculateSalary()} JOD </p>);
}

const gazi =new EmployeeInfo("Ghazi Samer","Administration","senior");
const lana =new EmployeeInfo("Lana Ali","Finance","senior");
const tamara =new EmployeeInfo("Tamara Ayoub","Marketing","senior");
const safi =new EmployeeInfo("Safi Walid","Administration","mid-senior");
const omar =new EmployeeInfo("Omar Ziad","Development","senior");
const rana =new EmployeeInfo("Rana Saleh","Development","junior");
const hadi =new EmployeeInfo("Hadi Ahmad","Finance","mid-senior");

// console.log(lana.calulateSalary());
// console.log(tamara.calulateSalary());
// gazi.renderInfo();
// lana.renderInfo();
// tamara.renderInfo();
function renderHomePage(){
for(let i=0;i<employeeArray.length;i++){
    // console.log(employeeArray[i]);
    employeeArray[i].renderInfo();
}
}
renderHomePage();
*/
  



