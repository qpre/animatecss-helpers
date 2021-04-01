import { apply_animation } from "../utilities/apply_animation";

export function fade_in_down({ delay, nodes, duration = 0.3, stagger = 0 }) {
  return apply_animation({ animation_class: 'animate__fadeInDown', nodes, delay, duration, stagger });
}