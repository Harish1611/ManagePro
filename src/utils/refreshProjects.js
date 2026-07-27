import { fetchProjects } from "@/redux/slices/projectSlice";

const refreshProjects = (
    dispatch,
    filters = {}
) => {

    dispatch(
        fetchProjects(filters)
    );

};

export default refreshProjects;