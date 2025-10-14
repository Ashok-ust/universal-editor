export default function decorate(block) {
    const quoteText = block.querySelector('[data-prop="quoteText"]');
    const author = block.querySelector('[data-prop="author"]');
  
    if (quoteText) {
      quoteText.classList.add('quote-text');
    }
    if (author) {
      author.classList.add('quote-author');
    }
  }
  