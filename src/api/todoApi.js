import axiosClient from "./axiosClient";

const todosApi = {
    getAll: (params) => {
        const url = `/todos?${params}`;
        return axiosClient.get(url);
    },

    search: (value) => {
        const url = `/todos?q=${value}`;
        return axiosClient.get(url);
    },

    getById: (id) => {
        const url = `/todos/${id}`;
        return axiosClient.get(url);
    },
    create: data => {
        return axiosClient.post("/todos", data);
    },
      
    update:(id, data) => {
        return axiosClient.put(`/todos/${id}`, data);
    },
      
    remove: id => {
        return axiosClient.delete(`/todos/${id}`);
    },
      
    removeAll:() => {
        return axiosClient.delete(`/todos`);
    }
}

export default todosApi;