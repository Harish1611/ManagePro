import { useDispatch, useSelector } from "react-redux";

import {

    fetchProjects,

    fetchProject,

    fetchProjectMembers,

    addProjectMembers,

    removeProjectMember,

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

        projectMembers,

        pagination,

        loading,

        error,

    } = useSelector(
        (state) => state.projects
    );

    return {

        /*
        |--------------------------------------------------------------------------
        | State
        |--------------------------------------------------------------------------
        */

        projects,

        project,

        projectMembers,

        pagination,

        loading,

        error,

        /*
        |--------------------------------------------------------------------------
        | Projects
        |--------------------------------------------------------------------------
        */

        fetchProjects: (params = {}) =>
            dispatch(fetchProjects(params)),

        fetchProject: (projectId) =>
            dispatch(fetchProject(projectId)),

        createProject: (projectData) =>
            dispatch(createProject(projectData)),

        updateProject: (
            projectId,
            projectData
        ) =>
            dispatch(
                updateProject({
                    projectId,
                    projectData,
                })
            ),

        deleteProject: (projectId) =>
            dispatch(deleteProject(projectId)),

        /*
        |--------------------------------------------------------------------------
        | Project Members
        |--------------------------------------------------------------------------
        */

        fetchProjectMembers: (projectId) =>
            dispatch(
                fetchProjectMembers(projectId)
            ),

        addProjectMembers: (
            projectId,
            members
        ) =>
            dispatch(
                addProjectMembers({
                    projectId,
                    members,
                })
            ),

        removeProjectMember: (
            projectId,
            userId
        ) =>
            dispatch(
                removeProjectMember({
                    projectId,
                    userId,
                })
            ),

        /*
        |--------------------------------------------------------------------------
        | Helpers
        |--------------------------------------------------------------------------
        */

        clearProject: () =>
            dispatch(clearProject()),

        clearProjectError: () =>
            dispatch(clearProjectError()),

        resetProjects: () =>
            dispatch(resetProjects()),

    };

};

export default useProjects;