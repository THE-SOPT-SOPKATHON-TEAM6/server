# server

# 서버 6조

### 1차 과제

# 1️⃣ README GitHub 링크 제출

# 🎶 서비스 이름과 간단한 소개

- 서비스 이름: 심포니(symphony)
    - 서비스 소개: 악보 형태로 일상을 기록할 수 있는 서비스
        - 음표로 하루의 기분을 기록하세요.
        - 음표가 모여 내 일상이 악보가 됩니다.
        - 완성된 악보를 통해 내 일상을 되돌아보세요.

# 👩‍💻 각자 개발 담당 부분

- 글(음표) 등록(POST): 임승하
- 악보 전체 조회(GET) :김민욱

# ♟ 브랜치 전략

**`Type`**

`[ADD]`: 새로운 기능이 추가됐어요.

`[UPDATE]`: 기능이 업데이트 됐어요.

`[FIX]`: 버그가 수정됐어요.

`[DOCS]`: README, wiki 문서를 수정했어요

`[STYLE]`: 코드 변경 없이 스타일 변경했어요.

`[CHORE]`: 기타 사항이에요. (주석 추가 등등)

예를 들어, `git commit -m "[ADD] 회원가입 기능 완료"` 와 같이 작성해요.

# 🗂 프로젝트 폴더링

```jsx
📦 config                    
 ┗ 📜 index.ts

📦 controllers               
 ┣ 📜 index.ts
 ┗ 📜 BoardController.ts

📦 interfaces                
 ┗ 📂 common
 ┃ ┣ 📜 PostBaseResponseDto.ts
 ┗ 📂 board
   ┣ 📜 BoardInfo.ts
   ┣ 📜 BoardCreateDto.ts
   ┗ 📜 index.ts

📦 loaders                 
 ┗ 📜 db.ts

📦 models                    
 ┣ 📜 User.ts
 ┗ 📜 Board.ts

📦 modules                  
 ┣ 📜 statusCode.ts
 ┣ 📜 ResponseMessage.ts
 ┗ 📜 utils.ts

📦 routes                   
 ┣ 📜 BoardRouter.ts
 ┗ 📜 index.ts

📦 services                  
 ┣ 📜 BoardService.ts
 ┗ 📜 index.ts
```

# 🗨️ 컨벤션

### **한 줄의 최대 길이는 80자로 제한해요.**

- VSCode의 Prettier 설정 등을 통해 통일하도록 해요.

VScode - [File] - [Settings] - [Word Wrap Column 검색]

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99d2ca58-c660-460b-9eb7-544ddcfadfe5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/99d2ca58-c660-460b-9eb7-544ddcfadfe5/Untitled.png)

### **변수(함수)명에 대한 Naming Convention**

- 변수, 함수, 인스턴스는 *Camel Case(=lower 카멜 케이스)*를 사용해요.
    
    ex) camelCase
    
- 함수의 경우 동사+명사 형태로 구성해요.
    
    ex) getUserInfomation()
    
- 글자의 길이
    - 글자의 길이는 20자 이내로 제한해요.
    - 4단어 이상이 들어가거나, 부득이하게 20자 이상이 되는 경우 팀원과의 상의를 거쳐요.
- flag로 사용되는 변수
    - Boolean의 경우 조동사+flag 종류로 구성된다. ex) isNum, hasNum
- 약칭의 사용
    - 약어는 되도록 사용하지 않아요.
    
    ```jsx
    let idx; // bad
    let index; // good
    
    let cnt; // bad
    let count; // good
    
    let arr; // bad
    let array; // good
    
    let seoul2Bucheon; // bad
    let seoulToBucheon; // good
    ```
    
    - 부득이하게 약어가 필요하다고 판단되는 경우 팀원과의 상의를 거쳐요.

### **주석 규칙**

한줄은 //로 적고, 그 이상은 /** */로 적어요.

```jsx
// 한줄 주석일 때
/**
 * 여러줄
 * 주석일 때
 */
```

**함수에 대한 주석**

- 하나의 파일의 시작 부분에 주석으로 상세 내용을 작성해요.
    - route는 API route, descs는 해당 API에 대한 설명을 적어요.
    - 예시 코드
    
    ```jsx
    /**
     *  @route DELETE activity/
     *  @desc 활동 삭제
     */
    module.exports = async (req: Request, res: Response, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(sc.NULL_VALUE).send(fail(sc.NULL_VALUE, rm.NULL_VALUE));
      }
    	...
    ```
    

### **bracket({}) 규칙**

if문의 실행문이 한 줄일 때

- 반복문, 함수의 탈출
    - 여러 줄로 작성해요.
    
    ```jsx
    if(trigger) {
      return;
    }
    // logic start
    ```
    

### 괄호 사용

- (if, while, for)문 괄호 뒤에 한칸을 띄우고 사용해요.
    
    ```jsx
    if (left == true) {
    	// logic
    }
    ```
    

### 띄어쓰기

```jsx
let a = 5;  ( = 양쪽 사이로 띄어쓰기 해요)
if (a == 3) {
	// logic
}
```

### **함수 파라미터 개수 제한**

함수의 인자로 변수를 선언하는 것은 3개까지 가능해요.

ex) `const hoonsae = (a,b,c) ⇒ {}` OK

 `const hoonsae = (a,b,c,d) ⇒ {}` BAD

### **비동기 함수의 사용**

Promise함수의 사용은 지양하고 async, await를 사용하도록 해요.

다만 로직을 짜는 데 있어 promise를 불가피하게 사용할 경우, 주석으로 표시하고 commit에 그 이유를 작성해요.

# 2️⃣ API 명세서 초안 작성

[API 명세서](https://www.notion.so/API-a5a316b0e0544bb5b0b460f451eede08)

### 2차 과제

- GitHub 링크 제출
    - README 내용 추가
    - API 명세서
    - 프로젝트
