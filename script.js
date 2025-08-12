document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.course-list-wrapper').forEach(wrapper => {
        const courseList = wrapper.querySelector('#course-list');
        const nextBtn = wrapper.querySelector('.next-btn');
        const prevBtn = wrapper.querySelector('.prev-btn');

        const scrollAmount = 300;

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                courseList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                courseList.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            });
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const categories = document.querySelectorAll('.categories > div');

  categories.forEach(category => {
    category.addEventListener('click', () => {
      // Remove .active from all categories
      categories.forEach(cat => cat.classList.remove('active'));

      // Add .active to the clicked category
      category.classList.add('active');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.age-chart > div');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      // Remove .active from all categories
      cards.forEach(ca => ca.classList.remove('active'));

      // Add .active to the clicked category
      card.classList.add('active');
    });
  });
});

