const emojiGallery = document.querySelector(".emoji-gallery");

for(const emojis in emoji){
  const emojiInsert = document.createElement("div");
  emojiInsert.className = "emojis"
  emojiInsert.innerHTML = `<span>${emoji[emojis].char}</span><p>${emoji[emojis].name}</p>`;
  emojiGallery.append(emojiInsert);
}

