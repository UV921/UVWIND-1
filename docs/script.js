// ══════════════════════════════════════
// UVWIND — Landing Page JS
//
// This file handles:
// 1. Theme toggle (dark/light)
// 2. Hero typing animation
// 3. Playground — input + chips + preview
// 4. Docs — tab switching + copy buttons
//
// styleMap below matches main.js exactly
// so playground shows real library behavior
// ══════════════════════════════════════


// ── styleMap — matches your actual main.js ──────────────────────
// Only single-prop classes go here
// Multi-prop classes (glass) handled separately in multiMap below

const styleMap = {
  // padding
  'p1':  { prop: 'padding', val: '4px' },
  'p2':  { prop: 'padding', val: '8px' },
  'p3':  { prop: 'padding', val: '12px' },
  'p4':  { prop: 'padding', val: '20px' },
  'p5':  { prop: 'padding', val: '24px' },
  'p6':  { prop: 'padding', val: '28px' },
  'p7':  { prop: 'padding', val: '32px' },
  'p8':  { prop: 'padding', val: '36px' },

  // margin
  'm1':  { prop: 'margin', val: '4px' },
  'm2':  { prop: 'margin', val: '8px' },
  'm4':  { prop: 'margin', val: '20px' },
  'm6':  { prop: 'margin', val: '28px' },

  // background colors — red
  'bg-red-1':  { prop: 'backgroundColor', val: '#fff1f2' },
  'bg-red-2':  { prop: 'backgroundColor', val: '#fecdd3' },
  'bg-red-3':  { prop: 'backgroundColor', val: '#fda4af' },
  'bg-red-4':  { prop: 'backgroundColor', val: '#fb7185' },
  'bg-red-5':  { prop: 'backgroundColor', val: '#f43f5e' },
  'bg-red-6':  { prop: 'backgroundColor', val: '#e11d48' },
  'bg-red-7':  { prop: 'backgroundColor', val: '#be123c' },
  'bg-red-8':  { prop: 'backgroundColor', val: '#9f1239' },
  'bg-red-9':  { prop: 'backgroundColor', val: '#881337' },
  'bg-red-10': { prop: 'backgroundColor', val: '#4c0519' },

  // background colors — blue
  'bg-blue-1':  { prop: 'backgroundColor', val: '#eff6ff' },
  'bg-blue-2':  { prop: 'backgroundColor', val: '#bfdbfe' },
  'bg-blue-3':  { prop: 'backgroundColor', val: '#93c5fd' },
  'bg-blue-4':  { prop: 'backgroundColor', val: '#60a5fa' },
  'bg-blue-5':  { prop: 'backgroundColor', val: '#3b82f6' },
  'bg-blue-6':  { prop: 'backgroundColor', val: '#2563eb' },
  'bg-blue-7':  { prop: 'backgroundColor', val: '#1d4ed8' },
  'bg-blue-8':  { prop: 'backgroundColor', val: '#1e40af' },
  'bg-blue-9':  { prop: 'backgroundColor', val: '#1e3a8a' },
  'bg-blue-10': { prop: 'backgroundColor', val: '#172554' },

  // background colors — green
  'bg-green-1':  { prop: 'backgroundColor', val: '#f0fdf4' },
  'bg-green-5':  { prop: 'backgroundColor', val: '#22c55e' },
  'bg-green-10': { prop: 'backgroundColor', val: '#052e16' },

  // background colors — orange
  'bg-orange-1':  { prop: 'backgroundColor', val: '#fff7ed' },
  'bg-orange-3':  { prop: 'backgroundColor', val: '#fed7aa' },
  'bg-orange-5':  { prop: 'backgroundColor', val: '#fb923c' },
  'bg-orange-6':  { prop: 'backgroundColor', val: '#f97316' },
  'bg-orange-8':  { prop: 'backgroundColor', val: '#c2410c' },
  'bg-orange-10': { prop: 'backgroundColor', val: '#431407' },

  // background colors — purple
  'bg-purple-1':  { prop: 'backgroundColor', val: '#faf5ff' },
  'bg-purple-5':  { prop: 'backgroundColor', val: '#a855f7' },
  'bg-purple-10': { prop: 'backgroundColor', val: '#3b0764' },

  // background colors — teal
  'bg-teal-5':  { prop: 'backgroundColor', val: '#2dd4bf' },

  // background colors — pink
  'bg-pink-5':  { prop: 'backgroundColor', val: '#f472b6' },

  // background colors — gray
  'bg-gray-1':  { prop: 'backgroundColor', val: '#f9fafb' },
  'bg-gray-5':  { prop: 'backgroundColor', val: '#9ca3af' },
  'bg-gray-10': { prop: 'backgroundColor', val: '#111827' },

  // background colors — black scale (great for dark UIs)
  'bg-black-1':  { prop: 'backgroundColor', val: '#0a0a0a' },
  'bg-black-2':  { prop: 'backgroundColor', val: '#111111' },
  'bg-black-5':  { prop: 'backgroundColor', val: '#2a2a2a' },
  'bg-black-10': { prop: 'backgroundColor', val: '#666666' },

  // border radius
  'b-sm':     { prop: 'borderRadius', val: '4px' },
  'b-md':     { prop: 'borderRadius', val: '8px' },
  'b-lg':     { prop: 'borderRadius', val: '16px' },
  'b-xl':     { prop: 'borderRadius', val: '24px' },
  'b-2xl':    { prop: 'borderRadius', val: '32px' },
  'b-circle': { prop: 'borderRadius', val: '50%' },

  // border width
  'b-1': { prop: 'border', val: '1px solid black' },
  'b-2': { prop: 'border', val: '2px solid black' },
  'b-4': { prop: 'border', val: '4px solid black' },

  // text color
  't-red-5':    { prop: 'color', val: '#f43f5e' },
  't-blue-5':   { prop: 'color', val: '#3b82f6' },
  't-green-5':  { prop: 'color', val: '#22c55e' },
  't-orange-5': { prop: 'color', val: '#fb923c' },
  't-purple-5': { prop: 'color', val: '#a855f7' },
  't-white':    { prop: 'color', val: '#ffffff' },
  't-black':    { prop: 'color', val: '#000000' },
  't-muted':    { prop: 'color', val: '#6b7280' },
  't-chai':     { prop: 'color', val: '#f97316' },

  // text align
  't-center':  { prop: 'textAlign', val: 'center' },
  't-left':    { prop: 'textAlign', val: 'left' },
  't-right':   { prop: 'textAlign', val: 'right' },

  // text decoration
  't-underline': { prop: 'textDecoration', val: 'underline' },

  // flexbox
  'flx':       { prop: 'display', val: 'flex' },
  'j-center':  { prop: 'justifyContent', val: 'center' },
  'j-between': { prop: 'justifyContent', val: 'space-between' },
  'a-center':  { prop: 'alignItems', val: 'center' },
  'wrap':      { prop: 'flexWrap', val: 'wrap' },
}

// multi-prop classes — glass effect needs multiple properties at once
const multiMap = {
  'bg-glass': {
    backdropFilter:        'blur(12px)',
    webkitBackdropFilter:  'blur(12px)',
    backgroundColor:       'rgba(255, 255, 255, 0.15)',
    border:                '1px solid rgba(255, 255, 255, 0.25)',
    borderRadius:          '12px',
  },
  'bg-glass-dark': {
    backdropFilter:        'blur(12px)',
    webkitBackdropFilter:  'blur(12px)',
    backgroundColor:       'rgba(0, 0, 0, 0.25)',
    border:                '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius:          '12px',
  },
  'bg-glass-chai': {
    backdropFilter:        'blur(12px)',
    webkitBackdropFilter:  'blur(12px)',
    backgroundColor:       'rgba(249, 115, 22, 0.15)',
    border:                '1px solid rgba(249, 115, 22, 0.3)',
    borderRadius:          '12px',
  },
  'bg-glass-lg': {
    backdropFilter:        'blur(24px)',
    webkitBackdropFilter:  'blur(24px)',
    backgroundColor:       'rgba(255, 255, 255, 0.1)',
    border:                '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius:          '16px',
  },
}


// ══════════════════════════════════════
// 1. THEME TOGGLE
// ══════════════════════════════════════

const themeBtn = document.getElementById('theme-btn')

themeBtn.addEventListener('click', () => {
  const html = document.documentElement
  const current = html.getAttribute('data-theme')
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark')
})


// ══════════════════════════════════════
// 2. HERO TYPING ANIMATION
// types class names into the editor
// then shows what gets injected
// ══════════════════════════════════════

// sequences to cycle through
const sequences = [
  {
    classes: 'bg-red-5 p4',
    injected: '.bg-red-5 { background-color: #f43f5e }\n  .p4 { padding: 20px }',
    styles: { backgroundColor: '#f43f5e', padding: '20px', color: 'white', borderRadius: '6px' }
  },
  {
    classes: 'bg-blue-5 p6 b-lg',
    injected: '.bg-blue-5 { background-color: #3b82f6 }\n  .p6 { padding: 28px }\n  .b-lg { border-radius: 16px }',
    styles: { backgroundColor: '#3b82f6', padding: '28px', borderRadius: '16px', color: 'white' }
  },
  {
    classes: 'bg-glass p4 b-xl',
    injected: '.bg-glass { backdrop-filter: blur(12px);\n    background: rgba(255,255,255,0.15);\n    border: 1px solid rgba(255,255,255,0.25) }',
    styles: { backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', padding: '20px', borderRadius: '24px', color: 'white' }
  },
  {
    classes: 'bg-orange-6 p4 b-circle t-white',
    injected: '.bg-orange-6 { background-color: #f97316 }\n  .p4 { padding: 20px }\n  .b-circle { border-radius: 50% }\n  .t-white { color: #ffffff }',
    styles: { backgroundColor: '#f97316', padding: '20px', borderRadius: '50%', color: 'white' }
  },
]

let seqIndex  = 0
let charIndex = 0
let isDeleting = false

const typedEl    = document.getElementById('typed-text')
const injectedEl = document.getElementById('injected-text')
const previewEl  = document.getElementById('preview-el')

function runTyping() {
  const seq    = sequences[seqIndex]
  const target = seq.classes

  if (!isDeleting && charIndex <= target.length) {
    // typing forward
    typedEl.textContent = target.slice(0, charIndex)
    charIndex++

    if (charIndex > target.length) {
      // finished typing — show injection result
      injectedEl.textContent = seq.injected
      applyHeroPreview(seq.styles)
      setTimeout(() => { isDeleting = true; runTyping() }, 2500)
      return
    }
    setTimeout(runTyping, 75)

  } else if (isDeleting && charIndex >= 0) {
    // deleting
    typedEl.textContent = target.slice(0, charIndex)
    charIndex--

    if (charIndex < 0) {
      // finished deleting — move to next sequence
      isDeleting = false
      charIndex  = 0
      seqIndex   = (seqIndex + 1) % sequences.length
      injectedEl.textContent = 'waiting...'
      resetHeroPreview()
      setTimeout(runTyping, 400)
      return
    }
    setTimeout(runTyping, 25)
  }
}

function applyHeroPreview(styles) {
  previewEl.removeAttribute('style')
  Object.assign(previewEl.style, styles)
  previewEl.style.transition = 'all 0.4s ease'
}

function resetHeroPreview() {
  previewEl.removeAttribute('style')
  previewEl.style.backgroundColor = 'var(--bg2)'
  previewEl.style.color = 'var(--text)'
  previewEl.style.padding = '6px 14px'
  previewEl.style.borderRadius = '6px'
}

// start typing after page loads
setTimeout(runTyping, 800)


// ══════════════════════════════════════
// 3. PLAYGROUND
// handles input, chips, preview box
// and the devtools simulation panel
// ══════════════════════════════════════

const pgInput  = document.getElementById('pg-input')
const pgBox    = document.getElementById('pg-box')
const pgOutput = document.getElementById('pg-output')
const dtContent = document.getElementById('dt-content')

// run playground when user types
pgInput.addEventListener('input', runPlayground)

// also run on enter key
pgInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') runPlayground()
})

function runPlayground() {
  const input   = pgInput.value.trim()
  const classes = input.split(' ').filter(Boolean)

  // reset box styles
  pgBox.removeAttribute('style')
  pgBox.style.padding      = '1rem 2rem'
  pgBox.style.borderRadius = '8px'
  pgBox.style.background   = '#111'
  pgBox.style.color        = 'white'
  pgBox.style.fontFamily   = 'monospace'
  pgBox.style.fontWeight   = '700'
  pgBox.style.textAlign    = 'center'
  pgBox.style.position     = 'relative'
  pgBox.style.zIndex       = '2'
  pgBox.style.transition   = 'all 0.3s ease'

  const injectedLines = []

  classes.forEach(cls => {
    // single prop class
    if (styleMap[cls]) {
      pgBox.style[styleMap[cls].prop] = styleMap[cls].val
      injectedLines.push(`.${cls} { ${styleMap[cls].prop}: ${styleMap[cls].val} }`)
    }

    // multi prop class (glass)
    if (multiMap[cls]) {
      Object.assign(pgBox.style, multiMap[cls])
      injectedLines.push(`.${cls} { /* glass effect — multiple properties */ }`)
    }
  })

  // update proof panel
  if (injectedLines.length === 0) {
    pgOutput.textContent = '// type a class above'
    dtContent.innerHTML  = '<span class="dt-muted">// empty</span>'
  } else {
    pgOutput.textContent = injectedLines.join('\n')
    dtContent.textContent = injectedLines[0]
  }
}

// chip click — adds class to input and runs playground
document.querySelectorAll('.chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const cls     = chip.getAttribute('data-class')
    const current = pgInput.value.trim()

    // only add if not already in input
    if (!current.includes(cls)) {
      pgInput.value = current ? current + ' ' + cls : cls
    }

    runPlayground()
  })
})


// ══════════════════════════════════════
// 4. DOCS — TAB SWITCHING + COPY
// ══════════════════════════════════════

// tab switching
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    const name = tab.getAttribute('data-tab')

    // remove active from all tabs
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'))

    // hide all code blocks
    document.querySelectorAll('.code-block').forEach(b => b.classList.add('hidden'))

    // activate clicked tab and show its block
    tab.classList.add('active')
    document.getElementById('block-' + name).classList.remove('hidden')
  })
})

// copy buttons
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const text = document.getElementById(btn.getAttribute('data-target')).innerText
    navigator.clipboard.writeText(text).then(() => {
      const original = btn.textContent
      btn.textContent = 'Copied!'
      setTimeout(() => { btn.textContent = original }, 1500)
    })
  })
})

// swatch click to copy
document.querySelectorAll('.swatch').forEach(swatch => {
  swatch.addEventListener('click', () => {
    const cls = swatch.getAttribute('title')
    navigator.clipboard.writeText(cls).then(() => {
      const toast = document.createElement('div')
      toast.textContent = `"${cls}" copied!`
      toast.style.cssText = `
        position: fixed; bottom: 2rem; right: 2rem;
        background: #f97316; color: #000;
        font-family: monospace; font-size: 0.75rem; font-weight: 700;
        padding: 0.6rem 1.2rem; border-radius: 8px;
        opacity: 0; transform: translateY(10px);
        transition: all 0.2s; z-index: 999;
      `
      document.body.appendChild(toast)
      setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translateY(0)' }, 10)
      setTimeout(() => {
        toast.style.opacity = '0'
        setTimeout(() => toast.remove(), 200)
      }, 1500)
    })
  })
})