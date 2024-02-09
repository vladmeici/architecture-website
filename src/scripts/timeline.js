const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth;

export function createTimeLine() {
    const timelineContainer = document.getElementById("TimelineContainer");

    timelineContainer.innerHTML = "";
    timelineContainer.classList.add("timeline-container");

    addTimeLineBlock(timelineContainer, "HOME", 5);
    addTimeLineBlock(timelineContainer, "STORIES", 5);
    addTimeLineBlock(timelineContainer, "OUR WOW", 5);
    addTimeLineBlock(timelineContainer, "OUR PURPOSE", 5);
    addTimeLineBlock(timelineContainer, "ARCHITECTS", 5);
    addTimeLineBlock(timelineContainer, "MINDS", 5);
    addTimeLineBlock(timelineContainer, "CONNECT", 1);

}

function addTimeLineBlock(container, text, steps) {

    var timeLineBlock = document.createElement('div');
    timeLineBlock.classList.add("timeline-block");

    var textParagraph = document.createElement('p');
    textParagraph.innerHTML = text;

    textParagraph.addEventListener("click", function() {
        scrollToBlock(text)
    });

    var stepsContainer = document.createElement('div');
    for(var step = 0; step <= steps; step++) {
        var stepDiv = document.createElement('div');
        stepDiv.classList.add("step");
        stepsContainer.appendChild(stepDiv);
    }

    timeLineBlock.appendChild(textParagraph);
    timeLineBlock.appendChild(stepsContainer);
    container.appendChild(timeLineBlock);
}

function scrollToBlock(blockID) {

    const element = document.getElementById(blockID);

    element.scrollIntoView({behavior: "smooth"});
}
