// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import "stylesheets/application"

document.addEventListener('click', (event) => {
	const target = event.target.closest('button') || event.target

	if (target.dataset.toggle) {
		const value = target.dataset.toggle
		document.documentElement.classList.toggle(value)

		if (value == 'dark') {
			const form = target.closest('form')
			const theme = form.querySelector("input[type='hidden']")

			if (document.documentElement.classList.contains(value)) {
				theme.value = 'dark'
			} else {
				theme.value = 'light'
			}

			const params = (new URL(document.location)).searchParams

			if (params.get('region')) {
				const param = document.createElement("input")
				param.type = 'hidden'
				param.name = 'region'
				param.value = params.get('region')

				form.prepend(param)
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
