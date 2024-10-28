document.addEventListener('DOMContentLoaded', () => {
    const modals = {
        normal: document.getElementById('normalModal'),
        large: document.getElementById('largeModal'),
        extraLarge: document.getElementById('extraLargeModal')
    };

    const openModalBtns = {
        normal: document.getElementById('openNormalModalBtn'),
        large: document.getElementById('openLargeModalBtn'),
        extraLarge: document.getElementById('openExtraLargeModalBtn')
    };

    const closeModalBtns = {
        normal: document.getElementById('closeNormalModalBtn'),
        large: document.getElementById('closeLargeModalBtn'),
        extraLarge: document.getElementById('closeExtraLargeModalBtn')
    };

    Object.keys(openModalBtns).forEach(size => {
        openModalBtns[size].addEventListener('click', () => {
            modals[size].style.display = 'flex'; // Use flex to center the modal
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });

        closeModalBtns[size].addEventListener('click', () => {
            modals[size].style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scrolling
        });

        window.addEventListener('click', (event) => {
            if (event.target === modals[size]) {
                modals[size].style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore background scrolling
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modals[size].style.display === 'flex') {
                modals[size].style.display = 'none';
                document.body.style.overflow = 'auto'; // Restore background scrolling
            }
        });

        // Add event listeners for OK and Cancel buttons
        const okBtn = modals[size].querySelector('.ok-btn');
        const cancelBtn = modals[size].querySelector('.cancel-btn');

        okBtn.addEventListener('click', () => {
            modals[size].style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scrolling
        });

        cancelBtn.addEventListener('click', () => {
            modals[size].style.display = 'none';
            document.body.style.overflow = 'auto'; // Restore background scrolling
        });
    });
});