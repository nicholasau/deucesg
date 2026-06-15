// Replace all YOUR_GOOGLE_FORM_LINK_HERE values in index.html with your real Google Form URL.
// Replace duplicated Instagram review URLs in the Reviews section with your actual public posts.
// This file is intentionally light because orders are collected through Google Forms.
console.log('DEUCE SG static site loaded');

// Reprocess Instagram embeds after local navigation or edits, where supported.
window.addEventListener('load', () => {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process();
  }
});
