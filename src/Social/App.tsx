import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { FC, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./components/Common/Preloader/Preloader";
import MyHeader from "./components/Header/MyHeader";
import Navbar from "./components/Navbar/Navbar";
import { initializeApp } from "./redux/Reducers/AppReducer";
import { getAppsState, getAuthState } from "./redux/Selectors/Selectors";
const { Header, Content, Sider } = Layout;
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const Users = React.lazy(() => import("./components/Users/Users"));
const Login = React.lazy(() => import("./components/Login/Login"));

const App: FC = () => {
	const dispatch = useDispatch();
	const { userId } = useSelector(getAuthState);
	const { initialized } = useSelector(getAppsState);
	useEffect(() => {
		dispatch(initializeApp());
	}, []);
	if (!initialized) {
		return <Preloader />;
	}
	return (
		<BrowserRouter>
			<Layout>
				<Header className="header">
					<div className="logo" />
					<MyHeader />
				</Header>
				<Content style={{ padding: "0 50px" }}>
					<Layout className="site-layout-background" style={{ padding: "24px 0" }}>
						<Sider className="site-layout-background" width={200}>
							<Navbar />
						</Sider>
						<Content style={{ padding: "0 24px", minHeight: 280 }}>
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
						</Content>
					</Layout>
				</Content>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
