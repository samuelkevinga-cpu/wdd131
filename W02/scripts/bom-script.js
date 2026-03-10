const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


button.addEventListener('click', function() {
    if (input.value.trim() === '') {
        alert('Please enter a book and chapter.');
        input.focus();
        return;
    }

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '❌';
    deleteBtn.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });

    li.append(deleteBtn);
    list.append(li);

    input.value = '';
    input.focus();
});
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});