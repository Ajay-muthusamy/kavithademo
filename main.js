// // var,const,let

// // var a = 10;
// // var b = 20;
// // var c = 30;

// // var result = a + b +c;
// // console.log("my result" , result);

// // const firstName = "Ganeshan";
// // const lastName = "Mettunerai";

// // console.log(firstName +" " + lastName);

// // id - one;
// // class - second;

// // document.getElementById("one");
// // document.getElementsByClassName("second")

// function myfun(a,b,c)
// {
//   var result = a+b+c;
//   console.log("My Function result",result);
// }
// myfun(10,20,30);

// const data = ["ajay","kavitha","ganeshan"];

// data.map((items,index)=>(
//     console.log(items)
// ))
// //very very very important

const h1add = document.getElementById("add");

function textdisplay() {
  var userinput = document.getElementById("one").value;
  h1add.innerHTML = `Welcome ${userinput} 😍💥💥`;
  alert("Your Order is Confirmed");
}

const resulth1 = document.getElementById("h1result");

function addition() {
  const a = document.getElementById("num1").value;
  const b = document.getElementById("num2").value;
  var result = parseInt(a) + parseInt(b);
  resulth1.innerHTML = `Result  ${a} + ${b} = ${result}`;
}
