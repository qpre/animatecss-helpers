import { apply_animation } from "../utilities/apply_animation";

export function slide_in_up({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__slideInUp', nodes, delay, duration, stagger });
}
