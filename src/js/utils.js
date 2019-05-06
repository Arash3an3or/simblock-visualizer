export default {
  // t ∈ [0, 1]
  getColor: t => {
    const f = theta => Math.sin(theta + t * Math.PI * 2) * 0.5 + 0.5;
    return {
      r: Math.floor(f((-1 * Math.PI * 2) / 3) * 256),
      g: Math.floor(f((0 * Math.PI * 2) / 3) * 256),
      b: Math.floor(f((1 * Math.PI * 2) / 3) * 256),
      a: 1
    };
  }
};
