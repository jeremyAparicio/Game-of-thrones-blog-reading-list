import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Continentes } from "./views/continentes";
import { Personajes } from "./views/personajes";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { DetallesContinentes } from "./views/detalles";
import { DetallesPersonajes } from "./views/detalles";


const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes" element={<Personajes />} />
						<Route path="/continentes" element={<Continentes />} />
						<Route path="/detalles/personajes/:id" element={<DetallesPersonajes />} />
						<Route path="/detalles/continentes/:id" element={<DetallesContinentes />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="/single/:theid" element={<Single />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);