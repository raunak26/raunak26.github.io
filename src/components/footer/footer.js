import './footer.css';

import React, { useEffect } from 'react';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="footer">
				<div className="footer-content">
					<div className="col col-one">
	                	<a href="https://www.linkedin.com/in/raunak-anand/" target="_blank"><img src="/images/linkedin.png" class="footer_logos"/></a>
	                    <a href="https://github.com/raunak26" target="_blank"><img src="/images/github.png" class="footer_logos"/></a>
	                    <a href="https://open.spotify.com/user/31dxduls3536yktvdp5baavgr5ca" target="_blank"><img src="/images/spotify.png" class="footer_logos"/></a>
	                    <a href="mailto:anandraunak2000@gmail.com" target="_blank"><img src="/images/mail.png" class="footer_logos"/></a>
	                    <a href="https://twitter.com/raunakanandsahu" target="_blank"><img src="/images/twitter.png" class="footer_logos"/></a>
					</div>
					<div className="col col-two">
						<h3>Links</h3>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/aboutMe">Work</a></li>
							<li><a href="https://docs.google.com/document/d/1g9OWZlYmdrewHjvRvqMnTaETZbJdHP8aDumtaj_QRZo/edit?usp=sharing" target="_blank">Resume</a></li>
						</ul>
					</div>
					<div className="col col-three">
						<h3>Have a question?</h3>
						<ul>
							<li><span><img src="/images/location.png" class="ques-logo location"/></span>Davis, CA</li>
							<li><span><img src="/images/phone.png" class="ques-logo"/></span>(530) 979-3197</li>
							<li><span><img src="/images/mail.png" class="ques-logo"/></span>anandraunak2000@gmail.com</li>
						</ul>
					</div>
				</div>
				<p>© 2021 Raunak Anand</p>
			</div>
			<div className="footer-mobile">
				<div class="row row-one">
					<div className="col col-two">
						<h3>Links</h3>
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="/work">Work</a></li>
							<li><a href="https://docs.google.com/document/d/1g9OWZlYmdrewHjvRvqMnTaETZbJdHP8aDumtaj_QRZo/edit?usp=sharing" target="_blank">Resume</a></li>
						</ul>
					</div>
					<div className="col col-three">
						<h3>Have a question?</h3>
						<ul>
							<li><span><img src="/images/location.png" class="ques-logo location"/></span>Davis, CA</li>
							<li><span><img src="/images/phone.png" class="ques-logo"/></span>(530) 979-3197</li>
							<li><span><img src="/images/mail.png" class="ques-logo"/></span>anandraunak2000@gmail.com</li>
						</ul>
					</div>
				</div>
				<div className="row row-two">
                	<a href="https://www.linkedin.com/in/raunak-anand/" target="_blank"><img src="/images/linkedin.png" class="footer_logos"/></a>
                    <a href="https://github.com/raunak26" target="_blank"><img src="/images/github.png" class="footer_logos"/></a>
                    <a href="https://open.spotify.com/user/31dxduls3536yktvdp5baavgr5ca" target="_blank"><img src="/images/spotify.png" class="footer_logos"/></a>
                    <a href="mailto:anandraunak2000@gmail.com" target="_blank"><img src="/images/mail.png" class="footer_logos"/></a>
                    <a href="https://twitter.com/raunakanandsahu" target="_blank"><img src="/images/twitter.png" class="footer_logos"/></a>
				</div>
				<p>© 2021 Raunak Anand</p>
			</div>
		</React.Fragment>
	);
}

export default Footer;