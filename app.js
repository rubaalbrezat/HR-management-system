`use strict`;

const allEmp=[];


function employee(employeeID ,FullName,Department, Level,image,Salary){

  this.EmployeeID = employeeID;
  this.FullName   = FullName;
  this.Department = Department;
  this.Level      = Level;
  this.image      = image;
  this.Salary     = this.Salary;

  allEmp.push(this) ;


}




// function for calculating the salary//
   employee.prototype.Salary=function()
{ 
     if(this.Level==="Senior")
       {
       this.Salary= Math.floor(Math.random()*(2000-1500+1)+1500);

       }
        if(this.Level==="Mid-Senior")
        {
         this.Salary= Math.floor(Math.random()*(1500-1000+1)+1500);

         }
         if(this.Level==="Junior")
         {
          this.Salary = Math.floor(Math.random()*(1000-500+1)+1000);
         }
        
         allEmp.push(this.Salary);

        

}

 
///calculatig the net salary//
employee.prototype.netSalary=function(){

  this.netSalary = Math.floor(this.Salary-(this.Salary*0.075));
  allEmp.push(this.netSalary);
}  



////  display empName & empSalary && net salary///
  
employee.prototype.print = function(){
    document.write(`<p> Full Name: ${this.FullName}: ${this.Salary}JD --> Net Salary =  ${this.netSalary} </p> ` );
   }

   const emp1 = new employee(1000,"Ghazi Samer","Administration","Senior",false,);
   const emp2 = new employee(1001,"Lana Ali","Finance","Senior",false,);
   const emp3 = new employee(1002,"Tamara Ayoub","Marketing ","Senior",false,);
   const emp4 = new employee(1003,"Safi Walid","Administration","Mid-Senior",false,);
   const emp5 = new employee(1004,"Omar Zaid","Development","Senior",false,);
   const emp6 = new employee(1005,"Rana Saleh","Development","Junior",false,);
   const emp7 = new employee(1006,"Hadi Ahmad","Finance","Mid-Senior",false,);


  for(let i=0;i<allEmp.length;i++){
    if(typeof allEmp[i] !== "number"){
    console.log(i,allEmp[i]);
    allEmp[i].Salary(); 
    allEmp[i].netSalary();
    allEmp[i].print();
    }
   
  }
   
   
  




