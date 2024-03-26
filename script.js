function nextCard(cardId) {
    // Hide all cards
    document.querySelectorAll('.card').forEach(function(card) {
        card.classList.remove('show');
    });
    // Show the next card
    document.getElementById(cardId).classList.add('show');
}