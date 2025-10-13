// This flag will help us clear the initial message only once.
let isFirstSubmission = true;

// This function runs when the form is submitted.
function handleFormSubmit(event) {
    // 1. Prevent the form from reloading the page.
    event.preventDefault();

    // 2. Get the values from each input field.
    const titleValue = document.getElementById('titleInput').value;
    const phoneValue = document.getElementById('phoneInput').value;
    const yearValue = document.getElementById('yearSelect').value;
    const imageFile = document.getElementById('imageInput').files[0];

    // 3. Find the area where we will display the information.
    const displayArea = document.getElementById('displayArea');
    
    // 4. On the very first submission, clear the default message.
    if (isFirstSubmission) {
        displayArea.innerHTML = ''; // Clear the "Your submitted data..." text
        isFirstSubmission = false;  // Set the flag so this block doesn't run again
    }

    // 5. Handle the image display
    let imageHtml = '<p><b>Image:</b> No image uploaded.</p>';
    if (imageFile) {
        const imageURL = URL.createObjectURL(imageFile);
        imageHtml = `
            <p><b>Uploaded Image:</b></p>
            <img src="${imageURL}" alt="User Uploaded Image" width="300">
        `;
    }

    // 6. Create the HTML for this new submission.
    // Notice the <hr> at the end to create a separator line.
    const outputHtml = `
        <p><b>Title:</b> ${titleValue}</p>
        <p><b>Phone Number:</b> ${phoneValue}</p>
        <p><b>Selected Year:</b> ${yearValue}</p>
        ${imageHtml}
        <hr>
    `;

    // 7. Add the new HTML to the display area without deleting the old content.
    displayArea.innerHTML += outputHtml;

    // 8. Optional: Reset the form fields after submission for a better user experience.
    document.getElementById('userInfoForm').reset();
}

// Find the form element in the HTML.
const userInfoForm = document.getElementById('userInfoForm');

// Attach our function to the form's 'submit' event.
userInfoForm.addEventListener('submit', handleFormSubmit);