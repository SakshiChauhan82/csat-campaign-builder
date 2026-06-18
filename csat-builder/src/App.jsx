import { useState } from 'react'
import ContentPanel from './components/ContentPanel'
import StylingPanel from './components/StylingPanel'
import MobilePreview from './components/MobilePreview'
import './App.css'

const defaultContent = {
  initTitle: 'How are we doing?',
  initSubtitle: "We'd love to hear your thoughts.",
  ratingType: 'stars',
  options: ['Amazing', 'Good', 'Needs work'],
  showComment: true,
  submitText: 'Submit feedback',
  tyMedia: null,
  tyTitle: 'Thank you! 🎉',
  tySubtitle: 'Your feedback means the world to us.',
  tyButtonText: 'Done',
}

const defaultStyling = {
  bgColor: '#ffffff',
  titleColor: '#1a1a2e',
  subtitleColor: '#666680',
  buttonBgColor: '#6c63ff',
  buttonTextColor: '#ffffff',
  fontSize: 14,
  fontWeight: '500',
  borderRadius: 18,
  buttonWidth: 100,
  buttonHeight: 40,
  ratingSelectedColor: '#f5a623',
  ratingUnselectedColor: '#d0d0e0',
}

export default function App() {
  const [activeTab, setActiveTab] = useState('content')
  const [content, setContent] = useState(defaultContent)
  const [styling, setStyling] = useState(defaultStyling)
  const [previewPage, setPreviewPage] = useState('initial')

  const updateContent = (key, value) => setContent(prev => ({ ...prev, [key]: value }))
  const updateStyling = (key, value) => setStyling(prev => ({ ...prev, [key]: value }))

  return (
    <div className="app-layout">
      <header className="app-header">
        <div className="header-logo">
          <span className="logo-icon">◎</span>
          <span className="logo-text">CSAT Campaign Builder</span>
        </div>
        <span className="header-badge">Live Preview</span>
      </header>

      <div className="app-body">
        <aside className="sidebar">
          <div className="tab-bar">
            <button
              className={`tab-btn ${activeTab === 'content' ? 'active' : ''}`}
              onClick={() => setActiveTab('content')}
            >
              Content
            </button>
            <button
              className={`tab-btn ${activeTab === 'styling' ? 'active' : ''}`}
              onClick={() => setActiveTab('styling')}
            >
              Styling
            </button>
          </div>

          <div className="sidebar-body">
            {activeTab === 'content' ? (
              <ContentPanel content={content} updateContent={updateContent} />
            ) : (
              <StylingPanel styling={styling} updateStyling={updateStyling} />
            )}
          </div>
        </aside>

        <main className="preview-area">
          <div className="preview-tabs">
            {['initial', 'feedback', 'thankyou'].map(pg => (
              <button
                key={pg}
                className={`preview-tab ${previewPage === pg ? 'active' : ''}`}
                onClick={() => setPreviewPage(pg)}
              >
                {pg === 'initial' ? 'Initial' : pg === 'feedback' ? 'Feedback' : 'Thank You'}
              </button>
            ))}
          </div>

          <MobilePreview content={content} styling={styling} page={previewPage} />

          <p className="preview-hint">Changes reflect instantly · No save needed</p>
        </main>
      </div>
    </div>
  )
}
