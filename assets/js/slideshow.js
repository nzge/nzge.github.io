class Slideshow {
  constructor(slidesData, targetId) {
    this.slidesData = slidesData;
    this.container = document.getElementById(targetId);
    if (!this.container || !Array.isArray(slidesData)) return;

    this.slideIndex = 1;
    this.render();
    this.attachEventListeners();
    this.showSlides(this.slideIndex);
  }

  render() {
    // Create slideshow container
    this.slideshowEl = document.createElement('div');
    this.slideshowEl.className = 'slideshow-container';

    // Create slides
    this.slides = this.slidesData.map((slide, index) => {
      const slideDiv = document.createElement('div');
      slideDiv.className = 'mySlides fade';

      // Title at top
      if (slide.title) {
        const titleEl = document.createElement('div');
        titleEl.className = 'slide-title';
        titleEl.textContent = slide.title;
        slideDiv.appendChild(titleEl);
      }

      const numberText = document.createElement('div');
      numberText.className = 'numbertext';
      numberText.textContent = `${index + 1} / ${this.slidesData.length}`;

      const img = document.createElement('img');
      img.src = slide.src;
      img.style.width = '100%';

      const caption = document.createElement('div');
      caption.className = 'text';
      caption.textContent = slide.caption;

      slideDiv.appendChild(numberText);
      slideDiv.appendChild(img);
      slideDiv.appendChild(caption);
      this.slideshowEl.appendChild(slideDiv);

      return slideDiv;
    });

    // Prev/Next buttons
    const prevBtn = document.createElement('a');
    prevBtn.className = 'prev';
    prevBtn.innerHTML = '&#10094;';
    prevBtn.addEventListener('click', () => this.changeSlide(-1));

    const nextBtn = document.createElement('a');
    nextBtn.className = 'next';
    nextBtn.innerHTML = '&#10095;';
    nextBtn.addEventListener('click', () => this.changeSlide(1));

    this.slideshowEl.appendChild(prevBtn);
    this.slideshowEl.appendChild(nextBtn);

    // Dot indicators
    this.dotWrapper = document.createElement('div');
    this.dotWrapper.className = 'dot-wrapper';
    this.dotWrapper.style.textAlign = 'center';

    this.dots = this.slidesData.map((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'dot';
      dot.addEventListener('click', () => this.setSlide(i + 1));
      this.dotWrapper.appendChild(dot);
      return dot;
    });

    this.container.appendChild(this.slideshowEl);
    this.container.appendChild(document.createElement('br'));
    this.container.appendChild(this.dotWrapper);
  }

  attachEventListeners() {}

  changeSlide(n) {
    this.showSlides(this.slideIndex + n);
  }

  setSlide(n) {
    this.showSlides(n);
  }

  showSlides(n) {
    if (n > this.slides.length) n = 1;
    if (n < 1) n = this.slides.length;

    this.slideIndex = n;

    this.slides.forEach((slide, i) => {
      slide.style.display = i === n - 1 ? 'block' : 'none';
    });

    this.dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === n - 1);
    });
  }
}
