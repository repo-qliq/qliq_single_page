import SitemapGenerator from "sitemap-generator";

const generator = SitemapGenerator("https://qliqinvest.ru", {
  stripQuerystring: false, // Если ваши маршруты содержат параметры запроса
  filepath: "./public/sitemap.xml", // Путь, где будет сохранен файл sitemap.xml
});

generator.on("done", () => {
  console.log("Sitemap generated successfully!");
});

generator.on("error", (error) => {
  console.error("An error occurred while generating the sitemap:", error);
});

generator.start();
