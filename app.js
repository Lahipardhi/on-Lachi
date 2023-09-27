//What is difference between forEach and map?

var data = ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "NODE JS", "MONGO DB"];

var ul = document.querySelector("ul");

//1
// var result = ""
// for (var i = 0; i < data.length; i++) {
//   result = result + data[i];
// }
// ul.innerHTML = result

//2
// var result = ""
// for (var i = 0; i < data.length; i++) {
//   result += data[i];
// }
// ul.innerHTML = result

//3
// var result = ""
// for (var i = 0; i < data.length; i++) {
//   result += "<li class='list-group-item'>" + data[i] + "</li>"
// }
// ul.innerHTML = result

//4
// var result = ""
// for (var i = 0; i < data.length; i++) {
//   result += `<li class='list-group-item'>${data[i]}</li>`
// }
// ul.innerHTML = result

//5
// var result = "";
// data.forEach((item)=>{
//     result += `<li class='list-group-item'>${item}</li>`
// })
// ul.innerHTML = result;

//6
// var result = "";
// data.map((item)=>{
//     result += `<li class='list-group-item'>${item}</li>`
// })
// ul.innerHTML = result;

var data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true,
  },
];

//1
// var result = "";
// data.map((item)=>{
//     result += `<li class='list-group-item'>${item.title}</li>`
// })
// ul.innerHTML = result

//2
// var result = "";
// data.map((item)=>{
//     result += `<li class='list-group-item'>
//     <h1>${item.title}</h1>
//     <p>${item.completed}</p>
//     </li>`
// })
// ul.innerHTML = result

//3
var tbody = document.querySelector("tbody")

var result = "";
data.map((item)=>{
    result += `<tr>
    <td>${item.id}</td>
    <td>${item.title}</td>
    <td>${item.completed}</td>
    </tr>`
})
tbody.innerHTML = result;

//ecommerce card --- pending