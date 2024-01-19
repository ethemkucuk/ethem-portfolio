import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillMediumCircle,
} from "react-icons/ai"
import { FaLinkedinIn } from "react-icons/fa"

function Footer() {
	let date = new Date()
	let year = date.getFullYear()
	return (
		<Container fluid className="footer">
			<Row>
				<Col md="4" className="footer-copywright">
					<h3>Developed by İbrahim Ethem Küçük</h3>
				</Col>
				<Col md="4" className="footer-copywright">
					<h3>Copyright © {year} </h3>
				</Col>
				<Col md="4" className="footer-body">
					<ul className="footer-icons">
						<li className="social-icons">
							<a
								href="https://github.com/ethemkucuk"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
						</li>

						<li className="social-icons">
							<a
								href="https://www.linkedin.com/in/ibrahim-ethem-k%C3%BC%C3%A7%C3%BCk-a2696b201/"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedinIn />
							</a>
						</li>
						<li className="social-icons">
							<a
								href="https://medium.com/@ethemk10k"
								style={{ color: "white" }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillMediumCircle />
							</a>
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	)
}

export default Footer
