import './StylingPanel.css'

const ColorField = ({ label, value, onChange }) => (
  <div className="color-field">
    <label>{label}</label>
    <div className="color-row">
      <input type="color" value={value} onChange={e => onChange(e.target.value)} />
      <span className="color-val">{value}</span>
    </div>
  </div>
)

export default function StylingPanel({ styling, updateStyling }) {
  return (
    <div className="styling-panel">
      <div className="section-label">Colors</div>
      <div className="color-grid">
        <ColorField label="Background" value={styling.bgColor} onChange={v => updateStyling('bgColor', v)} />
        <ColorField label="Title" value={styling.titleColor} onChange={v => updateStyling('titleColor', v)} />
        <ColorField label="Subtitle" value={styling.subtitleColor} onChange={v => updateStyling('subtitleColor', v)} />
        <ColorField label="Button bg" value={styling.buttonBgColor} onChange={v => updateStyling('buttonBgColor', v)} />
        <ColorField label="Button text" value={styling.buttonTextColor} onChange={v => updateStyling('buttonTextColor', v)} />
        <ColorField label="Rating selected" value={styling.ratingSelectedColor} onChange={v => updateStyling('ratingSelectedColor', v)} />
        <ColorField label="Rating default" value={styling.ratingUnselectedColor} onChange={v => updateStyling('ratingUnselectedColor', v)} />
      </div>

      <div className="section-label">Typography</div>
      <div className="field">
        <label>Font size — <strong>{styling.fontSize}px</strong></label>
        <input
          type="range" min="10" max="20" step="1"
          value={styling.fontSize}
          onChange={e => updateStyling('fontSize', Number(e.target.value))}
        />
      </div>
      <div className="field">
        <label>Font weight</label>
        <select value={styling.fontWeight} onChange={e => updateStyling('fontWeight', e.target.value)}>
          <option value="400">Regular (400)</option>
          <option value="500">Medium (500)</option>
          <option value="600">Semibold (600)</option>
          <option value="700">Bold (700)</option>
        </select>
      </div>

      <div className="section-label">Shape</div>
      <div className="field">
        <label>Border radius — <strong>{styling.borderRadius}px</strong></label>
        <input
          type="range" min="0" max="32" step="1"
          value={styling.borderRadius}
          onChange={e => updateStyling('borderRadius', Number(e.target.value))}
        />
      </div>

      <div className="section-label">Button size</div>
      <div className="field-row">
        <div className="field">
          <label>Width %</label>
          <input
            type="number" min="40" max="100"
            value={styling.buttonWidth}
            onChange={e => updateStyling('buttonWidth', Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label>Height px</label>
          <input
            type="number" min="28" max="64"
            value={styling.buttonHeight}
            onChange={e => updateStyling('buttonHeight', Number(e.target.value))}
          />
        </div>
      </div>
    </div>
  )
}
