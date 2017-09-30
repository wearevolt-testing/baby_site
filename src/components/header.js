import React, { Component } from 'react'

class App extends Component {
  render() {
    return (

      <div>

			<div className="header-holder">

				<header id="header">
					<span className="logo"><a href="index.html">Bambino</a></span>
					<div className="tools-nav_holder">
						<ul className="tools-nav">
							8 (913) 529-91-33
						</ul>
            <br />
            <br />
            <br />
					</div>
					<div className="clear"></div>
					<a className="menu_trigger" href="">menu</a>
					<nav id="nav">
						<ul className="navi">
							<li className="searc_li" >
								<div  className="ul_search li">
									<a className="search" href=""><span>search</span></a>
									<form method="get" className="searchform" action="">
										<input type="text" className="field" name="s" id="s" placeholder="What are you looking for?" />
										<input type="submit" className="submit" value=""  />
										<div className="clear"></div>
									</form>
								</div>
							</li>

							<li><a href="products.html">ФОТОГАЛЕРЕЯ</a></li>
							<li><a href="products.html">ОПЛАТА И ДОСТАВКА </a></li>
							<li><a href="products.html">ПАРТНЁРАМ</a></li>
							<li><a href="products.html">КОНТАКТЫ</a></li>
							<li><a href="products.html">О КОМПАНИИ</a></li>
						</ul>



					</nav>
				</header>



			</div>


      </div>

    )
  }
}

export default App


