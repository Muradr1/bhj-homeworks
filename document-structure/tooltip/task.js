const hasTooltip = document.querySelectorAll('.has-tooltip');

const divTooltip = document.createElement('div');
divTooltip.classList.add('tooltip');
hasTooltip[1].insertAdjacentElement('beforeBegin', divTooltip);


hasTooltip.forEach(tooltip => {
    tooltip.addEventListener('click', event => {
        event.preventDefault();
        divTooltip.classList.toggle('tooltip_active');
        divTooltip.innerText = tooltip.getAttribute('title')
    })
})