document.onkeydown = function (e) {
  if (e.keyCode == 123) {
    e.preventDefault();
    return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    e.preventDefault();
    return false;
  }
};
