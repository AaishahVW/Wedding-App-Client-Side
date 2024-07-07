function loadContent(section) {
    const content = document.getElementById('content');
    const buttons = document.querySelectorAll('.sidebar button');

    // Hide all content sections
    const contentSections = document.querySelectorAll('.content-section');
    contentSections.forEach(section => section.style.display = 'none');

    // Remove the current highlighted button
    buttons.forEach(button => button.classList.remove('active'));

    // Check if #manage-event-bg exists before hiding it
    const backgroundImg = document.getElementById('manage-event-bg');
    if (backgroundImg) {
        backgroundImg.style.display = 'none';
    }

    // Show the selected content section
    switch (section) {
        case 'create-event':
            document.getElementById('create-event-content').style.display = 'block';
            break;
        case 'view-rsvp':
            document.getElementById('view-rsvp-content').style.display = 'block';
            break;
        case 'edit-event':
            document.getElementById('edit-event-content').style.display = 'block';
            break;
        case 'view-gallery':
            document.getElementById('view-gallery-content').style.display = 'block';
            break;
        default:
            // If section doesn't match any case, show the background image
            if (backgroundImg) {
                backgroundImg.style.display = 'block';
            }
            break;
    }

    // Highlight the clicked button
    buttons.forEach(button => {
        if (button.getAttribute('data-section') === section) {
            button.classList.add('active');
        }
    });
}