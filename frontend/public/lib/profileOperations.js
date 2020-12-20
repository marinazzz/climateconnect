import { getImageUrl } from "./imageOperations";
import Router from "next/router";

export function parseProfile(profile, detailledSkills, keepOldProps) {
  let user = { info: {} };
  if (keepOldProps) {
    user.first_name = profile.first_name;
    user.last_name = profile.last_name;
    user.info.location = profile.location;
  }
  user = {
    ...user,
    url_slug: profile.url_slug,
    name: profile.first_name + " " + profile.last_name,
    image: getImageUrl(profile.image),
    background_image: getImageUrl(profile.background_image),
    info: {
      ...user.info,
      location: profile.location,
      bio: profile.biography,
      skills: profile.skills && profile.skills.map((s) => s.name),
      availability: profile.availability && profile.availability.name,
      website: profile.website,
    },
  };
  if (keepOldProps) delete user.info.location;
  if (detailledSkills) user.info.skills = profile.skills.map((s) => ({ ...s, key: s.id }));
  return user;
}

const SIGN_UP_MESSAGE =
  "You are now a Climate Connect member. On this page you can customize your profile.";

export function redirectOnLogin(user, redirectUrl) {
  if (user.has_logged_in < 2) {
    Router.push({
      pathname: "/editprofile",
      query: {
        message: SIGN_UP_MESSAGE,
      },
    });
  } else if (redirectUrl) {
    if (redirectUrl[0] === "/") redirectUrl = redirectUrl.substring(1, redirectUrl.length);
    window.location.replace(window.location.origin + "/" + redirectUrl);
  } else Router.push("/browse");
}
