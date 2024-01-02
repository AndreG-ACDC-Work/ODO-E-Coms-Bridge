function loadHeaderAndFooter() {
    fetch('HNF/Header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Header').innerHTML = data;
        });

    fetch('HNF/Footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('Footer').innerHTML = data;
        });
}
loadHeaderAndFooter();
