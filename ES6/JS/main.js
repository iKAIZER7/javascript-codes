import { Person,defaultAge } from "./person.js";
import calArea from "./area.js";        //import default export

const person1 =new Person('James',defaultAge);
const person2 =new Person('Bob',25);

const outputDiv = document.getElementById('div1');
outputDiv.innerHTML=`${person1.greet()}`;

const outputDiv1 = document.getElementById('div2');
outputDiv1.innerHTML=`${person2.greet()}`;

const outputDiv2 = document.getElementById('div3');
outputDiv2.innerHTML=`The Area of circle is : ${calArea(3.5)}`;
