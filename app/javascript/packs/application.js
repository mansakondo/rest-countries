// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
// import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
// Turbolinks.start()
ActiveStorage.start()

import "stylesheets/application"

"use strict"

// document.addEventListener('turbolinks:load', () => {
//   const searchInput = document.querySelector("input[type=search]")
//   if (searchInput) {
//     searchInput.oninput = (event) => {
//       const input = event.target.value
//
//       fetch(`https://restcountries.eu/rest/v2/name/${input}?fields=name;flag;region;capital;population`)
//         .then((response) => {
//           if (!response.ok) {
//             throw Error(response.statusText)
//           }
//           return response.json()
//         }).then((json) => {
//           const country = json[0]
//           console.log(country.name);
//         }).catch((error) => console.log(error + ": Couldn't find what you're looking for"))
//     }
//   }
// })

document.addEventListener('turbo:load', () => {
	const observer = new MutationObserver((mutations) => {
		for (let mutation of mutations) {
			if (mutation.attributeName == "src") {
				window.history.pushState(window.history.state, "", mutation.target.src)
			}
		}
		console.log(mutations)
	})

	const countriesFrame = document.querySelector("turbo-frame[id=countries]")

	if (countriesFrame) {
		observer.observe(countriesFrame, { attributes: true })
	}

	const turboForm = document.querySelector("form[data-turbo-frame]")
	turboForm?.addEventListener('submit', () => {
		const url = new URL(document.location.origin)
		window.history.pushState(window.history.state, "", url)
	})
})
document.addEventListener('click', (event) => {
	const target = event.target.closest('button') || event.target

	if (target.dataset.toggle) {
		const value = target.dataset.toggle

		if (value == 'dark') {
			// Get the 'theme' cookie or create it
			let theme = (document.cookie.split("; ").find((c) => c.startsWith("theme")) || (document.cookie = "theme=")).split("=")[1]

			if (theme == 'dark') {
				document.documentElement.classList.remove('dark')
				document.cookie = "theme="
			} else {
				document.documentElement.classList.add('dark')
				document.cookie = "theme=dark"
			}
		}
	}

	if (target.closest("[role='option']") && target.form) {
		const form = target.form
		form.querySelector("input[type='hidden']").value = target.textContent
		target.click()
	}

	if (target.getAttribute('role') == 'option') {
		const submit = target.querySelector("[type='submit']")
		const form = submit.form
		form.querySelector("input[type='hidden']").value = submit.textContent
		submit.click()
	}

	if (target.dataset.expand) {
		const id = target.dataset.expand
		const element = document.getElementById(id)
		const classList = element.classList
		classList.toggle('opacity-0')

		const icon = target.querySelector("span[class='material-icons']")

		if (icon) {
			icon.textContent = classList.contains('opacity-0') ? 'expand_more' : 'expand_less'
		}
	}
})
