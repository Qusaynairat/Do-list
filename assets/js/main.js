let btn = document.querySelector('.btn');
let input = document.querySelector('.txt');
let result = document.querySelector('.dolist');

btn.onclick = function () {
    // Save the state of all checkboxes
    const checkboxes = document.querySelectorAll('.dolist input[type="checkbox"]');
    const states = [...checkboxes].map(checkbox => checkbox.checked);
    // Append the new item using innerHTML
    result.innerHTML += `
        <div class="item">    
            <input type="checkbox">
            <label>${input.value}</label><br>
        </div>
    `;
    // Restore the state of all checkboxes
    // Note: querySelectorAll is called again to include the new checkbox
    
    document.querySelectorAll('.dolist input[type="checkbox"]').forEach((checkbox, index) => {
            checkbox.checked = states[index];
    });

    // Clear the input field
    input.value = '';
};