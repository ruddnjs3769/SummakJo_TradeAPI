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
