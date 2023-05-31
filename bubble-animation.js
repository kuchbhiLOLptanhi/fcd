AFRAME.registerComponent('bubble-animation', {
    init: function () {
      var bubbleEntity = this.el;
  
      bubbleEntity.setAttribute('position', '0 0.5 0');
  
      var animationDuration = 1000;
      var animationDistance = 1;
  
      var animateBubble = function () {
        bubbleEntity.setAttribute('animation', {
          property: 'position',
          to: '0 ' + animationDistance + ' 0',
          dir: 'alternate',
          dur: animationDuration,
          easing: 'linear',
          loop: true
        });
      };
  
      animateBubble();
    }
  });
  