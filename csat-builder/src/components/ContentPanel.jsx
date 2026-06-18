import { useRef } from 'react'
import './ContentPanel.css'

export default function ContentPanel({ content, updateContent }) {
  const fileRef = useRef()

  const handleUpload = (e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (ev) => updateContent('tyMedia', ev.target.result)
    reader.readAsDataURL(file)
  }

  const addOption = () => {
    updateContent('options', [...content.options, `Option ${content.options.length + 1}`])
  }

  const removeOption = (i) => {
    updateContent('options', content.options.filter((_, idx) => idx !== i))
  }

  const updateOption = (i, val) => {
    const next = [...content.options]
    next[i] = val
    updateContent('options', next)
  }

  return (
    <div className="content-panel">
      <div className="section-label">Initial feedback</div>

      <div className="field">
        <label>Title</label>
        <input
          type="text"
          value={content.initTitle}
          onChange={e => updateContent('initTitle', e.target.value)}
          placeholder="How are we doing?"
        />
      </div>
      <div className="field">
        <label>Subtitle</label>
        <input
          type="text"
          value={content.initSubtitle}
          onChange={e => updateContent('initSubtitle', e.target.value)}
          placeholder="We'd love to hear your thoughts."
        />
      </div>

      <div className="section-label">Feedback page</div>

      <div className="field">
        <label>Rating type</label>
        <div className="rating-type">
          <button
            className={content.ratingType === 'stars' ? 'active' : ''}
            onClick={() => updateContent('ratingType', 'stars')}
          >
            ★ Stars
          </button>
          <button
            className={content.ratingType === 'numbers' ? 'active' : ''}
            onClick={() => updateContent('ratingType', 'numbers')}
          >
            1–5 Numbers
          </button>
        </div>
      </div>

      <div className="field">
        <label>Dynamic options</label>
        <div className="opts-list">
          {content.options.map((opt, i) => (
            <div className="opt-row" key={i}>
              <input
                type="text"
                value={opt}
                onChange={e => updateOption(i, e.target.value)}
              />
              <button className="opt-del" onClick={() => removeOption(i)} aria-label="Remove option">×</button>
            </div>
          ))}
        </div>
        <button className="add-opt-btn" onClick={addOption}>+ Add option</button>
      </div>

      <div className="toggle-row">
        <span>Additional comments</span>
        <label className="toggle">
          <input
            type="checkbox"
            checked={content.showComment}
            onChange={e => updateContent('showComment', e.target.checked)}
          />
          <span className="slider" />
        </label>
      </div>

      <div className="field" style={{ marginTop: '10px' }}>
        <label>Submit button text</label>
        <input
          type="text"
          value={content.submitText}
          onChange={e => updateContent('submitText', e.target.value)}
          placeholder="Submit feedback"
        />
      </div>

      <div className="section-label">Thank you page</div>

      <div className="upload-area" onClick={() => fileRef.current.click()}>
        {content.tyMedia ? (
          <img src={content.tyMedia} alt="Thank you" className="upload-preview" />
        ) : (
          <>
            <span className="upload-icon">⬆</span>
            <span className="upload-text">Upload image or GIF</span>
            <span className="upload-hint">PNG, JPG, JPEG, GIF</span>
          </>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*,.json"
          style={{ display: 'none' }}
          onChange={handleUpload}
        />
      </div>
      {content.tyMedia && (
        <button className="remove-media" onClick={() => updateContent('tyMedia', null)}>
          Remove image
        </button>
      )}

      <div className="field">
        <label>Title</label>
        <input
          type="text"
          value={content.tyTitle}
          onChange={e => updateContent('tyTitle', e.target.value)}
          placeholder="Thank you!"
        />
      </div>
      <div className="field">
        <label>Subtitle</label>
        <input
          type="text"
          value={content.tySubtitle}
          onChange={e => updateContent('tySubtitle', e.target.value)}
          placeholder="Your feedback means the world."
        />
      </div>
      <div className="field">
        <label>Button text</label>
        <input
          type="text"
          value={content.tyButtonText}
          onChange={e => updateContent('tyButtonText', e.target.value)}
          placeholder="Done"
        />
      </div>
    </div>
  )
}
