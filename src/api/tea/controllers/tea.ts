/**
 * tea controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::tea.tea', (strapi) => ({
    async find(ctx) {
        ctx.query = {
            ...ctx.query,
            populate: ['backgroundImage', 'boxImage'],
            sort: 'priority'
        }

        const {data, meta} = await super.find(ctx);
        return {data, meta};
    }
}));
