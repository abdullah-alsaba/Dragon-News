import { toast } from "react-toastify";
import { authClient } from "./auth-client";

export async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );

  const data = await res.json();
  return data.data;
}
export async function getNewsByCategoryId(category_id) {
  const res = await fetch(
    ` https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );

  const data = await res.json();
  return data.data;
}

export async function getNewsById(news_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`,
  );

  const data = await res.json();
  return data.data[0];
}

export const handelGoogleLogIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  } catch (error) {
    toast.error("Google login failed:", error);
  }
};

export const handelGithubLogIn = async () => {
  try {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/",
    });
  } catch (error) {
    toast.error("Github login failed:", error);
  }
};