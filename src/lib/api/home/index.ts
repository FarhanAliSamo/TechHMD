import axiosInstance from "../axios";

export const getHeroSectionByPageName = (pageName:string) => axiosInstance.get(`/hero-section/by-page-or-service?pageName=${pageName}`) 

export const getHomeAbout = () => axiosInstance.get('/about-us/home') 

export const getHomeAboutCounter = () => axiosInstance.get('/counters') 

export const getHomePortfolio = () => axiosInstance.get('/projects') 

export const getHomePrimaryBanner = () => axiosInstance.get('/primary-banners') 

export const getHomeInnnovations = () => axiosInstance.get('/innovations/6784d3c01fde7080b1488b41') 

export const getHomeServices = () => axiosInstance.get('/services/parent-services')

export const getHomeTestimonials = () => axiosInstance.get('/testimonials')


