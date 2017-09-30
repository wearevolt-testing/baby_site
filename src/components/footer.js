import React, { Component } from 'react'

class App extends Component {
  render() {
    return (

      <div>

		<footer id="footer">
			<div className="footer-content">
				<ul className="left_side">
				</ul>
				<ul className="right_side">
					<li>
						<span>Мы в социальных сетях</span>
						<div className="social">
							<a href="#" className="fb">Facebook</a>
							<a href="#" className="tw">Twitter</a>
						</div>
						<div className="social">
							<a href="#" className="gl">Google+</a>
							<a href="#" className="pn">Pinterest</a>
						</div>
					</li>
				</ul>
				<div className="clear"></div>
			</div>
		</footer>


      </div>

    )
  }
}

export default App


