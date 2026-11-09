# Backend Developer Portfolio

Java · Spring Boot 기반으로 서비스를 기획부터 배포까지 직접 만들어 온 프로젝트를 정리했습니다.

---

## 🛠 기술 스택

| 구분 | 기술 |
|---|---|
| Backend | Java · Spring Boot · Spring Security · JPA · JWT · OAuth2 |
| Database | MySQL · Flyway |
| Frontend | React · JavaScript |
| AI | Python · FastAPI · CatBoost |
| DevOps | Docker · AWS EC2 · Nginx · GitHub Actions |
| Test · Security | JUnit · JaCoCo (80% CI 게이트) · API 보안 4종 전수 테스트 |

---

## 📂 프로젝트

| 프로젝트 | 설명 | 핵심 엔지니어링 강점 | 링크 |
|---|---|---|---|
| **JEJURO**<br>개인 AI 맞춤 여행 | AI 제주 관광지 추천 및 동선·일정 최적화 웹 서비스 | • 자동 저장 충돌 방지 (SHA-256 해시 버전 + 비관적 락 409)<br>• 2-opt 알고리즘 기반 방문 순서 최적화<br>• **핵심 API 보안 테스트** (세션·CSRF·무차별 대입 차단·CSV 인젝션 방어) | [상세](./JEJURO) · [코드](https://github.com/LEEYEWIN/project1) · [서비스](https://jejuro.projectbyhj.site) |
| **VANITY**<br>나만의 화장대 | 화장품 성분 분석 및 피부 맞춤 루틴 관리 서비스 | • 동시 저장 교착 상태 해결 (비관적 락 순서 고정)<br>• OCR 불확실성 4단계 매칭 (EXACT→FUZZY)<br>• **보안 4종 전체 전수 검증** (401·403·404·200 + DB 무결성 확인) | [상세](./VANITY) · [코드](https://github.com/hamzzy-oao/mycosmetic) |
| **JOBNOTE**<br>취업 준비 관리 | 채용 공고 탐색부터 지원 현황·이력서 통합 관리 서비스 | • 채용 사이트 구조 변경 '0건' 조용한 실패 감지<br>• 외부 API 지연 없는 선응답 비동기 데이터 보강<br>• **서비스 계층 분기 커버리지 80.3% CI 게이트** (80% 미만 시 PR merge 차단) | [상세](./JOBNOTE) · [코드](https://github.com/hamzzy-oao/project3) |

---

### JEJURO · 개인 AI 맞춤 여행
`Java` `Spring Boot` `React` `Python` `FastAPI` `CatBoost` `MySQL` `Docker` `AWS EC2` `Spring Security` `OAuth2` `JPA` `Kakao Map API`

![JEJURO](./JEJURO/gifs/jejuro_06_schedule.gif)

### VANITY · 나만의 화장대
`Java` `Spring Boot` `React` `MySQL` `Spring Security` `JWT` `OAuth2` `JPA` `Docker` `AWS EC2` `GitHub Actions`

![VANITY](./VANITY/gifs/vanity_03_my_vanity.gif)

### JOBNOTE · 취업 준비 관리
`Java` `Spring Boot` `React` `MySQL` `Spring Security` `JWT` `JPA` `Docker` `Nginx` `AWS EC2` `GitHub Actions`

![JOBNOTE](./JOBNOTE/gifs/jobnote_02_applications.gif)
