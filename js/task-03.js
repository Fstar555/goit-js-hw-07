"use strict";
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-outnput");

const updateUserName = () => {
  const updateName = nameInput.value.trim();

  nameOutput.textContent = updateName ? updateName : "Anonymous";
};

nameInput.addEventListener("input", updateUserName);
