export default function Checkbox({ id, label, checked, onChange }) {
  return (
    <label className="checkbox-container">
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <span className="checkmark"></span> {label}
    </label>
  );
}
