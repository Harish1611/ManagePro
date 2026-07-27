import { useDispatch, useSelector } from "react-redux";

import {
    fetchProjects,
    fetchProject,
    createProject,
    updateProject,
    deleteProject,
    clearProject,
    clearProjectError,
    resetProjects,
} from "@/redux/slices/projectSlice";

const useProjects = () => {

    const dispatch = useDispatch();

    const {

        projects,

        project,

        pagination,

        loading,

        error,

    } = useSelector(
        (state) => state.projects
    );

    return {

        projects,

        project,

        pagination,

        loading,

        error,

        fetchProjects: (params) =>
            dispatch(fetchProjects(params)),

        fetchProject: (id) =>
            dispatch(fetchProject(id)),

        createProject: (data) =>
            dispatch(createProject(data)),

        updateProject: (projectId, projectData) =>
            dispatch(
                updateProject({
                    projectId,
                    projectData,
                })
            ),

        deleteProject: (id) =>
            dispatch(deleteProject(id)),

        clearProject: () =>
            dispatch(clearProject()),

        clearProjectError: () =>
            dispatch(clearProjectError()),

        resetProjects: () =>
            dispatch(resetProjects()),

    };

};

export default useProjects;