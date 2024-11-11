/**
 * new controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::new.new', (strapi) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: ['image'],
            sort: 'priority'
        }

        const {data, meta} = await super.find(ctx);
        return {data, meta};
    }
}));
