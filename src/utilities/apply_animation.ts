export function apply_animation({ animation_class = '', nodes = [], duration = 1, delay = 0, stagger = 0 }: { animation_class: string, nodes: Array<HTMLElement>, duration: number, delay: number, stagger: number }) {
  for (const node of nodes) {
    node?.classList?.add('animate__animated');
    node?.style.setProperty('--animate-duration', `${duration}s`);
    node?.style.setProperty('--animate-delay', `${delay * (stagger > 0 ? nodes.indexOf(node) + 1 : 1)}s`);
    node?.classList?.add(animation_class);
  }
}