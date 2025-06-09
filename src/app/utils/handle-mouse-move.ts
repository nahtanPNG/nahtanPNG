export function handleMouseMove(
  e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ref: React.RefObject<HTMLDivElement>
) {
  const component = ref.current;
  if (!component) return;
  const rect = component.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  component.style.setProperty("--x", `${x}%`);
  component.style.setProperty("--y", `${y}%`);
}
