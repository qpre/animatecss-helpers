export function prepare_nodes_for_transition(nodes: [HTMLElement]) {
  nodes.forEach((element) => {
    element.className = element?.className
      ?.split(' ')
      .filter((classname) => !classname?.startsWith('animate__'))
      .join(' ');
  });

  return nodes;
}