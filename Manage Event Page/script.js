function loadContent(section) {
    const content = document.getElementById('content');
    const buttons = document.querySelectorAll('.sidebar button');

    // Remove the current highlighted button
    buttons.forEach(button => button.classList.remove('active'));

    // set active and non-active for div content
    switch (section) {
        case 'create-event':
            content.innerHTML = '<h2>Create Event</h2><p>Form to create an event will go here.</p>';
            break;
        case 'view-rsvp':
            content.innerHTML = '<h2>View RSVP</h2><p>RSVP details will go here.</p>';
            break;
        case 'edit-event':
            renderEditEventForm(content);
            break;
        case 'view-gallery':
            content.innerHTML = '<h2>View Gallery</h2><p>Gallery content will go here.</p>';
            break;
        default:
            content.innerHTML = 'Refreshed Content';
            break;
    }

    // highlight button on click
    const clickedButton = document.querySelector(`.sidebar button[data-section="${section}"]`);
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}