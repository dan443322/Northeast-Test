function toggleContent() {
    var moreContent = document.getElementById('read-more-text');
    var buttonText = document.getElementById('see-more-btn');

    if (moreContent.style.display === 'none') {
      moreContent.style.display = 'contents';
     
      buttonText.innerHTML = 'See Less';
    } else {
      moreContent.style.display = 'none';
      buttonText.innerHTML = 'See More';
    }
  }