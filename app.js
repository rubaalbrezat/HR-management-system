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


  employee.prototype.printCard=function() {

   /* let z = document.getElementById("zz");

    let emp = document.createElement("img");
     emp.src=this.image;
     emp.alt="empPic";
     z.appendChild(emp);
     emp.style.cssText="width:100px ; hight:100px";


     let a = document.createElement("p");
     a.textContent = "name: "+this.FullName +"  department: " + this.Department +"  level: " + this.Level;
     z.appendChild(a);

     z.style.cssText="text-align:center";

     let r=document.createElement("div");
     r.appendChild(emp);
     r.appendChild(z);

     r.setAttribute("class","divs");
     emp.setAttribute("id","img");
*/
     
let a = document.getElementById("hdr");
    
let x = document.createElement("p");
x.textContent ="Name: "+ this.FullName +",dep :" +this.Department+"Level : "+ this.Level +",Id :" +this.EmployeeID;
let r = document.createElement("img");
r.src = this.image;
r.alt = "Employee image";

let z = document.createElement("div");
z.appendChild(r);
z.appendChild(x);
a.appendChild(z);
z.setAttribute("class","divs");
r.setAttribute("id","img");
     
     
   






     
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
/*employee.prototype.netSalary=function(){

  this.netSalary = Math.floor(this.Salary-(this.Salary*0.075));
  allEmp.push(this.netSalary);
}  */



////  display empName & empSalary && net salary///
  
/*employee.prototype.print = function(){
    document.write(`<p> Full Name: ${this.FullName}: ${this.Salary}JD --> Net Salary =  ${this.netSalary} </p> ` );
   }*/

   const emp1 = new employee(1000,"Ghazi Samer","Administration","Senior", "assest/Ghazi.jpg");
   const emp2 = new employee(1001,"Lana Ali","Finance","Senior","assest/Hadi.jpg");
   const emp3 = new employee(1002,"Tamara Ayoub","Marketing ","Senior","assest/Lana.jpg");
   const emp4 = new employee(1003,"Safi Walid","Administration","Mid-Senior","assest/Omar.jpg");
   const emp5 = new employee(1004,"Omar Zaid","Development","Senior","assest/Rana.jpg");
   const emp6 = new employee(1005,"Rana Saleh","Development","Junior","assest/Safi.jpg");
   const emp7 = new employee(1006,"Hadi Ahmad","Finance","Mid-Senior"," assest/Tamara.jpg");


  for(let i=0;i<allEmp.length;i++){
    
    
    //allEmp[i].Salary(); 
   //allEmp[i].netSalary();
    allEmp[i].printCard();
    
   
  }
   
   
  




