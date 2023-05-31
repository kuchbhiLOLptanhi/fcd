AFRAME.registerComponent('rotation', {
    init: function () {
      this.el.setAttribute('rotation', '0 0 0');
    },
    tick: function (time, timeDelta) {
      var rotation = this.el.getAttribute('rotation');
      rotation.y += timeDelta / 1000;
      this.el.setAttribute('rotation', rotation);
    }
  });
  