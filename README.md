## 한양대학교 2022-2학기 정보시스템설계 프로토타입

### 개요

- RFP로 부터 실제로 만들어진 정보시스템을 하나 선정한다.
- 해당 RFP 를 살펴보고, 요구사항에 따라서 나라면 정보시스템을 어떻게 설계할 것인지에 대한 발표를 진행한다.
- 이 github 은 해당 정보시스템 설계에 대한 기본적인 프로토타입이다.

----------

### 선정한 실제 정보시스템

- 사업추진 보고서 : [2020년도 범정부 민원상담 365(챗봇 공통기반) 구축(1단계)](https://egov.nia.or.kr/PubDataDetail.do;jsessionid=E4209F37524655CD844F4D10BCD0BE76.1b73db49bc4306361112)
- [RFP](<https://www.g2b.go.kr/pt/menu/selectSubFrame.do?framesrc=/pt/menu/frameTgong.do?url=https://www.g2b.go.kr:8101/ep/tbid/tbidList.do?taskClCds=&bidNm=%B9%FC%C1%A4%BA%CE%20%B9%CE%BF%F8%BB%F3%B4%E3%20365(%C3%AA%BA%BF%20%B0%F8%C5%EB%B1%E2%B9%DD)%20%B1%B8%C3%E0(1%B4%DC%B0%E8)&searchDtType=1&fromBidDt=2020/04/01&toBidDt=2020/08/01&fromOpenBidDt=&toOpenBidDt=&radOrgan=1&instNm=&area=&regYn=Y&bidSearchType=1&searchType=1>)
- 실제 정보시스템 결과물 : [국민비서 챗봇](https://chatbot.ips.go.kr/ptl/main.ndo)

------------

### RFP 에서 선정한 요구사항

- 기능 요구사항 (System Functional Requirements)

|`SFR-4 유저인터페이스`|`SFR-5 챗봇 지정 질의`|`SFR-6 전체 쳇봇 질의`|
|------------------|-------------------|-------------------|
|챗봇 서비스를 상대로 질의<br>전체 챗봇 서비스를 대상으로 질의<br>답변생성 후 답변 결과에 대한 이용자 만족도를 조사|이용자가 특정 챗봇을 지정하여 질의<br>챗봇 분기 기능을 거치지 않으며 챗봇 엔진이 지정된 챗봇의 지식베이스를 활용하여 이용자와의 대화를 처리함|챗봇을 선택하지 않고 임의의 챗봇에 대하여 질의<br>챗봇 분기 기능을 거쳐서 대화를 처리할 챗봇을 선택하고, 챗봇 엔진이 선택된 챗봇의 지식베이스를 활용해 이용자와의 대화를 처리|


- 성능 요구사항 (Performance Requirements)
  - **PER-3 쳇봇 응답 시간**
  - **PER-5 웹페이지 디스플레이 시간**
