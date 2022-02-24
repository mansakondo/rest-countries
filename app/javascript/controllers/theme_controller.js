import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = [ "icon" ]

  connect() {
    console.log(this.element);
  }

  initialize() {
    this.setTheme()
  }

  setTheme() {
    const url = new URL(window.location)

    url.searchParams.delete("theme")

    window.history.pushState({}, '', url)

    const theme = (document.cookie.split("; ").find((c) => c.startsWith("theme")) || (document.cookie = "theme=")).split("=")[1]

    if (theme == "dark") {
      document.documentElement.classList.add("dark")
      this.iconTarget.textContent = "light_mode"
    } else {
      document.documentElement.classList.remove("dark")
      this.iconTarget.textContent = "dark_mode"
    }
  }

  toggle(event) {
    event.preventDefault()

    const theme = (document.cookie.split("; ").find((c) => c.startsWith("theme")) || (document.cookie = "theme=")).split("=")[1]

    if (theme == "dark") {
      document.documentElement.classList.remove("dark")
      this.iconTarget.textContent = "dark_mode"
      document.cookie = "theme="
    } else {
      document.documentElement.classList.add("dark")
      this.iconTarget.textContent = "light_mode"
      document.cookie = "theme=dark"
    }
  }
};
