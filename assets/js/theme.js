function toggleTheme() {
    const isDarkTheme = localStorage.getItem('dark-theme') === 'true';
    localStorage.setItem('dark-theme', !isDarkTheme);

    const body = document.body;
    body.classList.toggle('dark-theme', !isDarkTheme)
}
