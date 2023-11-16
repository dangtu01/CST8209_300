const $lunchRoom = document.getElementById('lunchRoom')
// Add an event listener to the Lunch Room form ($lunchRoom) that listens for the 'submit'
$lunchRoom.addEventListener('submit', function(event) {
    // Ensure that the form does not cause a page refresh
    event.preventDefault();

    // Update the Story container's ($story) HTML
    $story.innerHTML = `
        <p class="fs-3">
            Make sure your lunch <span class="text-danger fw-bold">${$lrContainer.value}</span> 
            is filled with <span class="text-danger fw-bold">${$lrAdjective1.value}</span> food. 
            Do not go to the <span class="text-danger fw-bold">${$lrAdjective2.value}</span> 
            food stand across the street from the school. The hamburgers they serve are 
            fried in <span class="text-danger fw-bold">${$lrNoun.value}</span> and are made of 
            <span class="text-danger fw-bold">${$lrAnimal.value}</span> meat. So take a sandwich 
            made of <span class="text-danger fw-bold">${$lrVegetable1.value}</span> or 
            <span class="text-danger fw-bold">${$lrVegetable2.value}</span>. It's much healthier!
        </p>
    `;

    // Remove the 'd-none' class from the Story container ($story)
    $story.classList.remove('d-none');

    // Reset the Lunch Room form ($lunchRoom)
    $lunchRoom.reset();
});

const $lunchRoomLink = document.getElementById('lunchRoomLink')
// Add an event listener to the Lunch Room link ($lunchRoomLink) in the navbar that listens for the 'click' event.
$lunchRoomLink.addEventListener('click', function(event) {

    // Remove the 'd-none' class from the Lunch Room form ($lunchRoom)
    $lunchRoom.classList.remove('d-none');

    // Add the 'd-none' class to the Weather Report form ($weatherReport)
    $weatherReport.classList.add('d-none');

    // Add the 'd-none' class to the Story container ($story)
    $story.classList.add('d-none');

    // Add the 'active' class to the Lunch Room link ($lunchRoomLink)
    $lunchRoomLink.classList.add('active');

    // Remove the 'active' class from the Weather Report link ($weatherReportLink)
    $weatherReportLink.classList.remove('active');
});

const $weatherReport = document.getElementById('weatherReport')
// Add an event listener to the Weather Report form ($weatherReport) that listens for the 'submit' even
$weatherReport.addEventListener('submit', function(event) {
    // Ensure that the form does not cause a page refresh
    event.preventDefault();

    // Update the Story container's ($story) HTML
    $story.innerHTML = `
        <p class="fs-3">
            Early tomorrow, a <span class="text-danger fw-bold">${$weatherReport.elements.wrAdjective1.value}</span> 
            front will collide with a mass of hot <span class="text-danger fw-bold">
            ${$weatherReport.elements.wrPluralNoun1.value}</span> moving from the north. This means we can expect 
            <span class="text-danger fw-bold">${$weatherReport.elements.wrAdjective2.value}</span> winds and occasional 
            <span class="text-danger fw-bold">${$weatherReport.elements.wrPluralNoun2.value}</span> by late afternoon. 
            Wind velocity will be <span class="text-danger fw-bold">${$weatherReport.elements.wrNumber1.value}</span> 
            miles an hour, and the high temperature should be around 
            <span class="text-danger fw-bold">${$weatherReport.elements.wrNumber2.value}</span> degrees. So, if you're 
            going out, you had better plan on wearing your 
            <span class="text-danger fw-bold">${$weatherReport.elements.wrArticleOfClothing.value}</span>.
        </p>
    `;

    // Remove the 'd-none' class from the Story container ($story)
    $story.classList.remove('d-none');

    // Reset the Weather Report form ($weatherReport)
    $weatherReport.reset();
});

const $weatherReportLink = document.getElementById('weatherReportLink')
// Add an event listener to the Weather Report link ($weatherReportLink) in the navbar that listens for the 'click' event.
$weatherReportLink.addEventListener('click', function(event) {
  
    // Remove the 'd-none' class from the Weather Report form ($weatherReport)
    $weatherReport.classList.remove('d-none');
  
    // Add the 'd-none' class to the Lunch Room form ($lunchRoom)
    $lunchRoom.classList.add('d-none');
  
    // Add the 'd-none' class to the Story container ($story)
    $story.classList.add('d-none');
  
    // Add the 'active' class to the Weather Report link ($weatherReportLink)
    $weatherReportLink.classList.add('active');
  
    // Remove the 'active' class from the Lunch Room link ($lunchRoomLink)
    $lunchRoomLink.classList.remove('active');
  });
const $story = document.getElementById('story')
 


const $lrContainer = document.getElementById('lrContainer')
const $lrNoun = document.getElementById('lrNoun')
const $lrAdjective1 = document.getElementById('lrAdjective1')
const $lrAdjective2 = document.getElementById('lrAdjective2')
const $lrVegetable1 = document.getElementById('lrVegetable1')
const $lrVegetable2 = document.getElementById('lrVegetable2')
const $lrAnimal = document.getElementById('lrAnimal')