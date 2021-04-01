import { apply_animation } from "../utilities/apply_animation";

export function slide_in_down({
  delay,
  nodes,
  duration = 0.3,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__slideInDown', nodes, delay, duration, stagger });
}

export default slide_in_down;
