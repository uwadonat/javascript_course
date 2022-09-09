import Course from "./course.js";

const object = new Course("Object", "Donat", 0, 0, "09_09_2022", "good");

// display content of the course

const objectCourse = `

<div>
   <h2>${object.title}</h2>
   <h3>What is an Object</h3>
      <p>In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup,
       for example. A cup is an object, with properties. A cup has a color, a design, weight,
       a material it is made of, etc. The same way, JavaScript objects can have properties,
       which define their characteristics.</p>

   <h3>Why do we need an object</h3>

   <p>In JavaScript, an object is a standalone entity, with properties and type. Compare it with a cup,
       for example. A cup is an object, with properties. A cup has a color, a design, weight,
       a material it is made of, etc. The same way, JavaScript objects can have properties,
       which define their characteristics.</p>

    <p>Athor: ${object.author}</p>
    <div>
      <p>Likes: ${object.likes} <span><i class="fa-solid fa-thumbs-up"></i><span></p>
      <p>Athor: ${object.dislikes}<span><i class="fa-solid fa-thumbs-down"></i><span></p>
    </div>
    <p>Creation date: ${object.creation_date}</p>
    <p>Comments: ${object.Comments}</p>
   
</div>
`;

const object_course = document.querySelector(".object-course");

object_course.innerHTML = objectCourse;
