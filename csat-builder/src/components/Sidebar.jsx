import { useState } from 'react'
import ContentPanel from './ContentPanel'
import StylingPanel from './StylingPanel'
import styles from './Sidebar.module.css'

export default function Sidebar({ content, styling, updateContent, updateStyling }) {
  const [activeTab, setActiveTab] = useState('content')

  return (
    <aside className={styles.sidebar}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'content' ? styles.active : ''}`}
          onClick={() => setActiveTab('content')}
        >
          Content
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'styling' ? styles.active : ''}`}
          onClick={() => setActiveTab('styling')}
        >
          Styling
        </button>
      </div>

      <div className={styles.body}>
        {activeTab === 'content' ? (
          <ContentPanel content={content} updateContent={updateContent} />
        ) : (
          <StylingPanel styling={styling} updateStyling={updateStyling} />
        )}
      </div>
    </aside>
  )
}
