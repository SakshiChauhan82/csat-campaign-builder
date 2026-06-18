import { useState } from 'react'
import './MobilePreview.css'

export default function MobilePreview({ content, styling, page }) {
  const [selectedRating, setSelectedRating] = useState(0)
  const [selectedOpt, setSelectedOpt] = useState(null)

  const s = styling
  const popupStyle = {
    background: s.bgColor,
    borderRadius: `${s.borderRadius}px ${s.borderRadius}px 0 0`,
    padding: '20px 16px 16px',
    width: '100%',
  }
  const titleStyle = {
    fontSize: `${s.fontSize + 2}px`,
    fontWeight: s.fontWeight,
    color: s.titleColor,
    marginBottom: '4px',
    lineHeight: 1.3,
  }
  const subtitleStyle = {
    fontSize: `${s.fontSize - 1}px`,
    color: s.subtitleColor,
    marginBottom: '14px',
    lineHeight: 1.5,
    opacity: 0.85,
  }
  const buttonStyle = {
    width: `${s.buttonWidth}%`,
    height: `${s.buttonHeight}px`,
    background: s.buttonBgColor,
    color: s.buttonTextColor,
    borderRadius: `${Math.min(s.borderRadius, s.buttonHeight / 2)}px`,
    fontSize: `${s.fontSize - 1}px`,
    fontWeight: s.fontWeight,
    border: 'none',
    cursor: 'pointer',
    display: 'block',
  }

  const renderRating = () => {
    if (s.ratingType === 'numbers' || content.ratingType === 'numbers') {
      return (
        <div className="num-row">
          {[1, 2, 3, 4, 5].map(n => {
            const sel = n <= selectedRating
            return (
              <button
                key={n}
                className="num-btn"
                style={{
                  background: sel ? s.ratingSelectedColor : 'transparent',
                  color: sel ? '#fff' : s.titleColor,
                  borderColor: sel ? s.ratingSelectedColor : s.ratingUnselectedColor,
                }}
                onClick={() => setSelectedRating(n)}
              >
                {n}
              </button>
            )
          })}
        </div>
      )
    }
    return (
      <div className="star-row">
        {[1, 2, 3, 4, 5].map(n => (
          <button
            key={n}
            className="star-btn"
            style={{
              color: n <= selectedRating ? s.ratingSelectedColor : s.ratingUnselectedColor,
            }}
            onClick={() => setSelectedRating(n)}
          >
            {n <= selectedRating ? '★' : '☆'}
          </button>
        ))}
      </div>
    )
  }

  const renderPage = () => {
    if (page === 'initial') {
      return (
        <div style={popupStyle}>
          <p style={titleStyle}>{content.initTitle || 'How are we doing?'}</p>
          <p style={subtitleStyle}>{content.initSubtitle || "We'd love to hear your thoughts."}</p>
          <button style={buttonStyle}>{content.submitText || 'Leave feedback'}</button>
        </div>
      )
    }

    if (page === 'feedback') {
      return (
        <div style={popupStyle}>
          <p style={titleStyle}>Rate your experience</p>
          {renderRating()}
          {content.options.length > 0 && (
            <div className="opts-pills">
              {content.options.map((opt, i) => (
                <button
                  key={i}
                  className="opt-pill"
                  style={{
                    background: selectedOpt === i ? s.ratingSelectedColor : 'rgba(255,255,255,0.7)',
                    color: selectedOpt === i ? '#fff' : s.titleColor,
                    borderColor: selectedOpt === i ? s.ratingSelectedColor : 'rgba(0,0,0,0.15)',
                  }}
                  onClick={() => setSelectedOpt(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
          )}
          {content.showComment && (
            <textarea
              className="comment-box"
              placeholder="Tell us more..."
              readOnly
            />
          )}
          <button style={buttonStyle}>{content.submitText || 'Submit feedback'}</button>
        </div>
      )
    }

    if (page === 'thankyou') {
      return (
        <div style={{ ...popupStyle, textAlign: 'center' }}>
          {content.tyMedia ? (
            <img src={content.tyMedia} alt="" className="ty-media" />
          ) : (
            <div className="ty-placeholder">🎉</div>
          )}
          <p style={titleStyle}>{content.tyTitle || 'Thank you!'}</p>
          <p style={{ ...subtitleStyle, marginBottom: '14px' }}>
            {content.tySubtitle || 'Your feedback means the world to us.'}
          </p>
          <button style={buttonStyle}>{content.tyButtonText || 'Done'}</button>
        </div>
      )
    }
  }

  return (
    <div className="phone-frame">
      <div className="phone-notch" />
      <div className="phone-screen">
        <div className="phone-bg" />
        <div className="popup-wrapper">{renderPage()}</div>
      </div>
      <div className="phone-home-bar" />
    </div>
  )
}
