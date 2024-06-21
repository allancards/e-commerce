document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.slider .list');
    const items = Array.from(list.children);

    items.forEach(item => {
        const clone = item.cloneNode(true);
        list.appendChild(clone);
    });
});
