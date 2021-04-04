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
	const toggle = document.getElementsByTagName('button')[0]
	toggle.addEventListener('click', toggleDarkMode)

	const expandButton = document.getElementsByTagName('button')[1]
	expandButton.addEventListener('click', () => {
		const regionsList = document.getElementsByTagName('ul')[0]
		regionsList.classList.toggle('opacity-0')
	})

}

const toggleDarkMode = () => {
	document.documentElement.classList.toggle('dark')
}
