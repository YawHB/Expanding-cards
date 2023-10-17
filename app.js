window.addEventListener('load', start);

function start() {
    //gets an array of all panels
    const panels = document.querySelectorAll('.panel');

    //Adds click event on all panels
    for (const panel of panels) {
        panel.addEventListener('click', panelClicked);
    }
}
function panelClicked(event) {
    //Finds the parent element
    const container = document.querySelector('.container');
    //finds the panel with the active class inside of parent element
    const activePanel = container.querySelector('.active');
    //If there is not a panel with an active class then add it on the one clicked
    if (!event.target.classList.contains('active')) {
        event.target.classList.add('active');
        activePanel.classList.remove('active');
        //Else just add the active class to the panel clicked
    } else {
        event.target.classList.add('active');
    }
}
