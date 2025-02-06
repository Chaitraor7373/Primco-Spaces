function addPortfolioItem() {
    const portfolioList = document.getElementById('portfolio-list');
    const newItem = document.createElement('li');
    newItem.textContent = 'New Project';
    portfolioList.appendChild(newItem);
}
