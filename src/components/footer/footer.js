import React, { useContext } from 'react'
import { AppCtxStore } from '../../App.context'

const Footer = () => {
	const { vocabulary } = useContext(AppCtxStore)

	return (
		<footer className="no-print">
			<div className="row">
				<div className="twelve columns">
					<ul className="social-links no-print">
						<li>
							<a href="https://www.facebook.com/nello1997">
								<i className="fa fa-facebook" />
							</a>
						</li>
						<li>
							<a href="https://wa.me/+393457086780">
								<i className="fa fa-whatsapp" />
							</a>
						</li>
						<li>
							<a href="https://github.com/Nek97">
								<i className="fa fa-github" />
							</a>
						</li>
						<li>
							<a href="https://www.linkedin.com/in/devnek97/">
								<i className="fa fa-linkedin" />
							</a>
						</li>
						<li>
							<a href="https://www.instagram.com/nek97/">
								<i className="fa fa-instagram" />
							</a>
						</li>
					</ul>
					<ul className="copyright">
						<li>{vocabulary.footer_copyright}</li>
						<li>
							{vocabulary.footer_realized_by} <a title={vocabulary.footer_realized_by_title} href="https://github.com/Nek97">{vocabulary.footer_by_name}</a>
						</li>
					</ul>
				</div>
				<div id="go-top" className="no-print">
					<a className="smoothscroll" title={vocabulary.footer_back_to_top} href="#home">
						<i className="icon-up-open" />
					</a>
				</div>
			</div>
		</footer>
	)
}

export default Footer
