export function SelectBox({ label, placeholder, options, onChange }) {
  return (
    <div>
      <div className="text-sm font-medium text-left py-2">{label}</div>
      <select
        className="w-full px-2 py-1 border rounded border-slate-200"
        onChange={onChange}
      >
        <option value="" disabled selected hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
