const quotes = [
    {
        quote:"트위터는 인생의 낭비다",
        author:"퍼거슨"
    },
    {
        quote:"꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다",
        author:"월트 디즈니"
    },
    {
        quote:"웃음이 없는 하루는 버린 하루다.",
        author:"찰리 채플린"
    },
    {
        quote:"행동은 모든 성공의 가장 기초적인 핵심이다.",
        author:"파블로 피카소"
    },
    {
        quote:"용기란 죽을만큼 두려워도 무언가 해보는 것이다.",
        author:"존 웨인"
    },
    {
        quote:"승리는 가장 끈기 있는 사람에게 돌아간다",
        author:"나폴레옹"
    },
    {
        quote:"노력하는 사람에게 불가능이란 없다.",
        author:"알렉산더"
    },
    {
        quote:"오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다",
        author:"워렌 버핏"
    },
    {
        quote:"너는 머뭇거릴 수 있지만, 시간은 그렇지 않다",
        author:"프랭클린"
    },
    {
        quote:"나약한 태도는 그 사람 자체도 나약하게 만든다.",
        author:"아인슈타인"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const len = quotes.length;
const todaysQuete = quotes[Math.floor(Math.random() * len)];

quote.innerText = todaysQuete.quote;
author.innerText = todaysQuete.author;