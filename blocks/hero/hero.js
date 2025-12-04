import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  // Get all rows from the block
  const [imageRow, contentRow] = block.children;

  // Process the image
  if (imageRow) {
    const picture = imageRow.querySelector('picture');
    if (picture) {
      const img = picture.querySelector('img');
      if (img) {
        // Create optimized picture for the hero background
        const optimizedPic = createOptimizedPicture(
          img.src,
          img.alt || 'Hero Background',
          false,
          [{ width: '2000' }],
        );
        picture.replaceWith(optimizedPic);
      }
    }
    imageRow.classList.add('hero-image');
  }

  // Process the content
  if (contentRow) {
    contentRow.classList.add('hero-content');
    
    // Wrap heading and text in a container for better styling control
    const heading = contentRow.querySelector('h1, h2, h3, h4, h5, h6');
    const textElements = contentRow.querySelectorAll('p:not(.button-container)');
    
    if (heading || textElements.length > 0) {
      const textWrapper = document.createElement('div');
      textWrapper.classList.add('hero-text');
      
      if (heading) {
        textWrapper.appendChild(heading);
      }
      
      textElements.forEach((p) => {
        textWrapper.appendChild(p);
      });
      
      // Insert text wrapper before any button container
      const buttonContainer = contentRow.querySelector('.button-container');
      if (buttonContainer) {
        contentRow.insertBefore(textWrapper, buttonContainer);
      } else {
        contentRow.appendChild(textWrapper);
      }
    }
  }
}
