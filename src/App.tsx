import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.scss";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Project from "./components/Project/Project";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ThemeProvider from "./context/theme/ThemeProvider";

function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="home" element={<Navigate to="/" />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="projects" element={<Projects />} />
					<Route path="projects/:id" element={<Project />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
