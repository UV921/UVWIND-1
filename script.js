// ── THEME ────────────────────────────────────
function toggleTheme() {
  const html = document.documentElement
  html.setAttribute('data-theme',
    html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
  )
}

// ── FULL STYLE MAP ───────────────────────────
const styleMap = {

  // spacing
  'p-1': { prop: 'padding', val: '4px' },
  'p-2': { prop: 'padding', val: '8px' },
  'p-3': { prop: 'padding', val: '12px' },
  'p-4': { prop: 'padding', val: '16px' },
  'p-5': { prop: 'padding', val: '20px' },
  'p-6': { prop: 'padding', val: '24px' },
  'p-8': { prop: 'padding', val: '32px' },
  'p-10':{ prop: 'padding', val: '40px' },
  'p-12':{ prop: 'padding', val: '48px' },
  'm-1': { prop: 'margin', val: '4px' },
  'm-2': { prop: 'margin', val: '8px' },
  'm-4': { prop: 'margin', val: '16px' },
  'm-6': { prop: 'margin', val: '24px' },
  'm-8': { prop: 'margin', val: '32px' },

  // red
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

  // blue
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

  // green
  'bg-green-1':  { prop: 'backgroundColor', val: '#f0fdf4' },
  'bg-green-2':  { prop: 'backgroundColor', val: '#bbf7d0' },
  'bg-green-3':  { prop: 'backgroundColor', val: '#86efac' },
  'bg-green-4':  { prop: 'backgroundColor', val: '#4ade80' },
  'bg-green-5':  { prop: 'backgroundColor', val: '#22c55e' },
  'bg-green-6':  { prop: 'backgroundColor', val: '#16a34a' },
  'bg-green-7':  { prop: 'backgroundColor', val: '#15803d' },
  'bg-green-8':  { prop: 'backgroundColor', val: '#166534' },
  'bg-green-9':  { prop: 'backgroundColor', val: '#14532d' },
  'bg-green-10': { prop: 'backgroundColor', val: '#052e16' },

  // yellow
  'bg-yellow-1':  { prop: 'backgroundColor', val: '#fefce8' },
  'bg-yellow-2':  { prop: 'backgroundColor', val: '#fef9c3' },
  'bg-yellow-3':  { prop: 'backgroundColor', val: '#fef08a' },
  'bg-yellow-4':  { prop: 'backgroundColor', val: '#fde047' },
  'bg-yellow-5':  { prop: 'backgroundColor', val: '#eab308' },
  'bg-yellow-6':  { prop: 'backgroundColor', val: '#ca8a04' },
  'bg-yellow-7':  { prop: 'backgroundColor', val: '#a16207' },
  'bg-yellow-8':  { prop: 'backgroundColor', val: '#854d0e' },
  'bg-yellow-9':  { prop: 'backgroundColor', val: '#713f12' },
  'bg-yellow-10': { prop: 'backgroundColor', val: '#422006' },

  // orange
  'bg-orange-1':  { prop: 'backgroundColor', val: '#fff7ed' },
  'bg-orange-2':  { prop: 'backgroundColor', val: '#ffedd5' },
  'bg-orange-3':  { prop: 'backgroundColor', val: '#fed7aa' },
  'bg-orange-4':  { prop: 'backgroundColor', val: '#fdba74' },
  'bg-orange-5':  { prop: 'backgroundColor', val: '#f97316' },
  'bg-orange-6':  { prop: 'backgroundColor', val: '#ea580c' },
  'bg-orange-7':  { prop: 'backgroundColor', val: '#c2410c' },
  'bg-orange-8':  { prop: 'backgroundColor', val: '#9a3412' },
  'bg-orange-9':  { prop: 'backgroundColor', val: '#7c2d12' },
  'bg-orange-10': { prop: 'backgroundColor', val: '#431407' },

  // purple
  'bg-purple-1':  { prop: 'backgroundColor', val: '#faf5ff' },
  'bg-purple-2':  { prop: 'backgroundColor', val: '#e9d5ff' },
  'bg-purple-3':  { prop: 'backgroundColor', val: '#d8b4fe' },
  'bg-purple-4':  { prop: 'backgroundColor', val: '#c084fc' },
  'bg-purple-5':  { prop: 'backgroundColor', val: '#a855f7' },
  'bg-purple-6':  { prop: 'backgroundColor', val: '#9333ea' },
  'bg-purple-7':  { prop: 'backgroundColor', val: '#7e22ce' },
  'bg-purple-8':  { prop: 'backgroundColor', val: '#6b21a8' },
  'bg-purple-9':  { prop: 'backgroundColor', val: '#581c87' },
  'bg-purple-10': { prop: 'backgroundColor', val: '#3b0764' },

  // pink
  'bg-pink-1':  { prop: 'backgroundColor', val: '#fdf2f8' },
  'bg-pink-2':  { prop: 'backgroundColor', val: '#fce7f3' },
  'bg-pink-3':  { prop: 'backgroundColor', val: '#fbcfe8' },
  'bg-pink-4':  { prop: 'backgroundColor', val: '#f9a8d4' },
  'bg-pink-5':  { prop: 'backgroundColor', val: '#f472b6' },
  'bg-pink-6':  { prop: 'backgroundColor', val: '#ec4899' },
  'bg-pink-7':  { prop: 'backgroundColor', val: '#db2777' },
  'bg-pink-8':  { prop: 'backgroundColor', val: '#be185d' },
  'bg-pink-9':  { prop: 'backgroundColor', val: '#9d174d' },
  'bg-pink-10': { prop: 'backgroundColor', val: '#500724' },

  // gray
  'bg-gray-1':  { prop: 'backgroundColor', val: '#f9fafb' },
  'bg-gray-2':  { prop: 'backgroundColor', val: '#f3f4f6' },
  'bg-gray-3':  { prop: 'backgroundColor', val: '#e5e7eb' },
  'bg-gray-4':  { prop: 'backgroundColor', val: '#d1d5db' },
  'bg-gray-5':  { prop: 'backgroundColor', val: '#9ca3af' },
  'bg-gray-6':  { prop: 'backgroundColor', val: '#6b7280' },
  'bg-gray-7':  { prop: 'backgroundColor', val: '#4b5563' },
  'bg-gray-8':  { prop: 'backgroundColor', val: '#374151' },
  'bg-gray-9':  { prop: 'backgroundColor', val: '#1f2937' },
  'bg-gray-10': { prop: 'backgroundColor', val: '#111827' },

  // black scale
  'bg-black-1':  { prop: 'backgroundColor', val: '#0a0a0a' },
  'bg-black-2':  { prop: 'backgroundColor', val: '#111111' },
  'bg-black-3':  { prop: 'backgroundColor', val: '#1a1a1a' },
  'bg-black-4':  { prop: 'backgroundColor', val: '#222222' },
  'bg-black-5':  { prop: 'backgroundColor', val: '#2a2a2a' },
  'bg-black-6':  { prop: 'backgroundColor', val: '#333333' },
  'bg-black-7':  { prop: 'backgroundColor', val: '#3d3d3d' },
  'bg-black-8':  { prop: 'backgroundColor', val: '#4a4a4a' },
  'bg-black-9':  { prop: 'backgroundColor', val: '#555555' },
  'bg-black-10': { prop: 'backgroundColor', val: '#666666' },

  // white scale
  'bg-white-1':  { prop: 'backgroundColor', val: '#ffffff' },
  'bg-white-2':  { prop: 'backgroundColor', val: '#fafafa' },
  'bg-white-3':  { prop: 'backgroundColor', val: '#f5f5f5' },
  'bg-white-4':  { prop: 'backgroundColor', val: '#f0f0f0' },
  'bg-white-5':  { prop: 'backgroundColor', val: '#e8e8e8' },
  'bg-white-6':  { prop: 'backgroundColor', val: '#e0e0e0' },
  'bg-white-7':  { prop: 'backgroundColor', val: '#d4d4d4' },
  'bg-white-8':  { prop: 'backgroundColor', val: '#c8c8c8' },
  'bg-white-9':  { prop: 'backgroundColor', val: '#b0b0b0' },
  'bg-white-10': { prop: 'backgroundColor', val: '#a0a0a0' },

  // brown
  'bg-brown-1':  { prop: 'backgroundColor', val: '#fdf8f0' },
  'bg-brown-2':  { prop: 'backgroundColor', val: '#f5e6d3' },
  'bg-brown-3':  { prop: 'backgroundColor', val: '#e8c9a0' },
  'bg-brown-4':  { prop: 'backgroundColor', val: '#d4a574' },
  'bg-brown-5':  { prop: 'backgroundColor', val: '#b8864e' },
  'bg-brown-6':  { prop: 'backgroundColor', val: '#9a6b3c' },
  'bg-brown-7':  { prop: 'backgroundColor', val: '#7d5230' },
  'bg-brown-8':  { prop: 'backgroundColor', val: '#623d22' },
  'bg-brown-9':  { prop: 'backgroundColor', val: '#4a2c16' },
  'bg-brown-10': { prop: 'backgroundColor', val: '#2c1a0e' },

  // cream
  'bg-cream-1':  { prop: 'backgroundColor', val: '#fffef7' },
  'bg-cream-2':  { prop: 'backgroundColor', val: '#fffde8' },
  'bg-cream-3':  { prop: 'backgroundColor', val: '#fefbd4' },
  'bg-cream-4':  { prop: 'backgroundColor', val: '#fdf6c0' },
  'bg-cream-5':  { prop: 'backgroundColor', val: '#fcf0a8' },
  'bg-cream-6':  { prop: 'backgroundColor', val: '#f7e48a' },
  'bg-cream-7':  { prop: 'backgroundColor', val: '#f0d470' },
  'bg-cream-8':  { prop: 'backgroundColor', val: '#e8c055' },
  'bg-cream-9':  { prop: 'backgroundColor', val: '#d4a832' },
  'bg-cream-10': { prop: 'backgroundColor', val: '#b8900e' },

  // teal
  'bg-teal-1':  { prop: 'backgroundColor', val: '#f0fdfa' },
  'bg-teal-2':  { prop: 'backgroundColor', val: '#ccfbf1' },
  'bg-teal-3':  { prop: 'backgroundColor', val: '#99f6e4' },
  'bg-teal-4':  { prop: 'backgroundColor', val: '#5eead4' },
  'bg-teal-5':  { prop: 'backgroundColor', val: '#2dd4bf' },
  'bg-teal-6':  { prop: 'backgroundColor', val: '#14b8a6' },
  'bg-teal-7':  { prop: 'backgroundColor', val: '#0d9488' },
  'bg-teal-8':  { prop: 'backgroundColor', val: '#0f766e' },
  'bg-teal-9':  { prop: 'backgroundColor', val: '#115e59' },
  'bg-teal-10': { prop: 'backgroundColor', val: '#042f2e' },

  // indigo
  'bg-indigo-1':  { prop: 'backgroundColor', val: '#eef2ff' },
  'bg-indigo-2':  { prop: 'backgroundColor', val: '#e0e7ff' },
  'bg-indigo-3':  { prop: 'backgroundColor', val: '#c7d2fe' },
  'bg-indigo-4':  { prop: 'backgroundColor', val: '#a5b4fc' },
  'bg-indigo-5':  { prop: 'backgroundColor', val: '#818cf8' },
  'bg-indigo-6':  { prop: 'backgroundColor', val: '#6366f1' },
  'bg-indigo-7':  { prop: 'backgroundColor', val: '#4f46e5' },
  'bg-indigo-8':  { prop: 'backgroundColor', val: '#4338ca' },
  'bg-indigo-9':  { prop: 'backgroundColor', val: '#3730a3' },
  'bg-indigo-10': { prop: 'backgroundColor', val: '#1e1b4b' },

  // transparent
  'bg-transparent':  { prop: 'backgroundColor', val: 'transparent' },
  'bg-black-t10':    { prop: 'backgroundColor', val: 'rgba(0,0,0,0.1)' },
  'bg-black-t20':    { prop: 'backgroundColor', val: 'rgba(0,0,0,0.2)' },
  'bg-black-t30':    { prop: 'backgroundColor', val: 'rgba(0,0,0,0.3)' },
  'bg-black-t50':    { prop: 'backgroundColor', val: 'rgba(0,0,0,0.5)' },
  'bg-white-t10':    { prop: 'backgroundColor', val: 'rgba(255,255,255,0.1)' },
  'bg-white-t20':    { prop: 'backgroundColor', val: 'rgba(255,255,255,0.2)' },
  'bg-white-t30':    { prop: 'backgroundColor', val: 'rgba(255,255,255,0.3)' },
  'bg-white-t50':    { prop: 'backgroundColor', val: 'rgba(255,255,255,0.5)' },
  'bg-glass-white':  { prop: 'backgroundColor', val: 'rgba(255,255,255,0.15)' },
  'bg-glass-black':  { prop: 'backgroundColor', val: 'rgba(0,0,0,0.15)' },
  'bg-glass-chai':   { prop: 'backgroundColor', val: 'rgba(249,115,22,0.15)' },

  // chai brand
  'bg-chai':       { prop: 'backgroundColor', val: '#f97316' },
  'bg-chai-light': { prop: 'backgroundColor', val: '#fff7ed' },
  'bg-chai-dark':  { prop: 'backgroundColor', val: '#7c2d12' },

  // text colors
  'text-white':      { prop: 'color', val: '#ffffff' },
  'text-black':      { prop: 'color', val: '#000000' },
  'text-muted':      { prop: 'color', val: '#6b7280' },
  'text-chai':       { prop: 'color', val: '#f97316' },
  'text-red-5':      { prop: 'color', val: '#f43f5e' },
  'text-red-7':      { prop: 'color', val: '#be123c' },
  'text-blue-5':     { prop: 'color', val: '#3b82f6' },
  'text-blue-7':     { prop: 'color', val: '#1d4ed8' },
  'text-green-5':    { prop: 'color', val: '#22c55e' },
  'text-green-7':    { prop: 'color', val: '#15803d' },
  'text-yellow-5':   { prop: 'color', val: '#eab308' },
  'text-orange-5':   { prop: 'color', val: '#f97316' },
  'text-purple-5':   { prop: 'color', val: '#a855f7' },
  'text-pink-5':     { prop: 'color', val: '#f472b6' },
  'text-gray-1':     { prop: 'color', val: '#f9fafb' },
  'text-gray-3':     { prop: 'color', val: '#e5e7eb' },
  'text-gray-5':     { prop: 'color', val: '#9ca3af' },
  'text-gray-7':     { prop: 'color', val: '#4b5563' },
  'text-gray-9':     { prop: 'color', val: '#1f2937' },
  'text-gray-10':    { prop: 'color', val: '#111827' },

  // typography
  'font-bold':      { prop: 'fontWeight', val: '700' },
  'font-semibold':  { prop: 'fontWeight', val: '600' },
  'font-medium':    { prop: 'fontWeight', val: '500' },
  'font-normal':    { prop: 'fontWeight', val: '400' },
  'text-xs':        { prop: 'fontSize', val: '0.75rem' },
  'text-sm':        { prop: 'fontSize', val: '0.875rem' },
  'text-base':      { prop: 'fontSize', val: '1rem' },
  'text-lg':        { prop: 'fontSize', val: '1.125rem' },
  'text-xl':        { prop: 'fontSize', val: '1.25rem' },
  'text-2xl':       { prop: 'fontSize', val: '1.5rem' },
  'text-3xl':       { prop: 'fontSize', val: '1.875rem' },
  'text-4xl':       { prop: 'fontSize', val: '2.25rem' },
  'uppercase':      { prop: 'textTransform', val: 'uppercase' },
  'lowercase':      { prop: 'textTransform', val: 'lowercase' },
  'capitalize':     { prop: 'textTransform', val: 'capitalize' },
  'italic':         { prop: 'fontStyle', val: 'italic' },
  'underline':      { prop: 'textDecoration', val: 'underline' },
  'line-through':   { prop: 'textDecoration', val: 'line-through' },
  'text-center':    { prop: 'textAlign', val: 'center' },
  'text-left':      { prop: 'textAlign', val: 'left' },
  'text-right':     { prop: 'textAlign', val: 'right' },
  'tracking-wide':  { prop: 'letterSpacing', val: '0.05em' },
  'tracking-widest':{ prop: 'letterSpacing', val: '0.1em' },
  'leading-tight':  { prop: 'lineHeight', val: '1.25' },
  'leading-loose':  { prop: 'lineHeight', val: '2' },

  // border radius
  'rounded':      { prop: 'borderRadius', val: '4px' },
  'rounded-sm':   { prop: 'borderRadius', val: '2px' },
  'rounded-md':   { prop: 'borderRadius', val: '6px' },
  'rounded-lg':   { prop: 'borderRadius', val: '8px' },
  'rounded-xl':   { prop: 'borderRadius', val: '12px' },
  'rounded-2xl':  { prop: 'borderRadius', val: '16px' },
  'rounded-3xl':  { prop: 'borderRadius', val: '24px' },
  'rounded-full': { prop: 'borderRadius', val: '9999px' },

  // border
  'border':   { prop: 'border', val: '1px solid #d1d5db' },
  'border-2': { prop: 'border', val: '2px solid #d1d5db' },
  'border-4': { prop: 'border', val: '4px solid #d1d5db' },

  // display
  'flex':   { prop: 'display', val: 'flex' },
  'block':  { prop: 'display', val: 'block' },
  'hidden': { prop: 'display', val: 'none' },

  // shadow
  'shadow':    { prop: 'boxShadow', val: '0 1px 3px rgba(0,0,0,0.12)' },
  'shadow-md': { prop: 'boxShadow', val: '0 4px 6px rgba(0,0,0,0.15)' },
  'shadow-lg': { prop: 'boxShadow', val: '0 10px 40px rgba(0,0,0,0.3)' },
  'shadow-xl': { prop: 'boxShadow', val: '0 20px 60px rgba(0,0,0,0.4)' },

  // opacity
  'opacity-0':   { prop: 'opacity', val: '0' },
  'opacity-25':  { prop: 'opacity', val: '0.25' },
  'opacity-50':  { prop: 'opacity', val: '0.5' },
  'opacity-75':  { prop: 'opacity', val: '0.75' },
  'opacity-100': { prop: 'opacity', val: '1' },

  // width / height
  'w-full': { prop: 'width', val: '100%' },
  'w-auto': { prop: 'width', val: 'auto' },
  'w-1/2':  { prop: 'width', val: '50%' },
  'h-full': { prop: 'height', val: '100%' },
}

// multi-prop (glass)
const multiMap = {
  'bg-glass': {
    backdropFilter: 'blur(12px)',
    webkitBackdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(255,255,255,0.15)',
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: '12px',
  },
  'bg-glass-dark': {
    backdropFilter: 'blur(12px)',
    webkitBackdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(0,0,0,0.25)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
  },
  'bg-glass-lg': {
    backdropFilter: 'blur(24px)',
    webkitBackdropFilter: 'blur(24px)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: '16px',
  },
  'bg-glass-chai': {
    backdropFilter: 'blur(12px)',
    webkitBackdropFilter: 'blur(12px)',
    backgroundColor: 'rgba(249,115,22,0.15)',
    border: '1px solid rgba(249,115,22,0.3)',
    borderRadius: '12px',
  },
}

// ── COLOR GRID DATA ──────────────────────────
const colorGroups = [
  {
    name: 'Red', key: 'red',
    shades: [
      { n: 1, hex: '#fff1f2' }, { n: 2, hex: '#fecdd3' }, { n: 3, hex: '#fda4af' },
      { n: 4, hex: '#fb7185' }, { n: 5, hex: '#f43f5e' }, { n: 6, hex: '#e11d48' },
      { n: 7, hex: '#be123c' }, { n: 8, hex: '#9f1239' }, { n: 9, hex: '#881337' }, { n: 10, hex: '#4c0519' },
    ]
  },
  {
    name: 'Blue', key: 'blue',
    shades: [
      { n: 1, hex: '#eff6ff' }, { n: 2, hex: '#bfdbfe' }, { n: 3, hex: '#93c5fd' },
      { n: 4, hex: '#60a5fa' }, { n: 5, hex: '#3b82f6' }, { n: 6, hex: '#2563eb' },
      { n: 7, hex: '#1d4ed8' }, { n: 8, hex: '#1e40af' }, { n: 9, hex: '#1e3a8a' }, { n: 10, hex: '#172554' },
    ]
  },
  {
    name: 'Green', key: 'green',
    shades: [
      { n: 1, hex: '#f0fdf4' }, { n: 2, hex: '#bbf7d0' }, { n: 3, hex: '#86efac' },
      { n: 4, hex: '#4ade80' }, { n: 5, hex: '#22c55e' }, { n: 6, hex: '#16a34a' },
      { n: 7, hex: '#15803d' }, { n: 8, hex: '#166534' }, { n: 9, hex: '#14532d' }, { n: 10, hex: '#052e16' },
    ]
  },
  {
    name: 'Yellow', key: 'yellow',
    shades: [
      { n: 1, hex: '#fefce8' }, { n: 2, hex: '#fef9c3' }, { n: 3, hex: '#fef08a' },
      { n: 4, hex: '#fde047' }, { n: 5, hex: '#eab308' }, { n: 6, hex: '#ca8a04' },
      { n: 7, hex: '#a16207' }, { n: 8, hex: '#854d0e' }, { n: 9, hex: '#713f12' }, { n: 10, hex: '#422006' },
    ]
  },
  {
    name: 'Orange', key: 'orange',
    shades: [
      { n: 1, hex: '#fff7ed' }, { n: 2, hex: '#ffedd5' }, { n: 3, hex: '#fed7aa' },
      { n: 4, hex: '#fdba74' }, { n: 5, hex: '#f97316' }, { n: 6, hex: '#ea580c' },
      { n: 7, hex: '#c2410c' }, { n: 8, hex: '#9a3412' }, { n: 9, hex: '#7c2d12' }, { n: 10, hex: '#431407' },
    ]
  },
  {
    name: 'Purple', key: 'purple',
    shades: [
      { n: 1, hex: '#faf5ff' }, { n: 2, hex: '#e9d5ff' }, { n: 3, hex: '#d8b4fe' },
      { n: 4, hex: '#c084fc' }, { n: 5, hex: '#a855f7' }, { n: 6, hex: '#9333ea' },
      { n: 7, hex: '#7e22ce' }, { n: 8, hex: '#6b21a8' }, { n: 9, hex: '#581c87' }, { n: 10, hex: '#3b0764' },
    ]
  },
  {
    name: 'Pink', key: 'pink',
    shades: [
      { n: 1, hex: '#fdf2f8' }, { n: 2, hex: '#fce7f3' }, { n: 3, hex: '#fbcfe8' },
      { n: 4, hex: '#f9a8d4' }, { n: 5, hex: '#f472b6' }, { n: 6, hex: '#ec4899' },
      { n: 7, hex: '#db2777' }, { n: 8, hex: '#be185d' }, { n: 9, hex: '#9d174d' }, { n: 10, hex: '#500724' },
    ]
  },
  {
    name: 'Gray', key: 'gray',
    shades: [
      { n: 1, hex: '#f9fafb' }, { n: 2, hex: '#f3f4f6' }, { n: 3, hex: '#e5e7eb' },
      { n: 4, hex: '#d1d5db' }, { n: 5, hex: '#9ca3af' }, { n: 6, hex: '#6b7280' },
      { n: 7, hex: '#4b5563' }, { n: 8, hex: '#374151' }, { n: 9, hex: '#1f2937' }, { n: 10, hex: '#111827' },
    ]
  },
  {
    name: 'Teal', key: 'teal',
    shades: [
      { n: 1, hex: '#f0fdfa' }, { n: 2, hex: '#ccfbf1' }, { n: 3, hex: '#99f6e4' },
      { n: 4, hex: '#5eead4' }, { n: 5, hex: '#2dd4bf' }, { n: 6, hex: '#14b8a6' },
      { n: 7, hex: '#0d9488' }, { n: 8, hex: '#0f766e' }, { n: 9, hex: '#115e59' }, { n: 10, hex: '#042f2e' },
    ]
  },
  {
    name: 'Indigo', key: 'indigo',
    shades: [
      { n: 1, hex: '#eef2ff' }, { n: 2, hex: '#e0e7ff' }, { n: 3, hex: '#c7d2fe' },
      { n: 4, hex: '#a5b4fc' }, { n: 5, hex: '#818cf8' }, { n: 6, hex: '#6366f1' },
      { n: 7, hex: '#4f46e5' }, { n: 8, hex: '#4338ca' }, { n: 9, hex: '#3730a3' }, { n: 10, hex: '#1e1b4b' },
    ]
  },
  {
    name: 'Brown', key: 'brown',
    shades: [
      { n: 1, hex: '#fdf8f0' }, { n: 2, hex: '#f5e6d3' }, { n: 3, hex: '#e8c9a0' },
      { n: 4, hex: '#d4a574' }, { n: 5, hex: '#b8864e' }, { n: 6, hex: '#9a6b3c' },
      { n: 7, hex: '#7d5230' }, { n: 8, hex: '#623d22' }, { n: 9, hex: '#4a2c16' }, { n: 10, hex: '#2c1a0e' },
    ]
  },
  {
    name: 'Cream', key: 'cream',
    shades: [
      { n: 1, hex: '#fffef7' }, { n: 2, hex: '#fffde8' }, { n: 3, hex: '#fefbd4' },
      { n: 4, hex: '#fdf6c0' }, { n: 5, hex: '#fcf0a8' }, { n: 6, hex: '#f7e48a' },
      { n: 7, hex: '#f0d470' }, { n: 8, hex: '#e8c055' }, { n: 9, hex: '#d4a832' }, { n: 10, hex: '#b8900e' },
    ]
  },
  {
    name: 'Black', key: 'black',
    shades: [
      { n: 1, hex: '#0a0a0a' }, { n: 2, hex: '#111111' }, { n: 3, hex: '#1a1a1a' },
      { n: 4, hex: '#222222' }, { n: 5, hex: '#2a2a2a' }, { n: 6, hex: '#333333' },
      { n: 7, hex: '#3d3d3d' }, { n: 8, hex: '#4a4a4a' }, { n: 9, hex: '#555555' }, { n: 10, hex: '#666666' },
    ]
  },
]

// ── BUILD COLOR GRID ─────────────────────────
function buildColorGrid() {
  const grid = document.getElementById('color-grid')
  if (!grid) return

  colorGroups.forEach(group => {
    const row = document.createElement('div')
    row.className = 'cg-row'

    const label = document.createElement('div')
    label.className = 'cg-label'
    label.textContent = group.name
    row.appendChild(label)

    const swatches = document.createElement('div')
    swatches.className = 'cg-swatches'

    group.shades.forEach(shade => {
      const cls = `bg-${group.key}-${shade.n}`
      const swatch = document.createElement('div')
      swatch.className = 'cg-swatch'
      swatch.style.backgroundColor = shade.hex
      swatch.title = `${cls} — ${shade.hex}`

      // text color based on brightness
      const r = parseInt(shade.hex.slice(1,3), 16)
      const g = parseInt(shade.hex.slice(3,5), 16)
      const b = parseInt(shade.hex.slice(5,7), 16)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000
      const textColor = brightness > 140 ? '#000' : '#fff'

      swatch.innerHTML = `
        <span class="cg-num" style="color:${textColor}">${shade.n}</span>
        <span class="cg-hex" style="color:${textColor}">${shade.hex}</span>
        <span class="cg-cls" style="color:${textColor}">${cls}</span>
      `
      swatch.onclick = () => copyHex(shade.hex, swatch)
      swatches.appendChild(swatch)
    })

    row.appendChild(swatches)
    grid.appendChild(row)
  })
}

function copyHex(hex, el) {
  navigator.clipboard.writeText(hex).then(() => {
    const orig = el.querySelector('.cg-hex').textContent
    el.querySelector('.cg-hex').textContent = 'copied!'
    setTimeout(() => el.querySelector('.cg-hex').textContent = orig, 1000)
  })
}

// ── ANIMATED CODE EDITOR ─────────────────────
const sequences = [
  {
    classes: 'bg-red-5 p-4',
    css: '.bg-red-5 { background-color: #f43f5e }\n  .p-4 { padding: 16px }',
    style: { backgroundColor: '#f43f5e', padding: '16px', borderRadius: '6px', color: 'white' }
  },
  {
    classes: 'bg-blue-5 p-6 rounded-lg',
    css: '.bg-blue-5 { background-color: #3b82f6 }\n  .p-6 { padding: 24px }\n  .rounded-lg { border-radius: 8px }',
    style: { backgroundColor: '#3b82f6', padding: '24px', borderRadius: '8px', color: 'white' }
  },
  {
    classes: 'bg-glass p-4 rounded-xl',
    css: '.bg-glass { backdrop-filter: blur(12px);\n    background: rgba(255,255,255,0.15) }',
    style: { backdropFilter: 'blur(12px)', backgroundColor: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', padding: '16px', borderRadius: '12px', color: 'white' }
  },
  {
    classes: 'bg-orange-5 p-4 rounded-full font-bold',
    css: '.bg-orange-5 { background-color: #f97316 }\n  .rounded-full { border-radius: 9999px }',
    style: { backgroundColor: '#f97316', padding: '16px', borderRadius: '9999px', color: 'white', fontWeight: '700' }
  },
  {
    classes: 'bg-purple-5 p-6 rounded-2xl shadow-lg',
    css: '.bg-purple-5 { background-color: #a855f7 }\n  .shadow-lg { box-shadow: 0 10px 40px rgba(0,0,0,0.3) }',
    style: { backgroundColor: '#a855f7', padding: '24px', borderRadius: '16px', color: 'white', boxShadow: '0 10px 40px rgba(0,0,0,0.3)' }
  },
]

let seqIndex = 0, charIndex = 0, isDeleting = false

const typedEl  = document.getElementById('typed-classes')
const injectEl = document.getElementById('inject-prop')
const previewEl = document.getElementById('preview-box')

function typeClasses() {
  if (!typedEl) return
  const seq = sequences[seqIndex]
  const target = seq.classes

  if (!isDeleting && charIndex <= target.length) {
    typedEl.textContent = target.slice(0, charIndex++)
    if (charIndex > target.length) {
      injectEl.textContent = seq.css
      applyPreview(seq.style)
      setTimeout(() => { isDeleting = true; typeClasses() }, 2500)
      return
    }
    setTimeout(typeClasses, 80)
  } else if (isDeleting && charIndex >= 0) {
    typedEl.textContent = target.slice(0, charIndex--)
    if (charIndex < 0) {
      isDeleting = false; charIndex = 0
      seqIndex = (seqIndex + 1) % sequences.length
      injectEl.textContent = 'waiting...'
      resetPreview()
      setTimeout(typeClasses, 400)
      return
    }
    setTimeout(typeClasses, 30)
  }
}

function applyPreview(styles) {
  if (!previewEl) return
  previewEl.removeAttribute('style')
  Object.assign(previewEl.style, styles)
}

function resetPreview() {
  if (!previewEl) return
  previewEl.removeAttribute('style')
  previewEl.style.backgroundColor = '#1a1a1a'
  previewEl.style.padding = '6px 14px'
  previewEl.style.borderRadius = '6px'
  previewEl.style.color = 'white'
}

// ── PLAYGROUND ───────────────────────────────
function runPG() {
  const input = document.getElementById('pg-input').value.trim()
  const el = document.getElementById('pg-box')
  el.removeAttribute('style')
  el.style.padding = '1rem 2rem'
  el.style.borderRadius = '8px'
  el.style.background = '#111'
  el.style.color = 'white'
  el.style.fontFamily = 'monospace'
  el.style.fontWeight = '700'
  el.style.position = 'relative'
  el.style.zIndex = '2'
  el.style.transition = 'all 0.3s'
  el.style.textAlign = 'center'

  const classes = input.split(' ').filter(Boolean)
  const injected = []

  classes.forEach(cls => {
    if (styleMap[cls]) {
      el.style[styleMap[cls].prop] = styleMap[cls].val
      injected.push(`.${cls} { ${styleMap[cls].prop}: ${styleMap[cls].val} }`)
    }
    if (multiMap[cls]) {
      Object.assign(el.style, multiMap[cls])
      injected.push(`.${cls} { /* glass effect */ }`)
    }
  })

  const pgInj = document.getElementById('pg-injected')
  const dtCss = document.getElementById('dt-css')
  if (injected.length === 0) {
    pgInj.textContent = '// apply classes to see injection'
    dtCss.innerHTML = '<span class="dt-muted">// empty</span>'
  } else {
    pgInj.textContent = injected.join('\n')
    dtCss.textContent = injected[0]
  }
}

function chip(el) {
  const input = document.getElementById('pg-input')
  const cls = el.textContent.trim()
  if (!input.value.includes(cls)) {
    input.value = input.value.trim() ? input.value + ' ' + cls : cls
  }
  runPG()
}

// ── TABS ─────────────────────────────────────
function tab(name) {
  ;['cdn','npm'].forEach(t => {
    document.getElementById('b-' + t).classList.add('hidden')
    document.getElementById('t-' + t).classList.remove('active')
  })
  document.getElementById('b-' + name).classList.remove('hidden')
  document.getElementById('t-' + name).classList.add('active')
}

function copy(id) {
  navigator.clipboard.writeText(document.getElementById(id).innerText).then(() => {
    const btn = document.getElementById(id).previousElementSibling.querySelector('button')
    const orig = btn.textContent
    btn.textContent = 'Copied!'
    setTimeout(() => btn.textContent = orig, 1500)
  })
}

// ── INIT ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  buildColorGrid()
  setTimeout(typeClasses, 800)
})
