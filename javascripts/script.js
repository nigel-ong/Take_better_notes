// const ThemeButton = document.querySelector(".purple_button");

// function clickevent(event)

// ThemeButton.addEventListener("click", changeText);

// function changeText() 
// {
//     if (ThemeButton.textContent === "Dark Theme"){
//         ThemeButton.textContent = "Light Theme";
// }
// else if(ThemeButton.textContent === "Light Theme") {
//     ThemeButton.textContent = "Dark Theme";
// }}

const ThemeButton = document.querySelector(".button_purple");


function changeText() 
{
    if (ThemeButton.textContent === "Dark Theme")
    {ThemeButton.textContent = "Light Theme";}
    else
    {ThemeButton.textContent = "Dark Theme";}
}

ThemeButton.addEventListener("click", changeText);