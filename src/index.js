document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const task = document.getElementById("create-task-form")
  const list = document.getElementById("tasks")
  
  task.addEventListener("submit", (e)=>{
    e.preventDefault()
    
    document.createElement(`list`)
    
    const addElement = () => {

      const capturesText = e.target[0].value
      const grabLi = document.createElement("li");
      const createLi = grabLi.innerHTML

      list.appendChild(grabLi)
      
      grabLi.innerHTML = capturesText

      return createLi
    }   
    return addElement()
  })
  
});