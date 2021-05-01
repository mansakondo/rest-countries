// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "controllers"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "stylesheets/application"

"use strict"

document.addEventListener('turbolinks:load', () => {
	document.querySelector("main").addEventListener('cable-ready:after-outer-html', (event) => {
		const target = event.target
		if (!target.tagName == "DIV") return
		target.style.opacity = 1
	})
})
document.addEventListener('click', (event) => {
	const target = event.target.closest('button') || event.target

	if (target.dataset.toggle) {
		const value = target.dataset.toggle

		if (value == 'dark') {
			// Get the 'theme' cookie or create it
			let theme = (document.cookie.split("; ").find((c) => c.startsWith("theme")) || (document.cookie = "theme=")).split("=")[1]
			const icon = target.querySelector("[class=material-icons]")

			if (theme == 'dark') {
				document.documentElement.classList.remove('dark')
				icon.textContent = "dark_mode"
				document.cookie = "theme="
			} else {
				document.documentElement.classList.add('dark')
				icon.textContent = "light_mode"
				document.cookie = "theme=dark"
			}
		}
	}

	// if (target.closest("[role='option']") && target.form) {
	//   const form = target.form
	//   form.querySelector("input[type='hidden']").value = target.textContent
	//   target.click()
	// }
  //
	// if (target.getAttribute('role') == 'option') {
	//   const submit = target.querySelector("[type='submit']")
	//   const form = submit.form
	//   form.querySelector("input[type='hidden']").value = submit.textContent
	//   submit.click()
	// }

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

