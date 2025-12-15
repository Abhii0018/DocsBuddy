export function required(value){
  return value ? null : 'This field is required'
}

export function minLength(value, n){
  return value && value.length>=n ? null : `Minimum ${n} characters`
}

export function emailFormat(value){
  if (!value) return null
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i
  return re.test(value) ? null : 'Enter a valid email'
}

export function phoneFormat(value){
  if (!value) return null
  const digits = String(value).replace(/[^0-9]/g, '')
  return digits.length === 10 ? null : 'Enter a valid 10-digit phone number'
}

export function pincodeFormat(value){
  if (!value) return null
  const digits = String(value).replace(/[^0-9]/g, '')
  return /^[0-9]{6}$/.test(digits) ? null : 'Enter a valid 6-digit pincode'
}

export function numericPositive(value){
  if (!value) return null
  const n = Number(String(value).replace(/[^0-9.]/g, ''))
  return !isNaN(n) && n > 0 ? null : 'Enter a valid number'
}
