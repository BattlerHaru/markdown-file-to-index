# Markdown file content to index

Get headers (H2 to H4) and convert at index links

## 📘 Instructions

Copy or rename your markdown file(.md) to "original.md" and run the next command

```bash
npm run start
```

✅ If all success a will be created file "result.md" with all index links

## 📒 Example

📁 original.md

```md
## Title1
Irure amet dolore ullamco excepteur aliquip ex sint.
### SubTitle1
Exercitation deserunt eu ea proident non eu anim cillum sunt exercitation labore. Eu eu tempor amet est fugiat officia laboris ut irure nulla fugiat velit est. Exercitation quis labore in nulla.
### SubTitle2
#### SubSubTitle1
Irure amet dolore ullamco excepteur aliquip ex sint.
#### SubSubTitle2
example code
"`js"
let a = () => {
  console.log("example");
};
"`"
Irure amet dolore ullamco excepteur aliquip ex sint.
#### SubTitle3
Irure amet dolore ullamco excepteur aliquip ex sint.
## Title2
```

📁 result.md

```md
1. [Title1.](#title1)
   1. [SubTitle1.](#subtitle1)
   2. [SubTitle2.](#subtitle2)
      - [SubSubTitle1.](#subsubtitle1)
      - [SubSubTitle2.](#subsubtitle2)
      - [SubTitle3.](#subtitle3)
2. [Title2.](#title2)
```
