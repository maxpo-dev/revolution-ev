"use client"

type ToastProps = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

// Simple toast implementation
// In a real app, you'd use a proper toast library
export const toast = ({ title, description, variant }: ToastProps) => {
  const isDestructive = variant === "destructive"

  const toastElement = document.createElement("div")
  toastElement.className = `fixed top-4 right-4 p-4 rounded-md shadow-md max-w-md z-50 ${
    isDestructive ? "bg-red-500" : "bg-green-500"
  } text-white`

  const titleElement = document.createElement("h3")
  titleElement.className = "font-bold"
  titleElement.textContent = title
  toastElement.appendChild(titleElement)

  if (description) {
    const descElement = document.createElement("p")
    descElement.className = "text-sm mt-1"
    descElement.textContent = description
    toastElement.appendChild(descElement)
  }

  document.body.appendChild(toastElement)

  setTimeout(() => {
    toastElement.classList.add("opacity-0", "transition-opacity", "duration-300")
    setTimeout(() => {
      document.body.removeChild(toastElement)
    }, 300)
  }, 3000)
}
