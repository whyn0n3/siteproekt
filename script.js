// 1. Подсчет количества цитат
function updateCounter() {
    const photos = document.querySelectorAll('.photo');
    const countElement = document.getElementById('count');
    if (countElement) {
        countElement.textContent = photos.length;
    }
}

// 2. Работа лайков
function initLikes() {
    const likeButtons = document.querySelectorAll('.like-btn');
    const totalLikesDisp = document.getElementById('total-likes');
    let total = 0;

    likeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const likesCount = this.querySelector('.likes');
            let current = parseInt(likesCount.textContent);

            if (this.classList.contains('liked')) {
                current--;
                total--;
                this.classList.remove('liked');
            } else {
                current++;
                total++;
                this.classList.add('liked');
            }

            likesCount.textContent = current;
            totalLikesDisp.textContent = total;
        });
    });
}

// Запуск при загрузке
document.addEventListener('DOMContentLoaded', () => {
    updateCounter();
    initLikes();
});