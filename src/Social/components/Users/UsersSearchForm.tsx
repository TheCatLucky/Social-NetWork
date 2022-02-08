import { Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { FilterType } from "../../redux/Reducers/UsersReducer";

const usersSearchFormValidate = (values: any) => {
	const errors = {};
	return errors;
};
type Props = {
	onFilterChanged: (filter: FilterType) => void;
};
type FriendForm = "true" | "false" | "null";
type FormType = {
  term: string,
  friend: "true" | "false" | "null"
}
export const UsersSearchForm: FC<Props> = React.memo(({ onFilterChanged }) => {
	const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === "null" ? null : values.friend === "true" ? true : false,
		};
		onFilterChanged(filter);
		setSubmitting(false);
	};

	return (
		<Formik
			enableReinitialize
			initialValues={{ term: "", friend: "null" as FriendForm }}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type="text" name="term" />
					<Field name="friend" as="select">
						<option value="null">All</option>
						<option value="true">Followed</option>
						<option value="false">Unfollowed</option>
					</Field>
					<button type="submit" disabled={isSubmitting}>
						Find
					</button>
				</Form>
			)}
		</Formik>
	);
});
