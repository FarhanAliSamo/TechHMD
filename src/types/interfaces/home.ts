 interface HomeHero{
    id:string,
    title:string,
    description:string,
    media:string;
}

interface HomeAbout {
    id:string,
    heading:string,
    description:string,
    media:string;
}

interface HomeCounters{
    id:string,
    title:string,
    number:string,    
}
 
interface HomePrimaryBanner {
    id:string,
    title:string,
    description:string,
    primaryImage:string,
    secondaryImage:string,
     
}
 
interface HomeInnovation {
    id:string,
    title_1 :string,
    title_2:string,
    description:string,
    innovations:{
        icon:string
        title:string
        description:string
    }[],
     
}
 
interface HomeServices {
    id:string,
    name :string,
    description:string,
    shortDescription:string,
    logo:string,
    slug:string,     
}
 
interface HomeTestimonial {
    id:string,
    title :string,
    description:string,
    user:string,
}
 
 
interface HomePortfolio {
    id:string,
    name :string,
    description:string,
    image:string,
}
 