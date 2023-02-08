import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.risingserver13forever.shop/",
  headers: {
    "x-access-token": `${localStorage.getItem('jwt')}`,
  }
});

export const loginApi = {
  login: (loginEmail) =>
    api.post("app/login", {
      email: loginEmail,
    }),
  signin: (
    signInEmail,
    password,
    name,
    phoneNumber,
    termsAndConditionsTF,
    personalInformationCollectionTF,
    fourteenAndOverTF,
    receiveAdvertisementTF,
    receiveMessageAd,
    receiveAppAd,
    receiveEmailAd
  ) =>
    api.post("app/users", {
      email: signInEmail,
      password: password,
      name: name,
      phoneNumber: phoneNumber,
      termsAndConditionsTF: termsAndConditionsTF,
      personalInformationCollectionTF: personalInformationCollectionTF,
      fourteenAndOverTF: fourteenAndOverTF,
      receiveAdvertisementTF: receiveAdvertisementTF,
      receiveMessageAd: receiveMessageAd,
      receiveAppAd: receiveAppAd,
      receiveEmailAd: receiveEmailAd,
    }),
  users: (jwt, userId) =>
    api.get(`app/users/${userId}`),
};

export const insightApi = {
  getInsight: (choiceTabId) => api.get("app/insights?", { params: { tagId: choiceTabId } }),
};
export const eventApi = {
  getMainEventBanner: () => api.get("app/recommended-events"),
};

export const recruitmentApi = {
  getRecruitmentList: () => api.get("app/recruitments"),
  getRecruitmentDetail: (id) =>
    api.get(`app/recruitments/${id}`),
};

export const resumeApi = {
  getResumeDetail: (id) =>
    api.get(`app/resumes/${id}`),
  addCareerList: (id) => api.post(`app/resumes/${id}/careers`),
  getResumeList:(id)=>api.get(`app/users/${id}/resumes`),
  addNewResume:()=>api.post("app/resumes")
};

