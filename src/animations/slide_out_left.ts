import { apply_animation } from "../utilities/apply_animation";

export function slide_out_left({
  delay,
  nodes,
  duration = 0.3,
  ease,
  stagger = 0,
}) {
  return apply_animation({ animation_class: 'animate__slideOutLeft', nodes, delay, duration, stagger });
}
