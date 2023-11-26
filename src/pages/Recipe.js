// src/pages/Recipes.js
import React from "react";
import RecipeCard from "./RecipeCard";

const Recipe = () => {
  const recipes = [
    {
      title: "간장 연어 덮밥",
      ingredients: "연어, 간장, 마늘, 양파, 설탕, 밥, 와사비",
      instructions:
        "후라이팬에 간장과 물을 3:2로 넣습니다. 물이 끓으면 설탕과 다진 마늘, 양파를 넣고 중약불에서 5분 기다립니다. 밥 위에 양념을 넣고 연어를 올려주고 와사비로 마무리합니다.",
    },

    {
      title: "불고기 비빔밥",
      ingredients:
        "밥, 소불고기, 채소 (당근, 상추, 고추 등), 고추장, 간장, 참기름",
      instructions:
        "밥 위에 소불고기, 다양한 채소, 고추장, 간장, 참기름을 올려 잘 섞어 먹습니다.",
    },

    {
      title: "김치 찌개",
      ingredients:
        "물, 돼지고기, 김치, 두부, 양파, 대파, 고추, 고춧가루, 간장, 국간장",
      instructions:
        "끓는 물에 돼지고기와 김치를 넣고 끓인 뒤, 두부, 양파, 대파, 고추를 넣고 간장과 국간장으로 간을 맞춘 후 끓입니다.",
    },

    // 레시피 추가하기
    {
      title: "간장 치킨 볶음밥",
      ingredients:
        "밥, 닭가슴살, 양파, 당근, 간장, 굴소스, 다진 마늘, 후추, 계란",
      instructions:
        "닭가슴살을 잘게 썬 후 양파와 당근을 다져줍니다. 팬에 식용유를 두르고 닭과 야채를 볶아줍니다. 간장, 굴소스, 다진 마늘, 후추를 넣고 볶은 후 밥을 넣어 볶음밥을 만듭니다. 마지막으로 계란을 풀어 넣고 볶아 완성합니다.",
    },

    {
      title: "새우튀김",
      ingredients: "생새우, 소금, 후추, 부침가루, 식용유",
      instructions:
        "생새우를 소금과 후추로 재워 양념한 후 부침가루에 올려 물에 헹군 뒤 튀깁니다. 식용유에 튀겨 새우튀김을 만들어 완성합니다.",
    },

    {
      title: "된장 찌개",
      ingredients: "된장, 물, 두부, 감자, 돼지고기, 대파, 청양고추",
      instructions:
        "된장을 물에 풀어 걸러내고 끓는 물에 넣어 끓입니다. 다음으로 돼지고기와 채소를 넣고 익힌 후 두부와 대파, 청양고추를 넣고 끓여 완성합니다.",
    },

    {
      title: "된장 두부볶음",
      ingredients: "된장, 두부, 대파, 식용유, 다진 마늘, 간장, 설탕",
      instructions:
        "두부를 깍두기 모양으로 자릅니다. 팬에 식용유를 두르고 다진 마늘을 볶아 향을 내고, 두부를 넣어 볶아줍니다. 간장, 설탕, 된장을 넣고 익힌 후 대파를 뿌려 완성합니다.",
    },
    {
      title: "콩나물밥",
      ingredients: "콩나물, 밥, 소금, 참기름, 깨",
      instructions:
        "콩나물을 데친 후 밥과 섞어줍니다. 소금과 참기름을 넣고 깨를 뿌린 후 고루 섞어 콩나물밥을 만들어 완성합니다.",
    },
    {
      title: "시금치 두부국",
      ingredients: "시금치, 두부, 대파, 다시마 육수, 간장, 소금, 고춧가루",
      instructions:
        "물에 다시마를 넣고 끓여 육수를 만듭니다. 대파와 두부를 넣고 끓인 후 시금치를 넣어 익힙니다. 간장, 소금, 고춧가루로 간을 맞춘 후 완성합니다.",
    },
    {
      title: "치즈 닭가슴살 구이",
      ingredients:
        "닭가슴살, 양파, 마늘, 소금, 후추, 모짜렐라 치즈, 올리브 오일",
      instructions:
        "닭가슴살을 양파와 마늘과 함께 양념에 재워두고 구이 팬에 구워줍니다. 소금과 후추로 간을 맞추고 마지막에 모짜렐라 치즈를 뿌려 녹인 후 완성합니다.",
    },
    {
      title: "샐러리 샐러드",
      ingredients: "샐러리, 사과, 호두, 마요네즈, 레몬 주스, 소금",
      instructions:
        "샐러리와 사과를 채썰어 호두와 함께 섞어줍니다. 마요네즈와 레몬 주스로 간을 맞추고 소금으로 간을 조절하여 샐러리 샐러드를 완성합니다.",
    },
    {
      title: "토마토 스파게티",
      ingredients:
        "스파게티, 토마토, 양파, 마늘, 올리브 오일, 바질, 소금, 후추",
      instructions:
        "스파게티를 삶아 놓고 팬에 올리브 오일과 다진 마늘을 볶아 양파를 넣어 익힙니다. 다진 토마토를 넣고 끓인 후 스파게티와 함께 섞어 바질, 소금, 후추로 간을 맞춰 완성합니다.",
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold mb-4">레시피</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
