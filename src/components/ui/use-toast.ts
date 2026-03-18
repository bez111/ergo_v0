// Simple toast implementation
export function toast({ title, description, duration = 3000 }: {
  title: string
  description?: string
  duration?: number
}) {
  // Create toast element
  const toastEl = document.createElement('div')
  toastEl.className = `
    fixed top-4 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg
    bg-black border border-orange-500/30 text-white
    animate-in slide-in-from-top-2 duration-300
  `.trim()

  const titleEl = document.createElement('div')
  titleEl.className = 'font-semibold text-sm'
  titleEl.textContent = title
  toastEl.appendChild(titleEl)

  if (description) {
    const descEl = document.createElement('div')
    descEl.className = 'text-xs text-gray-300 mt-1'
    descEl.textContent = description
    toastEl.appendChild(descEl)
  }

  document.body.appendChild(toastEl)

  // Auto remove
  setTimeout(() => {
    toastEl.style.opacity = '0'
    toastEl.style.transform = 'translateY(-8px)'
    setTimeout(() => {
      document.body.removeChild(toastEl)
    }, 300)
  }, duration)
}
