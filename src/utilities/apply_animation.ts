const sleep = (duration: number) => new Promise(r => setTimeout(r, duration));

export function apply_animation({ animation_class = '', nodes = [], duration = 1, delay = 0, stagger = 0 }: { animation_class: string, nodes: Array<HTMLElement>, duration: number, delay: number, stagger: number }) {
  const apply_async = async function() {
    if (delay) {
      await sleep(delay);
    }

    for (const node of nodes) {
        node?.classList?.add('animate__animated');
        node?.style.setProperty('--animate-duration', `${duration}s`);
        node?.classList?.add(animation_class);

        if (stagger) {
          await sleep(stagger);
        }
    }
  }
  
  return apply_async();
}