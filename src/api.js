import axios from "axios";

const api = axios.create({
  baseURL: "https://prod.risingserver13forever.shop/",
  headers: {
    "x-access-token": `${localStorage.getItem("jwt")}`,
  },
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
  users: ( userId) => api.get(`app/users/${userId}`),
  signUp : (email,password)=> api.post("app/login",{
    email : email,
    password:password,
  })
};

export const insightApi = {
  getInsight: (choiceTabId) => api.get("app/insights?", { params: { tagId: choiceTabId } }),
  getInsightDetail: (id) => api.get(`app/insights/${id}`),
};
export const eventApi = {
  getMainEventBanner: () => api.get("app/recommended-events"),
};

export const recruitmentApi = {
  getRecruitmentList: () => api.get("app/recruitments"),
  getRecruitmentDetail: (id) => api.get(`app/recruitments/${id}`),
  getBookmarkList: (id)=>api.get(`app/users/${id}/bookmarks`),
  addBookmark: (id)=>api.post(`app/recruitments/${id}/plus-bookmarks`),
  removeBookmark: (id)=>api.patch(`app/recruitments/${id}/minus-bookmarks`),
};

export const resumeApi = {
  getResumeDetail: (id) => api.get(`app/resumes/${id}`),
  addCareerList: (id) => api.post(`app/resumes/${id}/careers`),
  addSchoolList: (id) => api.post(`app/resumes/${id}/schools`),
  addActivity: (id) => api.post(`app/resumes/${id}/activities`),
  getResumeList: (id) => api.get(`app/users/${id}/resumes`),
  addNewResume: () => api.post("app/resumes"),
  removeResume: (id) => api.patch(`app/resumes/${id}/status`),
  changeCareerList: (id, nameCompany, positionCompany, inCompanyTrueFalse, yearJoin, monthJoin, yearResignation, monthResignation) => {
    return api.patch(`app/careers/${id}`, {
      nameCompany: nameCompany,
      positionCompany: positionCompany,
      inCompanyCurrentlyTrueFalse: inCompanyTrueFalse,
      yearJoin: Number(yearJoin),
      monthJoin: Number(monthJoin),
      yearResignation: Number(yearResignation),
      monthResignation: Number(monthResignation),
    });
  },
  changeSchoolList: (id, schoolName, major,inCollegeCurrentlyTrueFalse, yearAdmission, monthAdmission, yearGraduate, monthGraduate,detail,oder) => {
    return api.patch(`app/schools/${id}`, {
      school: schoolName,
      major:major,
      detail:detail,
      inCollegeCurrentlyTrueFalse:inCollegeCurrentlyTrueFalse,
      yearAdmission: Number(yearAdmission),
      monthAdmission: Number(monthAdmission),
      yearGraduate: Number(yearGraduate),
      monthGraduate: Number(monthGraduate),
      orderSchool:Number(oder),

    });
  },
  changeActivityList: (id, nameActivity, detailActivity,yearActivity, monthActivity) => {
    return api.patch(`app/activities/${id}`, {
      nameActivity: nameActivity,
      detailActivity:detailActivity,
      yearActivity:yearActivity,
      monthActivity:monthActivity,
      // orderActivity: Number(orderActivity),
    });
  },
};