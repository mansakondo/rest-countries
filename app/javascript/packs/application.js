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

window.onload = () => {

	// Toggle dark mode
	const themeForm = document.querySelector('form')
	const theme = themeForm.firstElementChild
	const toggleButton = themeForm.lastElementChild
	toggleButton.addEventListener('click', () => {
		document.documentElement.classList.toggle('dark')

		if (document.documentElement.classList.contains('dark')) {
			theme.value = 'dark'
		} else {
			theme.value = 'light'
		}
	})

	// Expand region select
	const expandButton = document.getElementById('expand')
	const regionSelect = document.getElementById('region-select')

	expandButton.addEventListener('click', () => {
		regionSelect.classList.toggle('opacity-0')

		if (regionSelect.classList.contains('opacity-0')) {
			expandButton.firstElementChild.textContent = 'expand_more'
		} else {
			expandButton.firstElementChild.textContent = 'expand_less'
		}
	})

	const regionForm = document.getElementById('region-form')
	const regions = regionSelect.getElementsByTagName('li')
	for (let region of regions) {
		region.addEventListener('click', () => {
			regionForm.firstElementChild.value = region.textContent
			regionForm.submit()
		})
	}

	// Search for countries
	const searchBar = document.querySelector('input[type=search]')
}
