# Creat React App

```bash
npx create-react-app ./ --template typescript
```

# VSCode Setting

`/.vscode` 디렉터리를 참고해주세요.

# ESLint, Prettier Setting

```bash
npx eslint --init
```

eslint는 `/.eslintrc.json`파일을 참고해주세요.

prettier

```json
{
	
	"printWidth": 120, // 한 줄에 120자로 제한합니다. eslint와 충돌을 막기 위한 옵션입니다.
	"tabWidth": 2, // tabWidth를 2칸으로 설정합니다.
	"useTabs": true, // \t 를 스페이스 대신 사용합니다. eslint에서 tab을 강제합니다. eslint와 충돌을 막기 위한 옵션입니다.
	"semi": false, // 세미콜론을 사용하지 않습니다.
	"singleQuote": true, // 작은 따옴표를 사용합니다.
	"quoteProps": "as-needed", // 객체 속성에 따옴표를 사용합니다. eslint와 충돌을 막기 위한 옵션입니다.
	"trailingComma": "none", // 객체 마지막에 콤마를 사용하지 않습니다.
	"bracketSpacing": true, // true시 { foo: 'bar'}, false시 {foo:'bar'}
	"arrowParens": "always", // 화살표 함수에서 인자가 하나일 경우에도 괄호를 생략하지 않습니다.
	"endOfLine": "lf" // 개행문자를 Line Feed로 설정합니다.
}
```

# TypeScript

version : 4.9.5

## issue

5.0.4 버전까지 릴리즈되었지만, react-scripts는 이전 버전의 typescript를 사용하기 떄문에 충돌이 발생합니다.

[react-scripts, typescript 충돌](https://github.com/npm/cli/issues/2128)

그래서 typescript 4.9.5 버전을 사용합니다.

## Setting

tsconfig.json 파일을 참고해주세요.

# SCSS(SASS) Setting

node-sass와 sass중 선택할 수 있는데

node-sass는 nodejs버전에 의존적이기 때문에 sass를 사용합니다.

nodejs 18버전 이상일 경우 아래 두 가지 방법 중 하나를 선택해서 사용할 수 있습니다.

```bash
npm install node-sass@8
npm install sass
```

# Assets

아래와 같이 파일에 접근할 수 있습니다.

```html
<img src=`${process.env.PUBLIC_URL}/images/logo.svg`/>
```

# Branch 전략

- feat : 기능을 추가했을 경우 사용합니다.
- release : 배포시 사용합니다.
- fix : 버그를 수정했을 경우 사용합니다.
- refactor : 기존 코드를 리팩토링 했을 경우 사용합니다.
- docs : 주석이나 문서 작업을 했을 경우 사용합니다. (기능적 변화가 없어야합니다.)
- style : 코드 스타일이나, css작업을 했을 경우 사용합니다.

# Git Emoji
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