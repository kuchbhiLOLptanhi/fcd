AFRAME.registerComponent('keyboard', {
    init: function () {
      var counter = 0;
  
      document.addEventListener('keydown', function (event) {
        counter++;
  
        var diverEntity = document.querySelector('#diver');
  
        var newPosition = {
          x: counter * 0.1,
          y: 0,
          z: 0
        };
  
        diverEntity.setAttribute('position', newPosition);
  
        if (event.key === 'r' || event.key === 'R') {
          counter = 0;
          diverEntity.setAttribute('position', '0 0 0');
        }
      });
    }
  });
  