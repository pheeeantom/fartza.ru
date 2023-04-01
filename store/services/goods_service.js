import { fetchBaseQuery } from "@rtk-incubator/rtk-query";
import { createApi } from "@rtk-incubator/rtk-query";

export const goodsAPI = createApi({
    reducerPath: 'goodsAPI',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    endpoints: (build) => ({ //круглые скобки нужны чтобы сразу получать объект
        /*fetchAllGoods: build.mutation({
            query: (args) => ({
                url: '',
                method: 'POST',
                body: { ...args, command: 'searchGoods' }
            })
        })*/
        fetchAllGoods: build.query({
            query: (args) => ({
                url: '/goods',
                params: args
            })
        }),
        fetchGoodsById: build.query({
            query: (id) => ({
                url: `/goods/${id}`
            })
        })
    })
});

//export const fetchAllGoodsState = (state) => goodsAPI.endpoints.fetchAllGoods.select()(state);