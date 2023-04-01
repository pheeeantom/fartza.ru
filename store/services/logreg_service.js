import { fetchBaseQuery } from "@rtk-incubator/rtk-query";
import { createApi } from "@rtk-incubator/rtk-query";

export const logregAPI = createApi({
    reducerPath: 'logregAPI',
    baseQuery: fetchBaseQuery({baseUrl: ''}),
    endpoints: (build) => ({ //круглые скобки нужны чтобы сразу получать объект
        fetchCaptcha: build.query({
            query: () => ({
                url: '/getCaptcha'
            })
        })
    })
});