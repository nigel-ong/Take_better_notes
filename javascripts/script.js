const ThemeButton = document.querySelector(".button_purple");

const noteArray = 
[
    {title:"note one", body:"this is my first note"},
    {title:"note two", body:"this is my second note"}
]

function changeText() 
{
    if (ThemeButton.textContent === "Dark Theme")
    {ThemeButton.textContent = "Light Theme";}
    else
    {ThemeButton.textContent = "Dark Theme";}
}

ThemeButton.addEventListener("click", changeText);

function DarkMode() 
{
    document.body.classList.toggle('darkmode');
    document.querySelector('aside').classList.toggle('dark-sidenav');
    document.querySelector('textarea').classList.toggle('dark-notearea');
}

ThemeButton.addEventListener("click", DarkMode);

const CancelButton = document.querySelector(".button_red");

function cancel()
{
    document.querySelector('textarea').classList.add('hidden')
    document.querySelector('.mobile_div_bottom_buttons').classList.add('hidden')
}

CancelButton.addEventListener('click', cancel)

const NewNoteButton = document.querySelector(".button_blue_note");

function newnote()
{
    document.querySelector('textarea').classList.remove('hidden')
    document.querySelector('.mobile_div_bottom_buttons').classList.remove('hidden')
    document.querySelector('textarea').value = '';
}

NewNoteButton.addEventListener('click', newnote)

const SaveButton = document.querySelector(".button_blue_save")

let input = "";

function savenote()
{
    input = prompt("Enter title of note.");
}

SaveButton.addEventListener('click', savenote)