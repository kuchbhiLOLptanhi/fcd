AFRAME.registerComponent('scuba-diver', {
    init: function () {
      var diverEntity = this.el;
  
      diverEntity.setAttribute('position', '0 0 0');
      diverEntity.setAttribute('rotation', '0 0 0');
  
      document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowUp') {
          diverEntity.object3D.position.z -= 0.1;
        } else if (event.key === 'ArrowDown') {
          diverEntity.object3D.position.z += 0.1;
        } else if (event.key === 'ArrowLeft') {
          diverEntity.object3D.rotation.y += THREE.Math.degToRad(5);
        } else if (event.key === 'ArrowRight') {
          diverEntity.object3D.rotation.y -= THREE.Math.degToRad(5);
        }
      });
    }
  });
  