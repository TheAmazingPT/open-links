module.exports = function(rawLinks, rawMode) {
  var links = rawLinks.length ? rawLinks : [];
  var mode = rawMode || '_blank';

  links.forEach(function(link) {
    window.open(link, mode);
  });
};
