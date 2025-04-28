// Khi trang web đã tải xong
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('a[target="_blank"]');
  links.forEach(function(link) {
    let rel = link.getAttribute('rel') || "";
    if (!rel.includes('noopener')) {
      rel += ' noopener';
    }
    if (!rel.includes('noreferrer')) {
      rel += ' noreferrer';
    }
    link.setAttribute('rel', rel.trim());
  });
});
