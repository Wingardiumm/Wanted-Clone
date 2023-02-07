import axios from "axios";

const api = axios.create({
  baseURL: "https://dev.risingserver13forever.shop/",
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
    api.get(`app/users/${userId}`, {
      headers: {
        "x-access-token": jwt,
      },
    }),
};

export const insightApi = {
  getInsight: (choiceTabId) => api.get("app/insights?", { params: { tagId: choiceTabId } }),
};
export const eventApi = {
  getMainEventBanner: () => api.get("app/recommended-events"),
};

export const recruitmentApi = {
    getRecruitmentList : ()=> api.get("app/recruitments"),
    getRecruitmentDetail : (id,jwt)=> api.get(`app/recruitments/${id}`,{
        headers:{
            "x-access-token": jwt,
        }
    })
}
