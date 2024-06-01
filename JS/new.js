document.addEventListener("DOMContentLoaded", function() {
    const img = document.querySelector('.main img');

    img.addEventListener('mouseenter', function() {
        if (!this.classList.contains('shake-once')) {
            this.classList.add('shake-once'); // Add class to apply shake animation
            
            // Add green border
            this.style.borderColor = 'green';
            
            // Listen for animationend event to remove the class after one shake
            this.addEventListener('animationend', function() {
                this.classList.remove('shake-once');
            }, {once: true});
        }
    });

    img.addEventListener('mouseleave', function() {
        // Remove green border on mouse leave
        this.style.borderColor = 'transparent';
    });
});


