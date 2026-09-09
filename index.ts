//*Type inference(sbse phele jo value aap assign krte ho uska data type wo khud ko assign kr lega ) 

// let a =30;
//     a="pol"
// console.log(a); 

//* and Annotation ( sbse phele jo data type aap assign krte ho usko khud nhi assign kr lega hum denge isme)

// let a:number=30;
// let b:boolean=true;
// console.log(a,b);


//*Primitive data types

// string;
// let val:string="hello";

// number;
// boolean;

// bigint(last me n dete hain);
// let bigint:bigint=242424n;

// undefined;
// let h:undefined;

// symbol;
// let y:symbol=Symbol("hello");


//*Arrays
// let arr1:number[] =[10,20,30,40,50];

//*Any (kuch bhi do sab chalega it is a bad way of coding)
// let arr2:any[]=[10,20,30,undefined,"world","how","are","you"];

//*unknown (kuch bhi do pr update krte waqt dikkat ayegi)
// let a:unknown ="faisal";
// console.log(a.toUpperCase());


//*Never(kuch bhi nhi aana chiea mean blank )
// let y:never;

//*Tuples
// let arr2:[number,string,boolean]=[10,"hello",true];
// let data1:[{name:string},{age:number},{gender:string}]=[{name:"faisal"},{age:20},{gender:"male"}]; 
// let data2:any[]=[{name:"faisal"},{age:20},{gender:"male"}]; 


//*Enums(mean options)
// enum roles{admin,user,superadmin}
// let role=roles.user;
// console.log(role);
   
//*union type(mean ek ya ek se zayda variable dene hai to de sakte ho)
// let yolo:string|number = "faisal";
// yolo = 20;
// console.log(yolo);

//*Literal types (mean ek value se zayda variable dene hai to de sakte ho)
type status ="pending"|"success"|"error";
let status:status="pending";
console.log(status);




