import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

//importing the filesytem to help store images in files
import fs from "node:fs";

const db = sql("meals.db");

export function getMeals() {
  // throw new Error("Loading meals from database failed");
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ? ").get(slug);
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lowercase: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const filename = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${filename}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed");
    }
  });

  meal.image = `/images/${filename}`;

  db.prepare(
    `
  INSERT INTO meals
  (title, summary, instructions,creator,creator_email,slug,image)
  VALUES(
    @title,
    @summary,
    @instructions,
    @creator,
    @creator_email,
    @slug,
    @image
  )
  `
  ).run(meal);
}
