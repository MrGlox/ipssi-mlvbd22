import convertSlug from "slugify";

export const slugify = (title) => convertSlug(title, { lower: true });
