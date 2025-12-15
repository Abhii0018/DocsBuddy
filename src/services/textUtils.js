// Small text normalization utilities used for display only
// - fixes common misspellings
// - normalizes casing to Title Case for readability

function titleCase(str) {
  return str
    .split(/\s+/)
    .map((w) => (w.length > 0 ? w[0].toUpperCase() + w.slice(1).toLowerCase() : w))
    .join(' ')
}

export function normalizeSubject(input) {
  if (!input) return ''
  let s = String(input).trim()
  if (s.length === 0) return ''

  // common typos map (lowercase keys)
  const corrections = {
    'feveer': 'fever',
    'feaver': 'fever',
    'tooth pain': 'tooth pain',
    'toothpain': 'tooth pain',
    'toothache': 'toothache',
    'tooth ache': 'toothache',
    'head ache': 'headache',
    'head-ache': 'headache',
    'headeche': 'headache',
    'diarhea': 'diarrhea',
    'diahrrea': 'diarrhea',
    'stomach ache': 'stomach ache',
    'stomachache': 'stomach ache',
  }

  // normalize spacing and lower for matching
  let lower = s.toLowerCase()

  // replace punctuation that commonly appears
  lower = lower.replace(/[\u2018\u2019\u201c\u201d]/g, "'")
  lower = lower.replace(/[\u2013\u2014]/g, '-')

  // apply corrections for exact matches and common phrases
  for (const [wrong, right] of Object.entries(corrections)) {
    const re = new RegExp('\\b' + wrong.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&') + '\\b', 'gi')
    lower = lower.replace(re, right)
  }

  // collapse multiple spaces
  lower = lower.replace(/\s+/g, ' ').trim()

  // Keep punctuation and numbers, but title-case words for readability
  return titleCase(lower)
}

export default {
  normalizeSubject,
}
