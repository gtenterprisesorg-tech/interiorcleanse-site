export type Product = { slug:string; name:string; category:string; heroImage:string; gallery:string[]; imageAlt:string; editorialBlurb:string; priceRange?:string; tiktokShopUrl:string; tiktokVideoEmbedId?:string; featured:boolean }
export type Book = { slug:string; title:string; subtitle?:string; coverImage:string; imageAlt:string; hook:string; bullets:string[]; paperbackUrl:string; kindleUrl:string; featured:boolean }
export type Article = { slug:string; title:string; eyebrow:string; excerpt:string; date:string; image:string; imageAlt:string; body:string[] }
