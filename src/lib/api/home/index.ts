import axiosInstance from "../axios";

export const getHeroSectionByPageName = (pageName:string) => axiosInstance.get(`/hero-section/by-page-or-service?pageName=${pageName}`) 