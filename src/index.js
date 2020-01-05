document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formField = document.getElementById('new-task-description');
  const submit = document.getElementById('submit');
  const ul = document.getElementById('tasks');

  submit.addEventListener("click", function(event) {
      let text = formField.value; // Pizza

      createListItem(text);

      event.preventDefault();
  }, false);

  function createListItem(text) {
    const li = document.createElement("li");

    li.innerText = text;
    ul.appendChild(li);
  }

});
