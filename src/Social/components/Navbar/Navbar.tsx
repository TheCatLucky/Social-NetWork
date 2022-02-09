import { Menu } from "antd";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAuthState } from "../../redux/Selectors/Selectors";

const Navbar: FC = () => {
	const { userId } = useSelector(getAuthState);
	return (
		<>
			<Menu mode="inline" defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} style={{ height: "100%" }}>
				<Menu.Item key="1">
					<Link to={`/profile/${userId}`}>Profile</Link>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to="/dialogs">Messages</Link>
				</Menu.Item>
				<Menu.Item key="3">
					<Link to="/users">Users</Link>
				</Menu.Item>
			</Menu>
		</>
	);
};

export default Navbar;
