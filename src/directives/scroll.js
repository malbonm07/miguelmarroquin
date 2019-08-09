
const scroll = {};

const myScroll = (el, binding) => {
  let f = evt => {
    if (binding.value(evt, el)) {
      window.removeEventListener('scroll', f);
    }
  }
  window.addEventListener('scroll', f);
}

scroll.install = Vue => {
  Vue.directive('scroll', {
    bind(el, binding) {
      myScroll(el, binding);
    }
  });
};

export default scroll;