import { Redirect } from "expo-router";
import React from "react";

export default function homeScreen() {
  return <Redirect href={"/TabBarRoute"} />;
}
