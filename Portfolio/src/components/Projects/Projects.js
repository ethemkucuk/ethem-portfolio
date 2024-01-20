import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import ProjectCard from "./ProjectCards"
import Particle from "../Particle"
import leaf from "../../Assets/Projects/leaf.png"
import emotion from "../../Assets/Projects/emotion.png"
import editor from "../../Assets/Projects/codeEditor.png"
import chatify from "../../Assets/Projects/chatify.png"
import suicide from "../../Assets/Projects/suicide.png"
import bitsOfCode from "../../Assets/Projects/blog.png"

function Projects() {
	return (
		<Container fluid className="project-section">
			<Particle />
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={chatify}
							isBlog={false}
							title="Content-Master "
							description="This fun React.js-based website offers its users the opportunity to create and download their own funny photos. Thanks to its simple interface, anyone can easily create their own designs by choosing from cute stickers, crazy filters and unique effects. Offering various options to add personal touches to photos, this platform allows you to create memories that are guaranteed to make your friends laugh. With the opportunity to download created works quickly and easily, users are instantly ready to share and have fun. Come on, start creating your own fun world! 🚀📸"
							ghLink="https://github.com/ethemkucuk/Content-Master"
							demoLink="https://meme-master.vercel.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={bitsOfCode}
							isBlog={false}
							title="kanatci-ibo-website "
							description="Hello friends! This website is the reflection of Kanatçı İbo, the indispensable place of our university days, in the digital world. This site, carefully designed with React.js and Tailwind.css, opens a door to revive our nostalgic memories and return to delicious memories.Thanks to the powerful structure of React.js, the menu page is presented in an eye-catching layout and in an interactive manner. Visiting this page to remember your favorite meals and drinks will help you get one step closer to the tastes of the old days."
							ghLink="https://github.com/ethemkucuk/kanatci-ibo-website"
							demoLink="https://kanatci-ibo-website.vercel.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={editor}
							isBlog={false}
							title="superwise-website"
							description="Nowadays, with the increasing popularity of online shopping, businesses are turning to various technologies to design their web-based e-commerce sites to provide the best experience to customers. In this context, the e-commerce site named 'superwise' attracts attention with its advanced user interface and performance. This platform aims to provide customers with a modern, fast and user-friendly shopping experience using React.js and JavaScript technologies."
							ghLink="https://github.com/ethemkucuk/superwise-website"
							demoLink="https://super-wise.vercel.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={leaf}
							isBlog={false}
							title="WeatherWise"
							description="'WeatherWise' offers an impressive user interface thanks to the React.js framework. Its component-based structure makes the site modular and thus provides a fast and interactive experience. Instant weather updates, dynamic graphics and user-friendly controls allow users to track the weather instantly."
							ghLink="https://github.com/ethemkucuk/WeatherWise"
							demoLink="https://weather-wise-beryl.vercel.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={suicide}
							isBlog={false}
							title="businnes-website"
							description="Let Your Professional Journey Begin: Discover Job Opportunities and Shape Your Career! Our React.js-based job website offers you a personalized job search experience. Thanks to its user-friendly interface, you can easily find the most up-to-date and suitable job opportunities on this platform, which is equipped with filters suitable for your field. Additionally, you can present yourself to employers in the best way by creating your CV professionally and shape your career by expanding your network with industry professionals. Get ready to open new doors in the business world with a fast and reliable application process. Take a step to elevate your career and let your professional journey begin!"
							ghLink="https://github.com/ethemkucuk/businnes-website/tree/main/My-Website/my-app"
							demoLink="https://businnes-website.vercel.app/"
						/>
					</Col>

					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={emotion}
							isBlog={false}
							title="MyBlogPage"
							description="Get Ready for a Journey Full of Discovery: Our Blog is Waiting for You! An unforgettable discovery experience awaits you on our blog page full of the most up-to-date information, inspiring stories and intriguing content. We are here to inform and entertain you with our posts about technology, art, travel and many different aspects of life. Get ready to discover a new world in every article, because our blog opens a door for you and invites you to a journey full of discovery. 🌐✨"
							ghLink="https://github.com/ethemkucuk/MyBlogPage/tree/main/blogPage/my-app"
							demoLink="https://my-blog-page-five.vercel.app/"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	)
}

export default Projects
