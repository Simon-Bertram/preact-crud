import { signal } from "@preact/signals";

export const user = signal({
  _id: "",
  name: "",
  email: "",
  password: "",
  imageUrl: "",
});

export const users = signal([]);
