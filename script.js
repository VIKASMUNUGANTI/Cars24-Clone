function showTab(tabId, btn) {

    // hide all content
    document.querySelectorAll('.tab-content').forEach(el => {
        el.classList.remove('active');
    });

    // remove active from all buttons
    document.querySelectorAll('.buttons button').forEach(el => {
        el.classList.remove('active');
    });

    // show selected content
    document.getElementById(tabId).classList.add('active');

    // activate clicked button
    btn.classList.add('active');
}