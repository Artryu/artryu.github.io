/* =========================================================
   WAVE Lab 홈페이지 데이터
   - 논문, 구성원, 뉴스, 과제는 모두 이 파일에서 수정합니다.
   - 새 항목은 각 목록의 맨 위에 추가하세요 (최신순).
   ========================================================= */

window.LAB = {
  name: "WAVE Lab",
  fullName: "Water Analytics, Vision & Earth Observation Laboratory",
  nameKo: "지능형 수자원 연구실",
  dept: "Department of Civil and Environmental Engineering",
  deptKo: "한남대학교 건설환경공학과",
  univ: "Hannam University",
  email: "jinwook213@hnu.kr",
  phone: "+82-42-629-7355",
  address: "70 Hannam-ro, Daedeok-gu, Daejeon 34430, Republic of Korea",
  addressKo: "대전광역시 대덕구 한남로 70 한남대학교 (34430)",
  scholar: "https://scholar.google.co.kr/citations?user=mrKgYBsAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/jinwook213",
  office:"공과대학 10층 6호 (Room 6, 10th Floor, College of Engineering)"
};

/* ---------------- 구성원 ----------------
   role 예시: "Ph.D. Student", "M.S. Student", "Undergraduate Researcher", "Alumni"
   photo: "assets/img/people/파일명.jpg" (없으면 이니셜 표시)
*/
window.MEMBERS = [
  // { name: "홍길동", nameEn: "Gildong Hong", role: "Undergraduate Researcher", since: "2026", email: "", interests: "SAR flood detection", photo: "" },
];

/* ---------------- 뉴스 ---------------- */
window.NEWS = [
  { date: "2026.06", cat: "Project", text: "New projects launched: UNESCO IHP ecohydrology demonstration-site guidelines, and core satellite image analysis technologies for disaster detection (Ministry of Education)." },
  { date: "2026.05", cat: "Award", text: "Best Paper Award at the 2026 Korea Water Resources Association Conference — <i>Flood detection using polarimetric decomposition and machine learning with ALOS-2 PolSAR</i>." },
  { date: "2026.04", cat: "Talk", text: "Presented PolSAR-based flood detection for infrastructure risk monitoring at the Korea Institute for Structural Maintenance and Inspection conference (Busan)." },
  { date: "2026.03", cat: "Lab", text: "WAVE Lab opens at the Department of Civil and Environmental Engineering, Hannam University. Prof. Jinwook Lee joins as Assistant Professor." },
  { date: "2026", cat: "Paper", text: "Paper published in <i>Geoscience Frontiers</i>: Enhancing flood mapping precision through C-band PolSAR decompositions and feature-optimized deep learning." },
  { date: "2026", cat: "Paper", text: "Paper published in <i>Journal of Hydrology: Regional Studies</i>: Hybrid machine learning framework for hourly wastewater inflow forecasting in Oahu, Hawaii." },
  { date: "2025", cat: "Paper", text: "Paper published in <i>Science of The Total Environment</i>: Observed intensification of temporally compound dry–wet transitions across East Asia." }
];

/* ---------------- 연구 과제 ---------------- */
window.PROJECTS = [
  { title: "Action and Advisory Research for Developing Operational Guidelines for UNESCO Ecohydrology Demonstration Sites in Korea", funder: "Korean National Committee for UNESCO IHP", period: "2026.06 – Present", ongoing: true },
  { title: "Development of Core Satellite Image Analysis Technologies for Disaster Detection", funder: "Ministry of Education, Republic of Korea", period: "2026.06 – Present", ongoing: true },
  { title: "Hybrid-NDT Development Global Basic Research Center for Concrete Durability Performance Evaluation", funder: "National Research Foundation of Korea", period: "2026.04 – Present", ongoing: true },
  { title: "Enhancing Flood Detection and Mapping by Using PolSAR, Metaheuristic, and Deep Learning Algorithms", funder: "National Science Foundation (NASA RII Track-4)", period: "", ongoing: false },
  { title: "Forecasting Evapotranspiration and Rainfall for Water Resources Conservation and Sustainable Agriculture", funder: "United States Department of Agriculture", period: "", ongoing: false },
  { title: "Development of AI-based Rainfall Estimation Model Using Multisensor (Principal Investigator)", funder: "Ministry of Education", period: "", ongoing: false },
  { title: "Research on CCTV Image-based Precipitation Estimation Method (I) & (II)", funder: "Korea Meteorological Institute", period: "", ongoing: false },
  { title: "Development of Rainfall Scenarios Considering Temporal Characteristics of Independent Rainfall Events", funder: "Korea Institute of Civil Engineering and Building Technology (KICT)", period: "2023.10 – 2023.12", ongoing: false },
  { title: "Study on the Construction and Validation of Standard/Raw CCTV Rainfall & Snowfall Video Datasets", funder: "Korea Conformity Laboratories (KCL)", period: "2022.11 – 2023.02", ongoing: false },
  { title: "Construction of Rainfall Video Database Under Various Conditions Using CCTV", funder: "Korea Conformity Laboratories (KCL)", period: "2021.10 – 2021.12", ongoing: false },
  { title: "Construction and Analysis of Calibration Instrument Data for Rainfall Radar", funder: "Korea Institute of Civil Engineering and Building Technology (KICT)", period: "2021.10 – 2021.12", ongoing: false }
];

/* ---------------- 논문 ----------------
   type: "intl" 국제학술지 / "kr" 국내학술지 / "conf" 국제학술대회 / "patent" 특허
   featured: true → 홈 화면 "Selected Publications"에 표시
   note: 수상 등 배지 (예: "Best Case Study")
*/
window.PUBS = [
  // ===== International Journals =====
  { type: "intl", year: 2026, featured: true, authors: "Kim, S., Lee, J., Janizadeh, S., Bateni, S. M., Kim, D., Jun, C., Auligne, T., & Heggy, E.", title: "Enhancing flood mapping precision through C-band PolSAR decompositions and feature-optimized deep learning", venue: "Geoscience Frontiers, 102473", doi: "10.1016/j.gsf.2026.102473" },
  { type: "intl", year: 2026, authors: "Kivi, S. S., Lee, J., Bateni, S. M., Deenik, J., Jun, C., Kim, D., & Jamei, M.", title: "Unraveling the effects of univariate and multivariate signal decomposition techniques on daily reference evapotranspiration forecasting", venue: "Computers and Electronics in Agriculture, 112451", doi: "10.1016/j.compag.2026.112451" },
  { type: "intl", year: 2026, featured: true, authors: "Lee, J., Bateni, S. M., Kim, D., Jun, C., Babcock, R., & Azizi, S.", title: "An integrated data decomposition and feature selection–based hybrid machine learning framework for enhanced hourly wastewater inflow forecasting at a wastewater treatment plant in Oahu, Hawaii", venue: "Journal of Hydrology: Regional Studies, 67, 103877", doi: "10.1016/j.ejrh.2026.103877" },
  { type: "intl", year: 2026, authors: "Kim, S., Kim, D., Lee, J., Bateni, S. M., Ahmad, W., & Park, J.*", title: "A novel approach of mapping snow disaster-prone areas based on areal disaster density optimization: a case study of South Korea", venue: "Natural Hazards, 122(2), 80", doi: "10.1007/s11069-025-07761-8" },
  { type: "intl", year: 2026, featured: true, authors: "Lee, J., Janizadeh, S., Melancon, A., Bateni, S. M., Kim, D., Molthan, A., Jun, C.*, Farhadiani, R., Homayouni, S., & Dinka, M.", title: "Flood detection using PolSAR decomposition, feature selection, and deep learning", venue: "Gondwana Research, 152, 212–233", doi: "10.1016/j.gr.2025.06.022" },
  { type: "intl", year: 2025, featured: true, authors: "Lee, J., Cho, E., Jun, C., Najafi, M. R., Yoo, C., & Na, W.*", title: "Observed intensification of temporally compound dry–wet transitions and serial combinations across East Asia", venue: "Science of The Total Environment, 1002, 180591", doi: "10.1016/j.scitotenv.2025.180591" },
  { type: "intl", year: 2025, authors: "Saleem, M. A., Shoaib, M., Hashim, S., et al.", title: "Projecting future climate extremes in the glacier-fed upper Indus basin using machine learning based downscaling of CMIP6 GCMs", venue: "Theoretical and Applied Climatology, 156, 567", doi: "10.1007/s00704-025-05793-5" },
  { type: "intl", year: 2025, authors: "Hwang, S., Lee, J., De Michele, C., Byun, J., Jung, D., & Jun, C.*", title: "Rainfall intensity estimation via raindrop sounds leveraging convolutional neural networks and low-cost IoT sensors", venue: "Steel and Composite Structures, 56(6), 539–550", doi: "" },
  { type: "intl", year: 2025, authors: "Saleem, M. A., Shoaib, M., Hashim, S., Shoaib, M., Farid, H. U., Ghaffar, M. A., Ismail, M., Ameen, A., Lee, J., Inam, M. A., & Jun, C.", title: "Machine learning-based streamflow projections in the Upper Indus Basin under CMIP6 climate scenarios", venue: "Physics and Chemistry of the Earth", doi: "" },
  { type: "intl", year: 2025, authors: "Iftakhar, N., Islam, F., Hussain, M. I., Ahmad, M. N., Lee, J., Rehman, N. U., Qaysi, S., Alarifi, N., & Youssef, Y. M.*", title: "Revealing land-use dynamics on thermal environment of riverine cities under climate variability using remote sensing and geospatial techniques", venue: "ISPRS International Journal of Geo-Information, 14(1), 13", doi: "10.3390/ijgi14010013" },
  { type: "intl", year: 2024, authors: "Lee, J., Yoo, C.*, & Hong, S.", title: "Limited applicability of rational formula in the presence of storage effect", venue: "Steel and Composite Structures, 53(6), 749–761", doi: "10.12989/scs.2024.53.6.749" },
  { type: "intl", year: 2024, authors: "Sathiyamurthi, S., Subbarayan, S., Ramya, M., Sivasakthi, M., Gobi, R., Qaysi, S., Kumar, S. P., Lee, J., Alarifi, N., Wahba, M., & Youssef, Y. M.*", title: "Advancing agricultural land suitability in urbanized semi-arid environments: insights from geospatial and machine learning approaches", venue: "ISPRS International Journal of Geo-Information, 13(12), 436", doi: "10.3390/ijgi13120436" },
  { type: "intl", year: 2024, authors: "Cha, H., Baik, J., Lee, J., Na, W., & Jun, C.*", title: "Generation of rainfall scenarios based on rainfall transition probability to determine temporal distribution of independent rainstorms", venue: "Stochastic Environmental Research and Risk Assessment, 1–19", doi: "10.1007/s00477-024-02844-7" },
  { type: "intl", year: 2024, authors: "Lee, J., Oh, S.*, Baik, J., Jun, C., Seo, J., & Lee, E. H.*", title: "Grid-based precipitation quantile estimation considering homogeneity using ERA5-Land data for the Korean Peninsula", venue: "Sustainability, 16, 9295", doi: "10.3390/su16219295" },
  { type: "intl", year: 2024, authors: "Osmani, S. A., Jun, C.*, Baik, J., Lee, J., & Narimani, R.", title: "Wavelet-based precipitation preprocessing for improved drought forecasting: a machine learning approach using tunable Q-factor wavelet transform and maximum overlap discrete wavelet transform", venue: "Expert Systems with Applications, 124962", doi: "10.1016/j.eswa.2024.124962" },
  { type: "intl", year: 2024, authors: "Hwang, S., Jun, C., De Michele, C., Kim, H.-J., & Lee, J.*", title: "Rainfall observation leveraging raindrop sounds acquired using waterproof enclosure: exploring optimal length of sounds for frequency analysis", venue: "Sensors, 24(13), 4281", doi: "10.3390/s24134281" },
  { type: "intl", year: 2024, featured: true, authors: "Lee, J.*, Bateni, S. M., Jun, C.*, Heggy, E., Jamei, M., Kim, D., Ghafouri, H. R., & Deenik, J. L.", title: "Hybrid machine learning system based on multivariate data decomposition and feature selection for improved multitemporal evapotranspiration forecasting", venue: "Engineering Applications of Artificial Intelligence, 135, 108744", doi: "10.1016/j.engappai.2024.108744" },
  { type: "intl", year: 2024, authors: "Oh, S., Lee, J.*, Baik, J., Jun, C., & Lee, E. H.*", title: "Morphometric analysis using geographical information system and the relationship with precipitation quantiles of major dam basins in South Korea", venue: "Water, 16(7), 1053", doi: "10.3390/w16071053" },
  { type: "intl", year: 2024, authors: "Lee, J., & Yoo, C.*", title: "Comparing approaches for obtaining downstream hydraulic geometry in two Korean basins: focusing on peak flow velocity", venue: "Journal of Hydrology, 635, 131156", doi: "10.1016/j.jhydrol.2024.131156" },
  { type: "intl", year: 2023, authors: "Lee, J., Moon, G., Lee, J., Jun, C., & Choi, J.*", title: "Evaluation of methods for estimating long-term flow fluctuations using frequency characteristics from wavelet analysis", venue: "Water, 15(16), 2968", doi: "10.3390/w15162968" },
  { type: "intl", year: 2023, authors: "Narimani, R., Jun, C.*, Nezhad, S. M., Bateni, S. M., Lee, J., & Baik, J.", title: "The role of climate conditions and groundwater on baseflow separation in Urmia Lake Basin, Iran", venue: "Journal of Hydrology: Regional Studies, 47, 101383", doi: "10.1016/j.ejrh.2023.101383" },
  { type: "intl", year: 2023, featured: true, authors: "Lee, J., Byun, J., Baik, J., Jun, C., & Kim, H. J.*", title: "Estimation of raindrop size distribution and rain rate with infrared surveillance camera in dark conditions", venue: "Atmospheric Measurement Techniques, 16, 707–725", doi: "10.5194/amt-16-707-2023" },
  { type: "intl", year: 2023, authors: "Lee, J., & Yoo, C.*", title: "Determination of Clark unit hydrograph parameters for estimating probable maximum flood", venue: "Hydrology Research, 54(2), 245–264", doi: "10.2166/nh.2023.120" },
  { type: "intl", year: 2022, authors: "Osmani, S. A., Kim, J. S., Jun, C.*, Sumon, M., Baik, J., & Lee, J.", title: "Prediction of monthly dry days with machine learning algorithms: a case study in Northern Bangladesh", venue: "Scientific Reports, 12(1), 1–21", doi: "10.1038/s41598-022-23436-x" },
  { type: "intl", year: 2022, authors: "Lee, J., & Yoo, C.*", title: "Use of basin outlet velocity to determine the basin concentration time and storage coefficient", venue: "Hydrology Research, 53(10), 1304–1320", doi: "10.2166/nh.2022.066" },
  { type: "intl", year: 2020, authors: "Yoo, C., Shin, H., & Lee, J.*", title: "Evaluation of the storage effect considering possible redevelopment options of the Peace Dam in South Korea", venue: "Water, 12(6), 1674", doi: "10.3390/w12061674" },
  { type: "intl", year: 2019, authors: "Yoo, C., Lee, J.*, Chang, K., & Yang, D.", title: "Sensitivity evaluation of the flash flood warning system introduced to ungauged small mountainous basins in Korea", venue: "Journal of Mountain Science, 16(5), 971–990", doi: "10.1007/s11629-018-4984-4" },
  { type: "intl", year: 2018, authors: "Lee, J., Park, K., & Yoo, C.*", title: "Bias from rainfall spatial distribution in the application of areal reduction factor", venue: "KSCE Journal of Civil Engineering, 22(12), 5229–5241", doi: "10.1007/s12205-017-1773-5" },
  { type: "intl", year: 2017, authors: "Yoo, C.*, Jun, C., & Lee, J.", title: "Storage effect of dam reservoirs: evaluation of three nonlinear reservoir models", venue: "Water Science and Technology: Water Supply, 17(5), 1436–1446", doi: "10.2166/ws.2017.008" },
  { type: "intl", year: 2017, authors: "Yoo, C.*, Lee, J., & Lee, M.", title: "Parameter estimation of the Muskingum channel flood-routing model in ungauged channel reaches", venue: "Journal of Hydrologic Engineering, 22(7), 05017005", doi: "10.1061/(ASCE)HE.1943-5584.0001507", note: "Best Case Study" },
  { type: "intl", year: 2016, authors: "Yoo, C., Lee, J., & Ro, Y.*", title: "Markov chain decomposition of monthly rainfall into daily rainfall: evaluation of climate change impact", venue: "Advances in Meteorology, 2016", doi: "10.1155/2016/7957490" },

  // ===== Korean Journals =====
  { type: "kr", year: 2023, authors: "Cha, H., Lee, J., Jun, C., Byun, J., & Baik, J.*", title: "A comprehensive analysis of temporal characteristics in independent rainstorm events in Seoul: focusing on changes in unit time and secondary peak constant", venue: "Journal of Korea Water Resources Association, 56(11), 785–799", doi: "10.3741/JKWRA.2023.56.11.785" },
  { type: "kr", year: 2023, authors: "Byun, J., Jun, C., Kim, H. J., Lee, J. J., Park, H., & Lee, J.*", title: "Rainfall image DB construction for rainfall intensity estimation from CCTV videos: focusing on experimental data in a climatic environment chamber", venue: "Journal of Korea Water Resources Association, 56(6), 403–417", doi: "10.3741/JKWRA.2023.56.6.403" },
  { type: "kr", year: 2023, authors: "Cha, H., Jun, C., Lee, J., & Baik, J.*", title: "Evaluation of air quality monitoring networks in Korea: focusing on wind direction and speed", venue: "Journal of the Korean Society of Hazard Mitigation, 23(2), 1–13", doi: "10.9798/KOSHAM.2023.23.2.1" },
  { type: "kr", year: 2022, authors: "Lee, J., & Yoo, C.*", title: "Extension methods of non-stationary time series based on wavelet analysis", venue: "Journal of the Korean Society of Hazard Mitigation, 22(6), 41–53", doi: "10.9798/KOSHAM.2022.22.6.41" },
  { type: "kr", year: 2022, authors: "Baik, J., Park, J., Jun, C., & Lee, J.*", title: "Adequacy of the GK-2A AMI land surface temperature product according to geographic factors and compared with other satellite products (MODIS and S-VIRRS)", venue: "Journal of the Korean Society of Hazard Mitigation, 22(3), 15–23", doi: "10.9798/KOSHAM.2022.22.3.15" },
  { type: "kr", year: 2022, authors: "Lee, J., Jun, C., Kim, H. J., Byun, J., & Baik, J.*", title: "Estimation of grid-type precipitation quantile using satellite based re-analysis precipitation data in Korean peninsula", venue: "Journal of Korea Water Resources Association, 55(6), 447–459", doi: "10.3741/JKWRA.2022.55.6.447" },
  { type: "kr", year: 2022, authors: "Lee, J., Byun, J., Hwang, S., Jun, C., & Baik, J.*", title: "Spatiotemporal analysis of variability in domestic PM10 data using grid based spatial interpolation method", venue: "Journal of the Korean Society of Hazard Mitigation, 22(1), 7–19", doi: "10.9798/KOSHAM.2022.22.1.7" },
  { type: "kr", year: 2019, authors: "Lee, J., Lee, H., & Yoo, C.*", title: "Selection of mother wavelet for bivariate wavelet analysis", venue: "Journal of Korea Water Resources Association, 52(11), 905–916", doi: "10.3741/JKWRA.2019.52.11.905" },
  { type: "kr", year: 2019, authors: "Lee, J., & Yoo, C.*", title: "Application of the modified rational formula to time-distributed rainfall events and comparison with the rational formula application", venue: "Journal of the Korean Society of Hazard Mitigation, 19(5), 253–261", doi: "10.9798/KOSHAM.2019.19.5.253" },
  { type: "kr", year: 2019, authors: "Lee, H., Lee, J., & Yoo, C.*", title: "Selecting a mother wavelet for univariate wavelet analysis of time series data", venue: "Journal of Korea Water Resources Association, 52(8), 575–587", doi: "10.3741/JKWRA.2019.52.8.575" },
  { type: "kr", year: 2017, authors: "Song, S., Lee, J., Cho, E., & Yoo, C.*", title: "Comparative evaluation of hydrological cycle in South and North Korea using a land surface model", venue: "Journal of Wetlands Research, 19(1), 16–29", doi: "10.17663/JWR.2017.19.1.016" },
  { type: "kr", year: 2017, authors: "Na, W., Cho, E., Lee, J., & Yoo, C.*", title: "Mean-field-bias correction of the rainfall forecasts using backward storm tracking", venue: "Journal of the Korean Society of Hazard Mitigation, 17(1), 253–263", doi: "10.9798/KOSHAM.2017.17.1.253" },
  { type: "kr", year: 2017, authors: "Ro, Y., Lee, J., Cho, E., & Yoo, C.*", title: "Hydrologic regionalization of basin using multivariate statistical analysis: a case study of Gyeonggi-do 30 districts", venue: "Journal of the Korean Society of Hazard Mitigation, 17(1), 287–300", doi: "10.9798/KOSHAM.2017.17.1.287" },
  { type: "kr", year: 2016, authors: "Cho, E., Lee, J., & Yoo, C.*", title: "Performance evaluation of CMIP5 GCMs using CSEOF analysis", venue: "Journal of the Korean Society of Hazard Mitigation, 16(1), 265–273", doi: "10.9798/KOSHAM.2016.16.1.265" },
  { type: "kr", year: 2015, authors: "Yoo, C., Lee, J.*, Cho, E., Zhu, J. H., & Choi, H.", title: "Evaluation of rain garden for infiltration capability and runoff reduction efficiency", venue: "Journal of Wetlands Research, 17(1), 101–111", doi: "10.17663/JWR.2015.17.1.101" },

  // ===== International Conferences =====
  { type: "conf", year: 2025, authors: "Hwang, S., Ku, S., Lee, J., Byun, J., Sung, J., Cho, M., & Jun, C.", title: "Acoustic-based rainfall observation system for citizen science: leveraging low-cost IoT sensors", venue: "2nd International Sociohydrology Conference, Tokyo, Japan" },
  { type: "conf", year: 2025, authors: "Cha, H., Baik, J., Lee, J., Na, W., & Jun, C.", title: "Development of rainfall scenario with transition probability reflecting on temporal distribution of heavy rainstorm events", venue: "EGU General Assembly 2025, Vienna, Austria" },
  { type: "conf", year: 2024, authors: "Cha, H., Baik, J., Lee, J., Na, W., & Jun, C.", title: "Development of rainfall generator with transition probability focusing on temporal distribution of heavy rainstorm events", venue: "10th International Conference on Water Resource and Environment, Hong Kong" },
  { type: "conf", year: 2024, authors: "Lee, J., Janizadeh, S., Bateni, S. M., Melancon, A., & Molthan, A.", title: "Flood detection by using PolSAR decompositions and the deep residual U-Net approach to enhance food security", venue: "79th SWCS International Annual Conference, South Carolina, USA" },
  { type: "conf", year: 2024, authors: "Hwang, S., Lee, J., Byun, J., Park, K., & Jun, C.", title: "Rainfall intensity estimation based on raindrops sound: leveraging the convolutional neural network for analyzing spectrogram", venue: "EGU General Assembly 2024, Vienna, Austria" },
  { type: "conf", year: 2024, authors: "Cha, H., Baik, J., Kim, H.-J., Lee, J., Byun, J., & Jun, C.", title: "Unveiling the geodetic distribution of temporal characteristics in rainstorm events across Republic of Korea", venue: "EGU General Assembly 2024, Vienna, Austria" },
  { type: "conf", year: 2023, authors: "Khoshkam, H., Valipour, M., Bateni, S. M., Jun, C., Kim, D., Lee, J., Ameri, R., & Band, S. S.", title: "Forecasting rainfall in different climates across the Contiguous United States using a hybrid deep learning model", venue: "AGU Fall Meeting 2023, San Francisco, CA, USA" },
  { type: "conf", year: 2023, authors: "Cha, H., Baik, J., Lee, J., Byun, J., & Jun, C.", title: "Unveiling spatiotemporal similarities in rainstorm patterns across Seoul, Republic of Korea", venue: "AGU Fall Meeting 2023, San Francisco, CA, USA" },
  { type: "conf", year: 2023, authors: "Cha, H., Baik, J., Lee, J., Byun, J., & Jun, C.", title: "Unveiling temporal changes in peak rainfall patterns: a focus on the secondary peak constant at Seoul", venue: "MedGU Annual Meeting 2023, Marrakech, Morocco" },
  { type: "conf", year: 2023, authors: "Lee, J., Sayed, M. B., Jun, C., Heggy, E., Jamei, M., Kim, D., & Ghafouri, H. R.", title: "Daily reference evapotranspiration forecasting via novel hybrid machine learning methods to conserve agricultural water resources", venue: "International Conference on Digitalization and AI in Agricultural Management, Stockholm, Sweden" },
  { type: "conf", year: 2023, authors: "Osmani, S. A., Narimani, R., Baik, J., Lee, J., & Jun, C.", title: "Coupling machine learning algorithms with the tunable Q-factor wavelet transform in forecasting the SPEI at the Bogra Station in Bangladesh", venue: "12th World Congress of the EWRA, Thessaloniki, Greece" },
  { type: "conf", year: 2023, authors: "Hwang, S., Lee, J., Sung, J., Kim, H., Kim, B., & Jun, C.", title: "Precipitation measurement from raindrops' sound and touch signals", venue: "EGU General Assembly 2023, Vienna, Austria" },
  { type: "conf", year: 2023, authors: "Byun, J., Lee, J., Kim, H.-J., & Jun, C.", title: "Real-time rainfall estimation using binarized rain streak images in surveillance cameras", venue: "EGU General Assembly 2023, Vienna, Austria" },
  { type: "conf", year: 2022, authors: "Cha, H., Baik, J., Kim, H., Lee, J., Byun, J., Park, K., Sung, J., Hwang, S., & Jun, C.", title: "An investigation on the relationship between integrated water vapor and standardized precipitation index: a case study of the Northern Part of Africa", venue: "MedGU Annual Meeting 2022, Marrakech, Morocco" },
  { type: "conf", year: 2022, authors: "Lee, J., Hwang, S., Baik, J., Kim, H.-J., & Jun, C.", title: "A rhapsody in the rain: sound, drop size distribution, and rain rate", venue: "AGU Fall Meeting 2022, Chicago, IL, USA" },
  { type: "conf", year: 2022, authors: "Kim, H.-J., Baik, J., Cha, H., Lee, J., & Jun, C.", title: "A role of water vapor from the atmospheric river on precipitation development", venue: "AGU Fall Meeting 2022, Chicago, IL, USA" },
  { type: "conf", year: 2022, authors: "Lee, J., Yoo, C., & Jun, C.", title: "Investigating the relationship between flow fluctuation and basin characteristics of the dam basins", venue: "Structures 22, Seoul, Korea" },
  { type: "conf", year: 2022, authors: "Nezhad, S., Jun, C., Narimani, R., Byun, J., Baik, J., & Lee, J.", title: "Investigating roles of baseflow on water level in Lake Urmia, Iran", venue: "EGU General Assembly 2022, Vienna, Austria" },
  { type: "conf", year: 2022, authors: "Lee, J., Baik, J., Byun, J., Park, K., & Jun, C.", title: "Assessment of probability precipitation using high resolution precipitation dataset in Korean Peninsula", venue: "IWA Water Safety Conference 2022, Narvik, Norway" },
  { type: "conf", year: 2018, authors: "Lee, J., Yoo, C., & Tung, Y.", title: "Evaluation of rain garden for infiltration capability and runoff reduction", venue: "4th International Conference on Water Resource and Environment (WRE2018), Kaohsiung, Taiwan" },
  { type: "conf", year: 2017, authors: "Lee, J., Cho, E., & Yoo, C.", title: "Consideration of storm shape in the application of areal reduction factor", venue: "22nd International Congress on Modelling and Simulation (MODSIM2017), Tasmania, Australia" },
  { type: "conf", year: 2017, authors: "Cho, E., Song, S., & Lee, J.", title: "Analysis and evaluation of soil moisture data simulated by the VIC model: application to the Korean Peninsula", venue: "AOGS 14th Annual Meeting, Singapore" },
  { type: "conf", year: 2016, authors: "Cho, E., Lee, J., Song, S., Lee, M., Na, W., & Lee, Y.", title: "Uncertainty analysis of CMIP5 general circulation models using cyclostationary empirical orthogonal function", venue: "AOGS 13th Annual Meeting, Beijing, China" },
  { type: "conf", year: 2015, authors: "Lee, J., Cho, E., Lee, M., & Zhu, J.", title: "Evaluation of rain garden for infiltration capability and runoff reduction efficiency", venue: "AOGS 12th Annual Meeting & APHW 7th Conference, Singapore" },
  { type: "conf", year: 2015, authors: "Cho, E., Lee, J., & Song, S.", title: "Applicability evaluation of bivariate frequency analysis using copula", venue: "AOGS 12th Annual Meeting & APHW 7th Conference, Singapore" },
  { type: "conf", year: 2014, authors: "Jun, C., Zhu, J. H., Lee, J., Cho, E., & Yoo, C.", title: "Comparison of storage effect in South and North Han River basin in Korea with concept of storage coefficient", venue: "AOGS 11th Annual Meeting, Sapporo, Japan" },

  // ===== Patents (Registered) =====
  { type: "patent", year: 2025, authors: "Jun, C., Byun, J., Lee, J., & Kim, H.", title: "System and method for generating a rain-streak dataset based on real-environment rainfall images", venue: "Korean Patent No. 10-2856324" },
  { type: "patent", year: 2025, authors: "Jun, C., Cha, H., Lee, J., Baik, J., & Byun, J.", title: "System and method for constructing rainfall scenarios considering the temporal distribution characteristics of actual heavy rainfall events", venue: "Korean Patent No. 10-2856315" },
  { type: "patent", year: 2025, authors: "Jun, C., Baik, J., Lee, J., Byun, J., Hwang, S., & Sung, J.", title: "Method for providing rainfall information using a moving unit equipped with a vibration sensor", venue: "Korean Patent No. 10-2750951" },
  { type: "patent", year: 2024, authors: "Jun, C., Baik, J., Lee, J., Byun, J., Hwang, S., & Sung, J.", title: "System and method for classifying real-time rainfall intensity based on rainfall acoustic frequency analysis", venue: "Korean Patent No. 10-2692441" }
];
