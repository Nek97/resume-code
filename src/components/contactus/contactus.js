import React, { useContext } from 'react'
import { AppCtxStore } from '../../App.context'

const Contact = () => {
	const { vocabulary } = useContext(AppCtxStore)

	return (
		<section id="contact">
			<div className="row section-head">
				<div className="two columns header-col">
					<h1>
						<span>{vocabulary.contact_section_title}</span>
					</h1>
				</div>
				<div className="ten columns">
					<p className="lead">
						{vocabulary.contact_section_lead}
					</p>
				</div>
			</div>
			<div className="row">
				<div className="eight columns">
					<form action method="post" id="contactForm" name="contactForm">
						<fieldset>
							<div>
								<label htmlFor="contactName">
									{vocabulary.contact_label_name} <span className="required">*</span>
								</label>
								<input type="text" defaultValue size={35} id="contactName" name="contactName" />
							</div>
							<div>
								<label htmlFor="contactEmail">
									{vocabulary.contact_label_email} <span className="required">*</span>
								</label>
								<input type="text" defaultValue size={35} id="contactEmail" name="contactEmail" />
							</div>
							<div>
								<label htmlFor="contactSubject">{vocabulary.contact_label_subject}</label>
								<input type="text" defaultValue size={35} id="contactSubject" name="contactSubject" />
							</div>
							<div>
								<label htmlFor="contactMessage">
									{vocabulary.contact_label_message} <span className="required">*</span>
								</label>
								<textarea cols={50} rows={15} id="contactMessage" name="contactMessage" defaultValue={""} />
							</div>
							<div>
								<button className="submit">{vocabulary.contact_submit}</button>
								<span id="image-loader">
									<img alt="" src="images/loader.gif" />
								</span>
							</div>
						</fieldset>
					</form>
					<div id="message-warning">{vocabulary.contact_message_warning}</div>
					<div id="message-success">
						<i className="fa fa-check" />{vocabulary.contact_message_success}
						<br />
					</div>
				</div>
				<aside className="four columns footer-widgets">
					<div className="widget widget_contact">
						<h4>{vocabulary.contact_address_title}</h4>
						<p className="address">
							{vocabulary.contact_address_name}
							<br />
							{vocabulary.contact_address_street}
							<br />
							{vocabulary.contact_address_city}
							<br />
							<span>{vocabulary.contact_address_phone}</span>
						</p>
					</div>
					<div className="widget widget_tweets">
						<h4 className="widget-title">{vocabulary.latest_tweets_title}</h4>
						<ul id="twitter">
							{vocabulary.latest_tweets.map((tweet, idx) => (
								<li key={`tweet-${idx}`}>
									<span>
										{tweet.text}{' '}
										<a href={tweet.link}>{tweet.link}</a>
									</span>
									<b>
										<a href={tweet.link}>{tweet.age}</a>
									</b>
								</li>
							))}
						</ul>
					</div>
				</aside>
			</div>
		</section>
	)

	export default Contact
