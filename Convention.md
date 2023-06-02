# Summak ToyProject 규칙 컨벤션

## Branch 전략

## Git Commit Convention
- feat : 기능을 추가했을 경우 사용합니다.
- release : 배포시 사용합니다.
- fix : 버그를 수정했을 경우 사용합니다.
- refactor : 기존 코드를 리팩토링 했을 경우 사용합니다.
- docs : 주석이나 문서 작업을 했을 경우 사용합니다. (기능적 변화가 없어야합니다.)
- style : 코드 스타일이나, css작업을 했을 경우 사용합니다.

### Git Commit Emoji
- 🎨 :art: 코드의 구조/형태 개선 Improve structure / format of the code.

- ⚡️ :zap: 성능 개선 Improve performance.

- 🔥 :fire: 코드/파일 삭제 Remove code or files.

- 🐛 :bug: 버그 수정 Fix a bug.

- 🚑 :ambulance: 긴급 수정 Critical hotfix.

- ✨ :sparkles: 새 기능 Introduce new features.

- 📝 :memo: 문서 추가/수정 Add or update documentation.

- 💄 :lipstick: UI/스타일 파일 추가/수정 Add or update the UI and style files.

- 🎉 :tada: 프로젝트 시작 Begin a project.

- ✅ :white_check_mark: 테스트 추가/수정 Add or update tests.

- 🔒 :lock: 보안 이슈 수정 Fix security issues.

- 🔖 :bookmark: 릴리즈/버전 태그 Release / Version tags.

- 💚 :green_heart: CI 빌드 수정 Fix CI Build.

- 📌 :pushpin: 특정 버전 의존성 고정 Pin dependencies to specific versions.

- 👷 :construction_worker: CI 빌드 시스템 추가/수정 Add or update CI build system.

- 📈 :chart_with_upwards_trend: 분석, 추적 코드 추가/수정 Add or update analytics or track code.

- ♻️ :recycle: 코드 리팩토링 Refactor code.

- ➕ :heavy_plus_sign: 의존성 추가 Add a dependency.

- ➖ :heavy_minus_sign: 의존성 제거 Remove a dependency.

- 🔧 :wrench: 구성 파일 추가/삭제 Add or update configuration files.

- 🔨 :hammer: 개발 스크립트 추가/수정 Add or update development scripts.

- 🌐 :globe_with_meridians: 국제화/현지화 Internationalization and localization.

- 💩 :poop: 똥싼 코드 Write bad code that needs to be improved.

- ⏪ :rewind: 변경 내용 되돌리기 Revert changes.

- 🔀 :twisted_rightwards_arrows: 브랜치 합병 Merge branches.

- 📦 :package: 컴파일된 파일 추가/수정 Add or update compiled files or packages.

- 👽 :alien: 외부 API 변화로 인한 수정 Update code due to external API changes.

- 🚚 :truck: 리소스 이동, 이름 변경 Move or rename resources (e.g.: files paths routes).

- 📄 :page_facing_up: 라이센스 추가/수정 Add or update license.

- 💡 :bulb: 주석 추가/수정 Add or update comments in source code.

- 🍻 :beers: 술 취해서 쓴 코드 Write code drunkenly.

- 🔊 :loud_sound: 로그 추가/수정 Add or update logs.

- 🙈 :see_no_evil: .gitignore 추가/수정 Add or update a .gitignore file.

## CSS 컨벤션

- 원칙적으로 공용 css파일은 건들지 않고, .module.scss 파일 사용.
- 공용 css파일은 /src/index.scss파일임.
- 색상은 _variables.scss에 명시된 색상에서, 필요한 색상을 추가할 땐 조원과 합의하에 추가.
- 공용 css파일 역시 추가할 클래스 명이 있으면 조원과 합의하에 추가.
- .module.scss파일은 각자 편한 방식으로


## 라우터

- 각자 맡은 페이지의 최상위 폴더를 `pages/` 안에 작성 후 그 안에 하위 페이지 폴더를 만들어 작성한다.
- import의 편리함을 위해 각 폴더의 하위 경로에 index.tsx파일을 작성하기로 함.
-  