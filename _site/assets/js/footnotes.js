// Move footnotes from bottom of page to References section
document.addEventListener('DOMContentLoaded', function() {
  // Find the References heading
  const headings = Array.from(document.querySelectorAll('h2, h3'));
  const referencesHeading = headings.find(
    heading => {
      const text = heading.textContent.trim().toLowerCase();
      return text === 'references' || text === 'sources';
    }
  );
  
  // Find the footnotes div at the bottom
  const footnotesDiv = document.querySelector('.footnotes');
  
  if (referencesHeading && footnotesDiv) {
    // Move the footnotes div to right after the References heading
    // First, find where to insert it (after any empty paragraphs following the heading)
    let insertPoint = referencesHeading.nextElementSibling;
    
    // Skip empty paragraphs and any existing footnotes
    while (insertPoint && 
           ((insertPoint.tagName === 'P' && insertPoint.textContent.trim() === '') || 
            insertPoint.classList.contains('footnotes'))) {
      insertPoint = insertPoint.nextElementSibling;
    }
    
    // Move the footnotes div
    if (insertPoint) {
      // Insert before the next non-empty element
      insertPoint.parentNode.insertBefore(footnotesDiv, insertPoint);
    } else {
      // No content after heading, append to parent
      referencesHeading.parentNode.appendChild(footnotesDiv);
    }
    
    // Mark as moved and show it
    footnotesDiv.classList.add('moved-to-references');
    
    // Remove any "Footnotes" heading that kramdown might have added
    const footnotesHeading = footnotesDiv.previousElementSibling;
    if (footnotesHeading && 
        (footnotesHeading.tagName === 'H2' || footnotesHeading.tagName === 'H3') &&
        footnotesHeading.textContent.toLowerCase().includes('footnote')) {
      footnotesHeading.remove();
    }
  }
});

