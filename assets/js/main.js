let btn = document.querySelector('.btn');
let input = document.querySelector('.txt');
let result = document.querySelector('.dolist');
btn.onclick = function () {
    result.innerHTML += `
    <div class="item">    
    <input type="checkbox">
        <label>${input.value}</label><br>
    </div>
    `;

}
