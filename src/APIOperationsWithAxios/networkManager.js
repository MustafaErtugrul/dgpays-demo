import { axiosInstance } from "./axiosInstace"


export const networkManager = {

    getAll: async (url) => {
        let resultData = [];
        await axiosInstance.get(url)
            .then(res => {
                resultData = res.data;
            });
        return resultData;

    },

    add: async (url, data) => {

        let resultData = {};

        await axiosInstance.post(url, data)
            .then(res => {
                resultData = res.data;
            })


        return resultData;

    }

}