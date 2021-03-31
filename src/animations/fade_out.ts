export function fade_out({ timeline, delay, nodes, duration }) {
  nodes.forEach((el) => {
    el?.classList?.add('animate__faster');
    el?.classList?.add('animate__animated');
    el?.classList?.remove('animate__fadeIn');
    el?.classList?.add('animate__fadeOut');
  });
}

export default fade_out;
