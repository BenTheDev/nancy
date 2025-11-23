// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const nav = document.getElementById("nav")

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active")
})

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav a")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active")
  })
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")

contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // Get form values
  const formData = new FormData(contactForm)
  const name = contactForm.querySelector('input[type="text"]').value
  const email = contactForm.querySelector('input[type="email"]').value

  // Simple validation
  if (name && email) {
    // Show success message
    const submitBtn = contactForm.querySelector('button[type="submit"]')
    const originalText = submitBtn.textContent
    submitBtn.textContent = "Message Sent!"
    submitBtn.style.backgroundColor = "#4CAF50"

    // Reset form
    contactForm.reset()

    // Restore button after 3 seconds
    setTimeout(() => {
      submitBtn.textContent = originalText
      submitBtn.style.backgroundColor = ""
    }, 3000)
  }
})
