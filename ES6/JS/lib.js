/* Modularize JS Code into modules and make them reusable across Applications.
   
  A Module is a JS file that executes in strict mode.
  It means that any variables or functions declared in the module won’t be added 
   automatically to the global scope.

  A module can export functions, variables, classes, etc. using the export keyword.
  A module can import functions, variables, classes, etc. from other modules using the 
  import keyword.
  */

  //DOM Manipulation
  function display(message){
    const el=document.createElement('div');
    el.innerText=message;
    document.body.appendChild(el);
  }

  export { display }; //display() function is available in other modules)