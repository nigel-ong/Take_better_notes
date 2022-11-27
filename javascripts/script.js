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
