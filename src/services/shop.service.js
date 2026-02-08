import api from "../lib/axios"

export const shopService={
    getShops(page=1){
        return api.get(`/shops?page=${page}`)
    }
}
