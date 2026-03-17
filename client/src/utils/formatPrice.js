/**
 * Formats a price number into PKR format
 * @param {number} amount
 * @returns {string} e.g. "PKR 85,000"
 */
export const formatPKR = (amount) => {
  return `PKR ${Number(amount).toLocaleString('en-PK')}`
}

/**
 * Formats a price number into PKR without the "PKR" prefix
 */
export const formatAmount = (amount) => {
  return Number(amount).toLocaleString('en-PK')
}
