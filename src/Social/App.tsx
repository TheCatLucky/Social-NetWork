import React, { FC, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Common/Preloader/Preloader";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { initializeApp } from "./redux/Reducers/AppReducer";
import { getAppsState, getAuthState } from "./redux/Selectors/Selectors";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const Users = React.lazy(() => import("./components/Users/Users"));
const Login = React.lazy(() => import("./components/Login/Login"));

const App: FC = () => {
  const dispatch = useDispatch();
  const {userId} = useSelector(getAuthState);
	const {initialized} = useSelector(getAppsState);
	useEffect(() => {
		dispatch(initializeApp());
	}, []);
	if (!initialized) {
		return <Preloader />;
	}
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="app-wrapper-content">
					<Suspense fallback={<Preloader />}>
						<Routes>
							<Route path="/" element={<Navigate to={`/profile/${userId}`} />} />
							<Route path="/dialogs/*" element={<DialogsContainer />} />
							<Route path="/profile/:id" element={<ProfileContainer />} />
							<Route path="/users" element={<Users />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<div>404 not found</div>} />
						</Routes>
					</Suspense>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
