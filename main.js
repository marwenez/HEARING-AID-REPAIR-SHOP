import './style.css'
import './src/js/dom.js'
// AOS is a scroll animation library
AOS.init({
	delay: 10,
	duration: 700
});
import {
	registerSW
} from 'virtual:pwa-register'

const updateSW = registerSW({
	onNeedRefresh() {alert('Need refresh')},
	onOfflineReady() {alert('Offline ready')},
})